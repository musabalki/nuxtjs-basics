// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias:{
    assets:"/<rootDir></assets",
  },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
