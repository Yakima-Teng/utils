const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: __dirname + '/test/test.js'
  },
  output: {
    path: __dirname + '/test',
    filename: '[name].bundle.js'
  },
  externals: {
    'jquery': 'window.$'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
