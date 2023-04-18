// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true,
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'https://jsonplaceholder.typicode.com'
    }
  },
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
      app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },
})
