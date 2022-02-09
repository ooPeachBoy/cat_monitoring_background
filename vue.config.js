const { resolve } = require('path')
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '@': resolve('./src'),
          'Assets': resolve('src/assets')
        }
      }
    }
  }
};
