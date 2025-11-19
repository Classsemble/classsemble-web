import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { r as requireLtiSession } from '../../../_/lti.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
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

const _courseId__post = defineEventHandler(async (event) => {
  var _a;
  const session = await requireLtiSession(event);
  const courseId = (_a = event.context.params) == null ? void 0 : _a.courseId;
  const body = await readBody(event);
  if (!courseId) {
    throw createError({
      statusCode: 400,
      message: "Course ID is required"
    });
  }
  const { content } = body;
  if (!content || content.trim() === "") {
    throw createError({
      statusCode: 400,
      message: "Message content is required"
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
    const message = await prisma.message.create({
      data: {
        courseId,
        userId: user.id,
        content: content.trim()
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            role: true
          }
        }
      }
    });
    return { success: true, message };
  } catch (error) {
    console.error("Error sending message:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to send message"
    });
  }
});

export { _courseId__post as default };
//# sourceMappingURL=_courseId_.post.mjs.map
