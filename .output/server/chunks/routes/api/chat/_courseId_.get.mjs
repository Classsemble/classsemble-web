import { d as defineEventHandler, c as createError, a as getQuery } from '../../../nitro/nitro.mjs';
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

const _courseId__get = defineEventHandler(async (event) => {
  var _a;
  await requireLtiSession(event);
  const courseId = (_a = event.context.params) == null ? void 0 : _a.courseId;
  if (!courseId) {
    throw createError({
      statusCode: 400,
      message: "Course ID is required"
    });
  }
  const query = getQuery(event);
  const limit = parseInt(query.limit) || 50;
  const offset = parseInt(query.offset) || 0;
  try {
    const messages = await prisma.message.findMany({
      where: {
        courseId
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            role: true
          }
        }
      },
      orderBy: {
        timestamp: "desc"
      },
      take: limit,
      skip: offset
    });
    return { success: true, messages: messages.reverse() };
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch messages"
    });
  }
});

export { _courseId__get as default };
//# sourceMappingURL=_courseId_.get.mjs.map
