// GET /api/chat/[courseId] - Get chat messages for a course
export default defineEventHandler(async (event) => {
  const session = await requireLtiSession(event)
  const courseId = event.context.params?.courseId

  if (!courseId) {
    throw createError({
      statusCode: 400,
      message: 'Course ID is required'
    })
  }

  const query = getQuery(event)
  const limit = parseInt(query.limit as string) || 50
  const offset = parseInt(query.offset as string) || 0

  try {
    const messages = await prisma.message.findMany({
      where: {
        courseId,
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
      orderBy: {
        timestamp: 'desc',
      },
      take: limit,
      skip: offset,
    })

    return { success: true, messages: messages.reverse() }
  } catch (error: any) {
    console.error('Error fetching messages:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch messages'
    })
  }
})
