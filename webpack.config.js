const path = require('path');

const srcPath = path.join(__dirname, 'client/src');

const buildPath = path.join(__dirname, 'client/dist');

module.exports = {
  context: srcPath,
  entry: srcPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
