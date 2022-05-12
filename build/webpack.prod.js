const base = require('./webpack.base')
const {merge} = require('webpack-merge')
const {ProgressPlugin} = require('webpack')

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new ProgressPlugin()
  ]
})