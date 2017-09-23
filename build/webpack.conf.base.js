var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('./config')
var tsImportPlugin = require('ts-import-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const env = process.env.APP_ENV || 'prod'

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?http://localhost:3333/__webpack_hmr',
      './src/index.tsx'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'assets': resolve('src/assets'),
      'md5': 'blueimp-md5'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts(x?)|js(x?))$/,
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/,
        rules: [
          {
            loader: 'react-hot-loader/webpack',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [tsImportPlugin({
                  libraryName: 'antd',
                  style: true,
                  libraryDirectory: 'lib'
                })]
              })
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // postcss: [ values ],
  plugins: [
    // 作用域提升，减少代码量，加快代码运行速度（webpack 3.0）
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
