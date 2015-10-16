var path = require('path');
var webpack = require('webpack');
var webpackBase = require('./webpack.base');
var assign = require('object-assign');

var paths = {
  SRC: path.resolve(__dirname, '../src'),
  EXAMPLE: path.resolve(__dirname, '.')
};

module.exports = assign(webpackBase, {

  entry: [
    'webpack/hot/dev-server',
    paths.EXAMPLE + '/index.js'
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: paths.EXAMPLE,
    hot: true,
    inline: true,
    port: '8080'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]

});
