module.exports = {
  // 选项...
  configureWebpack: {
    output: {
      library: 'vue-cli-app',
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonp_vue-cli-app',
    }
  },
  devServer: {
    port: 10013,
    host: '127.0.0.1',
    // allowedHosts: 'all',
    // 在微前端中需要设置允许跨域
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // 如果不行，把 disableHostCheck也打开
    // disableHostCheck: true
  }
}
