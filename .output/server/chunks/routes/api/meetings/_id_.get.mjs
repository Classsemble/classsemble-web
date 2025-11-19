import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
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

const _id__get = defineEventHandler(async (event) => {
  var _a;
  await requireLtiSession(event);
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Meeting ID is required"
    });
  }
  try {
    const meeting = await prisma.meeting.findUnique({
      where: { id },
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
    if (!meeting) {
      throw createError({
        statusCode: 404,
        message: "Meeting not found"
      });
    }
    return { success: true, meeting };
  } catch (error) {
    console.error("Error fetching meeting:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch meeting"
    });
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
