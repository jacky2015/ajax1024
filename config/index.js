// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
module.exports = {
    // set your css loaders
    cssLoaders: ['less'],
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../crmplus/index.html'),
        assetsRoot: path.resolve(__dirname, '../crmplus'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: require('./dev.env'),
        port: 8432,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            /*这里填写后端API接口路由*/
            '/api': {
                target: 'http://101.37.160.14/api',
                changeOrigin: true,
                pathRewrite: {
                    '^.+api/?(.*)$': '/$1'
                }
            },
           /* '/broadcasting': {
                target: 'http://101.37.160.14/broadcasting',
                changeOrigin: true,
                pathRewrite: {
                    '^.+broadcasting/?(.*)$': '/$1'
                }
            }*/
        },
        cssSourceMap: false
    }
}
