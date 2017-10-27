var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"',
    PUSHER_APP_KEY:'"6cfe2e04fb96afa9ab7a"',
})
