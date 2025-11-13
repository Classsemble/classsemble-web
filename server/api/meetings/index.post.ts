// POST /api/meetings - Create a new meeting
export default defineEventHandler(async (event) => {
  const session = await requireLtiSession(event)
  const body = await readBody(event)

  const { title, description, startTime, endTime, location, courseId, attendeeIds } = body

  if (!title || !startTime || !endTime) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields: title, startTime, endTime'
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

    const meeting = await prisma.meeting.create({
      data: {
        title,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        location,
        courseId: courseId || session.courseId,
        createdBy: user.id,
        attendees: attendeeIds
          ? {
              connect: attendeeIds.map((id: string) => ({ id })),
            }
          : undefined,
      },
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

    // TODO: Optional - Integrate with Google Calendar or Zoom here
    // if (body.createGoogleEvent) { ... }
    // if (body.createZoomMeeting) { ... }

    return { success: true, meeting }
  } catch (error: any) {
    console.error('Error creating meeting:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create meeting'
    })
  }
})
