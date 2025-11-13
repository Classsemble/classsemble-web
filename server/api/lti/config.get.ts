export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // LTI 1.3 configuration endpoint
  // Canvas will call this to get platform configuration
  return {
    title: 'Classsemble',
    description: 'Collaborate, Schedule, and Connect Inside Canvas',
    oidc_initiation_url: `${config.public.apiBase}/lti/oidc`,
    target_link_uri: `${config.public.apiBase}/lti/launch`,
    public_jwk_url: `${config.public.apiBase}/lti/jwks`,
    custom_fields: {
      user_id: '$Canvas.user.id',
      course_id: '$Canvas.course.id',
      user_email: '$Canvas.user.loginId',
    },
    scopes: [
      'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem',
      'https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly',
      'https://purl.imsglobal.org/spec/lti-ags/scope/score',
    ],
    extensions: [
      {
        platform: 'canvas.instructure.com',
        privacy_level: 'public',
        settings: {
          platform: 'canvas.instructure.com',
          placements: [
            {
              placement: 'course_navigation',
              message_type: 'LtiResourceLinkRequest',
              target_link_uri: `${config.public.apiBase}/lti/launch`,
              text: 'Classsemble',
              icon_url: 'https://your-domain.com/icon.png',
            },
          ],
        },
      },
    ],
  }
})
