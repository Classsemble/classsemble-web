import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import { r as requireLtiSession } from '../../_/lti.mjs';
import { p as prisma } from '../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'stream';
import 'events';
import 'http';
import 'crypto';
import 'buffer';
import 'zlib';
import 'https';
import 'net';
import 'tls';
import 'url';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@prisma/client';

const index_post = defineEventHandler(async (event) => {
  const session = await requireLtiSession(event);
  const body = await readBody(event);
  const { title, description, startTime, endTime, location, courseId, attendeeIds } = body;
  if (!title || !startTime || !endTime) {
    throw createError({
      statusCode: 400,
      message: "Missing required fields: title, startTime, endTime"
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { canvasId: session.canvasId }
    });
    if (!user) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
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
        attendees: attendeeIds ? {
          connect: attendeeIds.map((id) => ({ id }))
        } : void 0
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        attendees: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });
    return { success: true, meeting };
  } catch (error) {
    console.error("Error creating meeting:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to create meeting"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
