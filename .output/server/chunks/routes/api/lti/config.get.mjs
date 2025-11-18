import { d as defineEventHandler, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
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

const config_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  return {
    title: "Classsemble",
    description: "Collaborate, Schedule, and Connect Inside Canvas",
    oidc_initiation_url: `${config.public.apiBase}/lti/oidc`,
    target_link_uri: `${config.public.apiBase}/lti/launch`,
    public_jwk_url: `${config.public.apiBase}/lti/jwks`,
    custom_fields: {
      user_id: "$Canvas.user.id",
      course_id: "$Canvas.course.id",
      user_email: "$Canvas.user.loginId"
    },
    scopes: [
      "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
      "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
      "https://purl.imsglobal.org/spec/lti-ags/scope/score"
    ],
    extensions: [
      {
        platform: "canvas.instructure.com",
        privacy_level: "public",
        settings: {
          platform: "canvas.instructure.com",
          placements: [
            {
              placement: "course_navigation",
              message_type: "LtiResourceLinkRequest",
              target_link_uri: `${config.public.apiBase}/lti/launch`,
              text: "Classsemble",
              icon_url: "https://your-domain.com/icon.png"
            }
          ]
        }
      }
    ]
  };
});

export { config_get as default };
//# sourceMappingURL=config.get.mjs.map
