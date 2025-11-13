// POST /api/chat/[courseId] - Send a chat message
export default defineEventHandler(async (event) => {
  const session = await requireLtiSession(event)
  const courseId = event.context.params?.courseId
  const body = await readBody(event)

  if (!courseId) {
    throw createError({
      statusCode: 400,
      message: 'Course ID is required'
    })
  }

  const { content } = body

  if (!content || content.trim() === '') {
    throw createError({
      statusCode: 400,
      message: 'Message content is required'
    })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { canvasId: session.canvasId },
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }

    const message = await prisma.message.create({
      data: {
        courseId,
        userId: user.id,
        content: content.trim(),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
      },
    })

    // TODO: Emit Socket.IO event to notify other users
    // io.to(courseId).emit('new-message', message)

    return { success: true, message }
  } catch (error: any) {
    console.error('Error sending message:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send message'
    })
  }
})
