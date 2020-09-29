const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');

module.exports={
  entry:{
    home: path.resolve(__dirname,'src/js/index.js')
  },
  mode: 'development',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot: true,
    open:true,
    port:9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
            loader: 'url-loader',
            options: {
              limits: 90000,
            }
        }
      },
      {
      test: /\.css$/,
      use: [
        // {
        //   loader: MiniCssExtractPlugin.loader
        // },
        'style-loader',
        'css-loader'
      ]
      }
    ]
  },
  resolve:{
    extensions: [".js",".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server',
      template: path.resolve(__dirname, 'index.html')
    }),
  ]
}
