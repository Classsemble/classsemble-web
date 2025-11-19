import { c as createError, g as getCookie } from '../nitro/nitro.mjs';
import { p as prisma } from './prisma.mjs';

async function getLtiSession(event) {
  const sessionToken = getCookie(event, "lti_session");
  if (!sessionToken) {
    return null;
  }
  try {
    const session = await prisma.ltiSession.findUnique({
      where: { sessionToken }
    });
    if (!session || session.expiresAt < /* @__PURE__ */ new Date()) {
      return null;
    }
    return session;
  } catch (error) {
    console.error("Error fetching LTI session:", error);
    return null;
  }
}
async function requireLtiSession(event) {
  const session = await getLtiSession(event);
  if (!session) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized: Valid LTI session required"
    });
  }
  return session;
}
function getRoleFromLtiClaims(roles) {
  if (roles.some((role) => role.includes("Instructor") || role.includes("TeachingAssistant"))) {
    return "instructor";
  }
  if (roles.some((role) => role.includes("Student") || role.includes("Learner"))) {
    return "student";
  }
  return "user";
}

export { getRoleFromLtiClaims as g, requireLtiSession as r };
//# sourceMappingURL=lti.mjs.map
