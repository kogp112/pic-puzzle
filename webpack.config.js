const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  context: resolve(__dirname, 'src'),
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './index.tsx'
  ],
  resolve: {
      extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    port: '8081',
    hot: true,
    noInfo: false,
    quiet: false,
    contentBase: resolve(__dirname, 'src'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: "ts-loader"
                  }
              ]
          },
          {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
          }
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({template: resolve(__dirname, 'public/index.html')}),
  ],
};