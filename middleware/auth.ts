export default defineNuxtRouteMiddleware(async (to, from) => {
  // Skip middleware for server-side rendering on initial page load
  if (process.server) return

  try {
    const { data: session } = await $fetch('/api/auth/session')
    
    if (!session?.authenticated) {
      // Redirect unauthenticated users to the marketing site
      return navigateTo('/website')
    }
    
    // Store session data for use in components
    useState('user', () => session.user)
    useState('courseId', () => session.courseId)
    
  } catch (error) {
    console.error('Authentication check failed:', error)
    // On error, redirect to marketing site
    return navigateTo('/website')
  }
})