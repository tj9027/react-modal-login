const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public')
  },
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      loader: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ],
      test: /\.s?css$/,
      exclude: /node_modules/
    }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};