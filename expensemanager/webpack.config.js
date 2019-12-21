let path = require('path')
let webpack = require('webpack')

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'frontend'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
