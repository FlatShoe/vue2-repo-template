const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = (env = 'development') => {
  const styleLoader = (
    env === 'production' ? 
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../'
      }
    } : 
    'vue-style-loader'
  )

  return {
    entry: './src/main.js',
    output: {
      filename: 'js/bundle[name][contenthash].js',
      chunkFilename: 'js/chunk[name][contenthash].js',
      path: resolve('dist')
    },
    module: {
      noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
      rules: [
        {
          test: /\.css$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'sass-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
          type: 'asset',
          generator: {
            filename: 'image/[name].[hash:8][ext]'
          },
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024
            }
          }
        },
        {
          test: /\.(svg)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'image/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'media/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name][contenthash:6].css',
        chunkFilename: 'css/[id][contenthash:6].css'
      })
    ]
  }
}
