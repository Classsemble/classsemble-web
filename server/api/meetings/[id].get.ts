// GET /api/meetings/[id] - Get meeting details
export default defineEventHandler(async (event) => {
  const session = await requireLtiSession(event)
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Meeting ID is required'
    })
  }

  try {
    const meeting = await prisma.meeting.findUnique({
      where: { id },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        attendees: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    if (!meeting) {
      throw createError({
        statusCode: 404,
        message: 'Meeting not found'
      })
    }

    return { success: true, meeting }
  } catch (error: any) {
    console.error('Error fetching meeting:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch meeting'
    })
  }
})
