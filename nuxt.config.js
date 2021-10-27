require('dotenv').config()
const strapiBaseUri = process.env.API_URL || 'http://localhost:1337'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    strapiBaseUri,
  },
  head: {
    script: [
      {
        src: "https://apis.google.com/js/api.js",
      },
    ],
    title: 'dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/zra0xxq.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vuefilter.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
  ],

  moment: {
    locales: ['fr'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
  ],

  strapi: {
    url: strapiBaseUri,
    entities: ['clients'],
    // Options
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { baseURL: process.env.API_AUTH_URL },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
    },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'jwt',
          },
          // user: {
          //   url: 'users/me',
          //   method: 'get',
          //   propertyName: false,
          // },
          logout: false,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
