// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/google-fonts",
    'nuxt-mdi',
    "vue3-carousel-nuxt",
    '@vueuse/nuxt',
    '@nuxt/test-utils/module'
  ],
  css: ['~/assets/scss/main.scss'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  googleFonts: {
    families: {
      Jost: [100, 400],
    }
  },
  runtimeConfig: {
     public: {
      apiBase: process.env.APP_API,
      baseUrl: process.env.APP_BASEURL,
      CATS_COUNT: 10,
    }
  },
})