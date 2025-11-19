import { d as defineEventHandler, g as getCookie } from '../../../nitro/nitro.mjs';
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

const session_get = defineEventHandler(async (event) => {
  const sessionToken = getCookie(event, "lti_session");
  if (!sessionToken) {
    return { authenticated: false };
  }
  try {
    const session = await prisma.ltiSession.findUnique({
      where: { sessionToken },
      include: {
        user: true
      }
    });
    if (!session || session.expiresAt < /* @__PURE__ */ new Date()) {
      return { authenticated: false };
    }
    const user = await prisma.user.findUnique({
      where: { canvasId: session.canvasId }
    });
    return {
      authenticated: true,
      user: {
        id: user == null ? void 0 : user.id,
        name: user == null ? void 0 : user.name,
        role: user == null ? void 0 : user.role,
        email: user == null ? void 0 : user.email
      },
      courseId: session.courseId
    };
  } catch (error) {
    console.error("Session check error:", error);
    return { authenticated: false };
  }
});

export { session_get as default };
//# sourceMappingURL=session.get.mjs.map
