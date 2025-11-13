// PUT /api/meetings/[id] - Update meeting
export default defineEventHandler(async (event) => {
  const session = await requireLtiSession(event)
  const id = event.context.params?.id
  const body = await readBody(event)

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Meeting ID is required'
    })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { canvasId: session.canvasId },
    })

    const existing = await prisma.meeting.findUnique({
      where: { id },
    })

    if (!existing) {
      throw createError({
        statusCode: 404,
        message: 'Meeting not found'
      })
    }

    // Check if user is the creator or instructor
    if (existing.createdBy !== user?.id && session.role !== 'instructor') {
      throw createError({
        statusCode: 403,
        message: 'Not authorized to update this meeting'
      })
    }

    const meeting = await prisma.meeting.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        startTime: body.startTime ? new Date(body.startTime) : undefined,
        endTime: body.endTime ? new Date(body.endTime) : undefined,
        location: body.location,
        zoomLink: body.zoomLink,
      },
      include: {
        creator: true,
        attendees: true,
      },
    })

    return { success: true, meeting }
  } catch (error: any) {
    console.error('Error updating meeting:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update meeting'
    })
  }
})
