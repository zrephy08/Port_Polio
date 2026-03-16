export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80, // sticky navbar height
          behavior: 'smooth'
        })
      }
    }
  })
})