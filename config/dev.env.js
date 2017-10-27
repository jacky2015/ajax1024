var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    PUSHER_APP_KEY:'"6cfe2e04fb96afa9ab7a"',
})
