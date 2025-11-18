import { d as defineEventHandler, a as getQuery, c as createError } from '../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const session = await requireLtiSession(event);
  const query = getQuery(event);
  const courseId = query.courseId || session.courseId;
  try {
    const meetings = await prisma.meeting.findMany({
      where: {
        courseId
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
      },
      orderBy: {
        startTime: "asc"
      }
    });
    return { success: true, meetings };
  } catch (error) {
    console.error("Error fetching meetings:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch meetings"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
