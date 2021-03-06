import colors from 'vuetify/es5/util/colors'
import en from './locales/en.json'
import ar from './locales/ar.json'
import numberFormats from './locales/numbers.json'
export default {
  // mode:"spa",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nozom_ecom_v3',
    title: 'nozom_ecom_v3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/variables.css',
    '@/assets/scss/utilities.css',
    '@/assets/scss/normalize.css',
    '@/assets/scss/global.css',
    '@/assets/scss/rtl.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    'nuxt-i18n',
  ],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      numberFormats,
      messages: {
        en,
        ar
      }
    }
  },


  

  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  server:{
    host : "192.168.1.40"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          required: true,
          type: 'Bearer'
        },
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login',
            home: '/'
        },
        watchLoggedIn:false,
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {   
          login: { url: `${process.env.API_URL}login`, method: `post` },
          logout: { url: `${process.env.API_URL}user/logout`, method: `post` },
          user: { url: `${process.env.API_URL}user`, method: `get` }
        }
      }
    }
  },
}
