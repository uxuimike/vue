const axios = require('axios')

module.exports = {
  generate: {
   routes: function () {
     console.log("Chumba");
     return axios.get('https://wordpress-api.belunar.com/wp-json/wp/v2/pages')
     .then((res) => {
       console.log('wumbaeeeeee');
       return res.data.map((page) => {
         return '/users/' + page.id
       })
     })
   }
 },
  /*
  ** Headers of the page
  */
  head: {
    title: 'layerandflow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Layer and Flow Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
  }
}
