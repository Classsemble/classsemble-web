import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'

export interface LtiClaims {
  sub: string // user ID
  name: string
  email?: string
  'https://purl.imsglobal.org/spec/lti/claim/roles': string[]
  'https://purl.imsglobal.org/spec/lti/claim/context': {
    id: string
    label: string
    title: string
  }
  'https://purl.imsglobal.org/spec/lti/claim/deployment_id': string
  'https://purl.imsglobal.org/spec/lti/claim/message_type': string
}

export function validateLtiToken(token: string): LtiClaims | null {
  const config = useRuntimeConfig()
  
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as LtiClaims
    return decoded
  } catch (error) {
    console.error('LTI token validation failed:', error)
    return null
  }
}

export async function getLtiSession(event: H3Event) {
  const sessionToken = getCookie(event, 'lti_session')
  
  if (!sessionToken) {
    return null
  }

  try {
    const session = await prisma.ltiSession.findUnique({
      where: { sessionToken },
    })

    if (!session || session.expiresAt < new Date()) {
      return null
    }

    return session
  } catch (error) {
    console.error('Error fetching LTI session:', error)
    return null
  }
}

export async function requireLtiSession(event: H3Event) {
  const session = await getLtiSession(event)
  
  if (!session) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: Valid LTI session required'
    })
  }

  return session
}

export function getRoleFromLtiClaims(roles: string[]): string {
  if (roles.some(role => role.includes('Instructor') || role.includes('TeachingAssistant'))) {
    return 'instructor'
  }
  if (roles.some(role => role.includes('Student') || role.includes('Learner'))) {
    return 'student'
  }
  return 'user'
}
