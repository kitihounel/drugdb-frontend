/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: '/app',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Authorized drugs in Benin"
        return args
      })
  }
}
