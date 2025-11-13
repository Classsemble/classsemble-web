// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Classsemble - Collaborate, Schedule, and Connect Inside Canvas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Classsemble integrates with Canvas LMS to provide student collaboration, meeting scheduling, and real-time chat.' 
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    // Private keys - only available server-side
    databaseUrl: process.env.DATABASE_URL,
    ltiKeysetUrl: process.env.LTI_KEYSET_URL,
    ltiClientId: process.env.LTI_CLIENT_ID,
    ltiDeploymentId: process.env.LTI_DEPLOYMENT_ID,
    ltiPrivateKey: process.env.LTI_PRIVATE_KEY,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    zoomApiKey: process.env.ZOOM_API_KEY,
    zoomApiSecret: process.env.ZOOM_API_SECRET,
    jwtSecret: process.env.JWT_SECRET,
    socketPort: process.env.SOCKET_PORT || '3001',
    
    // Public keys - exposed to client
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  },

  nitro: {
    preset: 'node-server',
    experimental: {
      websocket: true
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  compatibilityDate: '2024-11-13'
})
