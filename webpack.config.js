/*
 * React Playground Webpack Config
 * TO DO:
 *  - Dev / Prod env builds
 *  - Combine stylesheets? (may not happen if including within components - maybe core components don't include, only appended..?)
*/

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  cache: true,
  entry: path.resolve(__dirname, 'index'),
  output: {
    path: path.resolve(__dirname, 'build', 'scripts'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  // SASS / CSS Configurations
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./static/scss")],
    outputStyle: 'compressed'//'expanded'//
  },
  postcss: [
    autoprefixer
  ],
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/, 
        loaders: ["style", "css?sourceMap", "postcss", "sass?sourceMap"]
        //loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './static/scss')
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    , $: 'jquery'
    })
  ],
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx', '.json', '.scss', '.png', '.jpg', '.jpeg', '.gif', '.svg'],
    root: path.join(__dirname),
    fallback: path.join(__dirname, 'node_modules'),
    modulesDirectories: ['node_modules'],
  }
};