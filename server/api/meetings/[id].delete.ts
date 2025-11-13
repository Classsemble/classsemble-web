// DELETE /api/meetings/[id] - Delete meeting
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
        message: 'Not authorized to delete this meeting'
      })
    }

    await prisma.meeting.delete({
      where: { id },
    })

    return { success: true, message: 'Meeting deleted' }
  } catch (error: any) {
    console.error('Error deleting meeting:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete meeting'
    })
  }
})
