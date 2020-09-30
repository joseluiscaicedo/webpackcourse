const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports={
  entry:{
    home: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contact.js'),
  },
  mode: 'production',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js'
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename:'css/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server',
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ],
}
