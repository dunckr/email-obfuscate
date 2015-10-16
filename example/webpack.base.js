var path = require('path');
var webpack = require('webpack');

var paths = {
  SRC: path.resolve(__dirname, '../src'),
  EXAMPLE: path.resolve(__dirname, '.')
};

module.exports = {

  output: {
    path: paths.EXAMPLE,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel?stage=0&loose',
        include: [paths.SRC, paths.EXAMPLE],
        exclude: /node_modules/
      }
    ],
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        include: paths.SRC,
        exclude: /node_modules/
      }
    ]
  }

};
