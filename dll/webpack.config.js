const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');

module.exports={
  entry:{
    home: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contact.js'),
  },
  mode: 'production',
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
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
          ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
          ]
      },
      {
        test: /\.styl$/,
        use: [

          "style-loader",
          "css-loader",
          "stylus-loader"
          ]
      },
      {
      test: /\.css$/,
      use: [
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
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      name: "commons"
    }
  }
}
