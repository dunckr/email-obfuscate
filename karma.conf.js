'use strict';

var path = require('path');
var webpack = require('webpack');

var paths = {
  SRC: path.resolve(__dirname, 'src'),
  TEST: path.resolve(__dirname, 'test')
};

module.exports = function(config) {
  config.set({

    frameworks: ['mocha'],

    preprocessors: {
      'test/**/*': ['webpack'],
    },

    reporters: ['dots'],

    files: [
      'test/**/*'
    ],

    colors: true,

    logLevel: config.LOG_ERROR,

    autoWatch: true,

    webpack: {
      module: {
        loaders: [{
          test: /\.js?$/,
          loader: 'babel?stage=0&loose',
          include: [paths.SRC, paths.TEST],
          exclude: /node_modules/
        }],
        preLoaders: [{
          test: /\.js?$/,
          loader: 'eslint',
          include: paths.SRC,
          exclude: /node_modules/
        }]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        })
      ]
    },

    browsers: ['PhantomJS'],

    webpackMiddleware: {
      noInfo: true
    },

    singleRun: false

  });
};
