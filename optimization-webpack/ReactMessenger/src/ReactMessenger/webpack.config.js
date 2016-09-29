var path = require('path');

module.exports = {
  context: path.join(__dirname, 'Content'),
  entry: '../wwwroot/js/app/index.jsx',
  output: {
    path: path.join(__dirname, 'wwwroot/js'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};