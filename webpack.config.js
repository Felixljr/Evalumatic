const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',

  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};