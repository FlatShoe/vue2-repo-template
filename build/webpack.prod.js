const base = require('./webpack.base')
const {merge} = require('webpack-merge')
const {ProgressPlugin} = require('webpack')

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new ProgressPlugin()
  ]
})