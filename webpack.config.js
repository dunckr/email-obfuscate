const path = require('path')
const webpack = require('webpack')

const TARGET = process.env.npm_lifecycle_event
const config = {
  library: 'EmailObfuscate',
  filename: 'emailObfuscate',
  example: 'index',
  bundle: 'bundle'
}
const paths = {
  SRC: path.resolve(__dirname, './src'),
  EXAMPLE: path.resolve(__dirname, './example'),
  BUILD: path.resolve(__dirname, './lib')
}

var webpackBase = {
  output: {
    path: paths.EXAMPLE,
    filename: `${config.bundle}.js`
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: [paths.SRC, paths.EXAMPLE],
      exclude: /node_modules/
    }],
    preLoaders: [{
      test: /\.js?$/,
      loader: 'eslint',
      include: paths.SRC,
      exclude: /node_modules/
    }]
  }
}

if (TARGET === 'start' || !TARGET) {
  module.exports = Object.assign(webpackBase, {
    entry: [
      'webpack/hot/dev-server',
      `${paths.EXAMPLE}/${config.example}.js`
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: paths.EXAMPLE,
      inline: true,
      progress: true,
      port: '8080'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  })
}

if (TARGET === 'build-example') {
  module.exports = Object.assign(webpackBase, {
    entry: `${paths.EXAMPLE}/${config.example}.js`,
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}

if (TARGET === 'build-lib') {
  module.exports = Object.assign(webpackBase, {
    entry: `${paths.SRC}/${config.filename}.js`,
    output: {
      path: paths.BUILD,
      libraryTarget: 'umd',
      library: config.library,
      filename: config.filename + '.js'
    },
    module: {
      loaders: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [paths.SRC],
        exclude: /node_modules/
      }],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}
