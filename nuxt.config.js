module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-reddit-pwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A PWA with Nuxt for Reddit' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  '~/assets/base.css',
  ],

  manifest: {
    name: 'Nuxt Reddit PWA',
    lang: 'fr',
    short_name: 'Reddit PWA',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#fff',
    description: 'Reddit Progressive Web Apps, shaping the future!'
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/pwa',
  ],
}

