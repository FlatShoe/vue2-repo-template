const base = require('./webpack.base')
const {merge} = require('webpack-merge')
const EsLintWebpackPlugin = require('eslint-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const {devServer, getLocalHosts} = require('../configs/server')

module.exports = merge(base, {
  mode: 'development',
  entry: './src/main.js',
  stats: 'errors-only',
  devServer,
  plugins: [
    new EsLintWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `  Local:   http://localhost:${devServer.port}`,
          `Network:   http://${devServer.host}:${devServer.port}`,
          `Network:   http://${getLocalHosts()}:${devServer.port}`
        ],
        notes: ['Start your writing journey']
      }
    })
  ]
})