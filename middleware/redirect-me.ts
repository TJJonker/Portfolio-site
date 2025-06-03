export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/home' && !to.path.startsWith('/projects/')) {
    return '/home'
  }
})