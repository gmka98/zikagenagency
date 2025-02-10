// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxtjs/google-fonts'],
  icon: {
    serverBundle: {
      collections: ['uil','mdi'],
    }
  },
  googleFonts: {
    families: {
      Triodion: [400, 700],
    },
  },
})