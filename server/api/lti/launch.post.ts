import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // Extract LTI 1.3 ID Token from request
  const idToken = body.id_token

  if (!idToken) {
    throw createError({
      statusCode: 400,
      message: 'Missing id_token parameter'
    })
  }

  try {
    // In a real implementation, you would:
    // 1. Fetch the public key from Canvas JWKS endpoint
    // 2. Verify the token signature using that key
    // For this example, we'll decode without verification (NOT production ready)
    
    const decoded = jwt.decode(idToken) as any

    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: 'Invalid token'
      })
    }

    // Extract user and context information
    const canvasId = decoded.sub
    const name = decoded.name || 'Unknown User'
    const email = decoded.email
    const roles = decoded['https://purl.imsglobal.org/spec/lti/claim/roles'] || []
    const context = decoded['https://purl.imsglobal.org/spec/lti/claim/context']
    const deploymentId = decoded['https://purl.imsglobal.org/spec/lti/claim/deployment_id']
    const messageType = decoded['https://purl.imsglobal.org/spec/lti/claim/message_type']

    // Determine user role
    const role = getRoleFromLtiClaims(roles)

    // Create or update user in database
    const user = await prisma.user.upsert({
      where: { canvasId },
      update: {
        name,
        email,
        role,
      },
      create: {
        canvasId,
        name,
        email,
        role,
      },
    })

    // Create or update course
    if (context) {
      await prisma.course.upsert({
        where: { canvasId: context.id },
        update: {
          name: context.title,
          code: context.label,
        },
        create: {
          canvasId: context.id,
          name: context.title,
          code: context.label,
        },
      })
    }

    // Create session token
    const sessionToken = uuidv4()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    await prisma.ltiSession.create({
      data: {
        userId: user.id,
        canvasId: user.canvasId,
        courseId: context?.id || '',
        role: user.role,
        sessionToken,
        ltiMessageType: messageType,
        deploymentId,
        expiresAt,
      },
    })

    // Set session cookie
    setCookie(event, 'lti_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    })

    // Return redirect URL or session info
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
      courseId: context?.id,
      redirectUrl: '/dashboard',
    }
  } catch (error: any) {
    console.error('LTI launch error:', error)
    throw createError({
      statusCode: 500,
      message: 'LTI launch failed: ' + error.message
    })
  }
})
