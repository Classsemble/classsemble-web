// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    baseURL: '/classsemble-web/',
    head: {
      title: 'Classsemble - Modern Education Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Transform your classroom with Classsemble. The all-in-one platform for modern education.' 
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  ssr: false,
  
  nitro: {
    preset: 'static'
  },

  compatibilityDate: '2024-11-13'
})
