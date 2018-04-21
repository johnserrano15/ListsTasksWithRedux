const path = require('path');
// const webpack = require('webpack');
/* css-loaders, style-loader y  extract-text-webpack-plugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* 
  Config Advanced dev
  Nota: siempre hay que copilar webpack la primera vez y luego si correr webpack-dev-server
*/
module.exports = {
  entry: {
    home: ['babel-polyfill', path.resolve(__dirname, 'src/entries/home.js')],
    post: ['babel-polyfill', path.resolve(__dirname, 'src/entries/post.js')],
    list: ['babel-polyfill', path.resolve(__dirname, 'src/entries/list.js')]
    // redux: path.resolve(__dirname, 'src/entries/redux.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    host: 'test.co',
    port: 9000
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [new ExtractTextPlugin('css/[name].css')]
};
