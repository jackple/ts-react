var path = require('path')
var config = require('./config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

const typingsForCssModulesLoaderConf = {
  loader: 'typings-for-css-modules-loader',
  options: {
    modules: true,
    namedExport: true,
    camelCase: true,
    sass: true
  }
}

exports.styleLoaders = function (options) {
  return options.extract ?
    [
      {
        test: /\.css$/,
        include: [resolve('src'), resolve('test')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            typingsForCssModulesLoaderConf
          ]
        }),
      },
      {
        test: /\.scss$/,
        exclude: resolve('src/styles'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            typingsForCssModulesLoaderConf
          ]
        })
      },
      {
        test: /\.scss$/,
        include: resolve('src/styles'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        include: resolve('node_modules/antd'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      }
    ]
    :
    [
      {
        test: /\.css$/,
        include: [resolve('src'), resolve('test')],
        use: [
          'style-loader',
          typingsForCssModulesLoaderConf
        ]
      },
      {
        test: /\.scss$/,
        exclude: resolve('src/styles'),
        rules: [
          {
            use: [
              'style-loader',
              typingsForCssModulesLoaderConf
            ]
          }
        ]
      },
      {
        // 位于src/styles里的不使用css module
        test: /\.scss$/,
        include: resolve('src/styles'),
        rules: [
          {
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      {
        // 用于antd按需加载
        test: /\.less$/,
        include: resolve('node_modules/antd'),
        rules: [
          {
            use: [
              'style-loader',
              'css-loader',
              'less-loader'
            ]
          }
        ]
      }
    ]
}
