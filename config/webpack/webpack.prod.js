const webpack = require('webpack');
const path = require('path');
const IP = require('ip');
const chalk = require('chalk');
// internal
const paths = require('./paths');
const common = require('./webpack.config.common');
const devServer = require('./devServer');
const CONFIG = require('../config');
// plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodLoaderConfig = (e) => [
  ...common.loaders(e),
];

const prodPluginConfig = (e) => [
  ...common.plugins(e),
  new CleanWebpackPlugin('dist', {
    root: process.cwd(),
  }),
  new HtmlWebpackPlugin({
    // todo
    template: './src/index.html',
    filename: paths.html,
    minify: {
      caseSensitive: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      keepClosingSlash: true,
      removeComments: true,
      removeRedundantAttributes: true,
      preserveLineBreaks: true,
    },
  }),
  new webpack.HashedModuleIdsPlugin(),
  new DuplicatePackageCheckerPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new CompressionPlugin(),
  e.analysis &&
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: './stats-analyzer.html',
    openAnalyzer: true,
  }),
].filter(Boolean);


module.exports = (env) => ({
  mode: env.NODE_ENV,
  devtool: false,
  // todo
  entry: {
    app: ['@babel/polyfill', paths.entry],
  },
  // todo
  output: {
    path: paths.dist,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: prodLoaderConfig(env),
  },
  plugins: prodPluginConfig(env),
  resolve: {
    ...commons.resolve(env),
  },
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
    excludeAssets: [/assets/],
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        exclude: [/\.min\.js$/gi],
        parallel: true,
        uglifyOptions: {
          ecma: 5,
          compress: {
            warnings: false,
            drop_console: true,
          },
          output: {
            comments: true,
          }
          safari10: true,
          ie8: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    // todo:
    splitChunks: {
      chunks: 'all',
      name: 'client',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
});