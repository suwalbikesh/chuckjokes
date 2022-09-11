const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/, //for appling teh rule for all js and jsx files
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.txt$/, use: 'raw-loader' },
      //to convert css files to js
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader'],
      },
      //to convert image files
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'public/images/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'public/images/[name]-[hash].[ext]',
        },
      },
    ],
  },

  //server
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, '/public/'),
    port: 3020,
    hot: true,
    devMiddleware: {
      publicPath: '/dist/',
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, './public/index.html'), filename: 'index.html' })],
}
