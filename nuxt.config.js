const pkg = require('./package')
const config = require('./config')
const webpack = require('webpack')
module.exports = {
  mode: 'spa',
  /*
**  vue-router路由配置
*/
  router: {
    middleware: 'router-demo'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/nuxt-ssr.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/base.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/element-ui'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      console.log(ctx)
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.HOST': JSON.stringify(config.host),
        'process.env.PORT': config.port
      })
    ]
  }
}
