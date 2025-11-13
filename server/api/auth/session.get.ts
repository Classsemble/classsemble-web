export default defineEventHandler(async (event) => {
  const sessionToken = getCookie(event, 'lti_session')

  if (!sessionToken) {
    return { authenticated: false }
  }

  try {
    const session = await prisma.ltiSession.findUnique({
      where: { sessionToken },
      include: {
        user: true,
      },
    })

    if (!session || session.expiresAt < new Date()) {
      return { authenticated: false }
    }

    const user = await prisma.user.findUnique({
      where: { canvasId: session.canvasId },
    })

    return {
      authenticated: true,
      user: {
        id: user?.id,
        name: user?.name,
        role: user?.role,
        email: user?.email,
      },
      courseId: session.courseId,
    }
  } catch (error) {
    console.error('Session check error:', error)
    return { authenticated: false }
  }
})
