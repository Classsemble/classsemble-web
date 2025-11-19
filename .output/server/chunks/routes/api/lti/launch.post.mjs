import { d as defineEventHandler, r as readBody, c as createError, s as setCookie, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { g as getRoleFromLtiClaims } from '../../../_/lti.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'stream';
import 'events';
import 'http';
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

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const native = {
  randomUUID: crypto.randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && true && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  return unsafeStringify(rnds);
}

const launch_post = defineEventHandler(async (event) => {
  useRuntimeConfig();
  const body = await readBody(event);
  const idToken = body.id_token;
  if (!idToken) {
    throw createError({
      statusCode: 400,
      message: "Missing id_token parameter"
    });
  }
  try {
    const decoded = jwt.decode(idToken);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const canvasId = decoded.sub;
    const name = decoded.name || "Unknown User";
    const email = decoded.email;
    const roles = decoded["https://purl.imsglobal.org/spec/lti/claim/roles"] || [];
    const context = decoded["https://purl.imsglobal.org/spec/lti/claim/context"];
    const deploymentId = decoded["https://purl.imsglobal.org/spec/lti/claim/deployment_id"];
    const messageType = decoded["https://purl.imsglobal.org/spec/lti/claim/message_type"];
    const role = getRoleFromLtiClaims(roles);
    const user = await prisma.user.upsert({
      where: { canvasId },
      update: {
        name,
        email,
        role
      },
      create: {
        canvasId,
        name,
        email,
        role
      }
    });
    if (context) {
      await prisma.course.upsert({
        where: { canvasId: context.id },
        update: {
          name: context.title,
          code: context.label
        },
        create: {
          canvasId: context.id,
          name: context.title,
          code: context.label
        }
      });
    }
    const sessionToken = v4();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1e3);
    await prisma.ltiSession.create({
      data: {
        userId: user.id,
        canvasId: user.canvasId,
        courseId: (context == null ? void 0 : context.id) || "",
        role: user.role,
        sessionToken,
        ltiMessageType: messageType,
        deploymentId,
        expiresAt
      }
    });
    setCookie(event, "lti_session", sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60,
      // 24 hours
      path: "/"
    });
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        role: user.role
      },
      courseId: context == null ? void 0 : context.id,
      redirectUrl: "/dashboard"
    };
  } catch (error) {
    console.error("LTI launch error:", error);
    throw createError({
      statusCode: 500,
      message: "LTI launch failed: " + error.message
    });
  }
});

export { launch_post as default };
//# sourceMappingURL=launch.post.mjs.map
