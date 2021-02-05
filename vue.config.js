const webpack = require('webpack');

module.exports = {
  publicPath: '/',
  lintOnSave: true,
  devServer: {
    proxy: null,
    port: 8081,
    hotOnly:false,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_color.scss";
        `
      }
    }
  },
  configureWebpack: {    
    plugins: [   
      new webpack.ProvidePlugin({        
        $: 'jquery',        
        jQuery: 'jquery',        
        'windows.jQuery': 'jquery'  
      })    
    ]
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = '管理平台'
      return args
    })
  }
}