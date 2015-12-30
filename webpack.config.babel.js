import path from 'path';
import webpack from 'webpack';
import assign from 'object-assign';

const TARGET = process.env.npm_lifecycle_event;
const config = {
  library: 'EmailObfuscate',
  filename: 'emailObfuscate'
};
const paths = {
  SRC: path.resolve(__dirname, './src'),
  EXAMPLE: path.resolve(__dirname, './example'),
  BUILD: path.resolve(__dirname, './lib')
};

var webpackBase = {
  output: {
    path: paths.EXAMPLE,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel?stage=0&loose',
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
};

if (TARGET === 'start' || !TARGET) {
  module.exports = assign(webpackBase, {
    entry: [
      'webpack/hot/dev-server',
      paths.EXAMPLE + '/index.js'
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
  });
}

if (TARGET === 'build-example') {
  module.exports = assign(webpackBase, {
    entry: paths.EXAMPLE + '/index.js',
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
  });
}

if (TARGET === 'build-lib') {
  module.exports = assign(webpackBase, {
    entry: paths.SRC + '/emailObfuscate.js',
    output: {
      path: paths.BUILD,
      libraryTarget: 'umd',
      library: config.library,
      filename: config.filename + '.js'
    },
    module: {
      loaders: [{
        test: /\.js?$/,
        loader: 'babel?stage=0&loose',
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
  });
}
