const pkg = require('./package')
const config = require('./config')
const webpack = require('webpack')
module.exports = {
  // mode: 'spa',
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
  plugins: [
    { src: '@/plugins/element-ui', ssr: true }
    // { src: '@/plugins/axios', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios'
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://www.v2ex.com',
      pathRewrite: {
        '^/api': '/api'
      }
    },
    '/xdnphb': {
      target: 'http://dev.a.newrank.cn',
      pathRewrite: {
        '^/xdnphb': '/xdnphb'
      }
    }
  },
  env: {
    HOST: 'http://dev.a.newrank.cn',
    POST: 9988
  },
  /*
  ** Build configuration
  * 第三方库使用在build中使用vendor，避免打包多次
  */
  build: {
    /**
     * 配置postcss
     */
    postcss: [
      require('precss')(),
      require('postcss-url')(),
      require('postcss-px-to-viewport')({
        viewportWidth: 375,
        viewportHeight: 667,
        unitPercision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,
        mediaQuery: false
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // 配置vender
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
    ],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}
