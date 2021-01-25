const webpack = require('webpack');

module.exports = {
  publicPath: './',
  lintOnSave: true,
  devServer: {
    proxy: null,
    port: 4200,
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
  }
}