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

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  const session = await requireLtiSession(event);
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Meeting ID is required"
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { canvasId: session.canvasId }
    });
    const existing = await prisma.meeting.findUnique({
      where: { id }
    });
    if (!existing) {
      throw createError({
        statusCode: 404,
        message: "Meeting not found"
      });
    }
    if (existing.createdBy !== (user == null ? void 0 : user.id) && session.role !== "instructor") {
      throw createError({
        statusCode: 403,
        message: "Not authorized to delete this meeting"
      });
    }
    await prisma.meeting.delete({
      where: { id }
    });
    return { success: true, message: "Meeting deleted" };
  } catch (error) {
    console.error("Error deleting meeting:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to delete meeting"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
