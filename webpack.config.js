var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

// extract sourceMap only in production
var sourceMapType = process.env.NODE_ENV === 'production' ?
  'source-map' : 'cheap-module-eval-source-map';

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new ExtractTextPlugin('styles.css')
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = {
  devtool: sourceMapType,
  watchOptions: {
    aggregateTimeout: 100
  },
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [ autoprefixer({ browsers: ['last 5 versions', 'ie >= 10'] }) ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        plugins: ['transform-runtime']
      }
    },
    {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass?sourceMap')
    },
    {
      test: /\.json/,
      loader: 'json'
    },
    {
      test   : /\.(png|jpg|ttf|otf|eot|svg|woff|woff2|ico)$/,
      loader : 'url?limit=4096&name=[name].[ext]'
    }]
  }
};
