// GET /api/meetings - List meetings for a course
export default defineEventHandler(async (event) => {
  const session = await requireLtiSession(event)
  const query = getQuery(event)
  const courseId = query.courseId as string || session.courseId

  try {
    const meetings = await prisma.meeting.findMany({
      where: {
        courseId,
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
      orderBy: {
        startTime: 'asc',
      },
    })

    return { success: true, meetings }
  } catch (error: any) {
    console.error('Error fetching meetings:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch meetings'
    })
  }
})
