const webpack = require('webpack');
const path = require('path');
const IP = require('ip');
const chalk = require('chalk');
// internal
// plugins
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CONFIG = require('../config');
const devServer = require('./devServer');
const common = require('./webpack.common');
const paths = require('./paths');

const prodLoaderConfig = e => [
  ...common.loaders(e),
];

const prodPluginConfig = e => [
  ...common.plugins(e),
  new webpack.HashedModuleIdsPlugin(),
  new DuplicatePackageCheckerPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new CompressionPlugin(),
  e.analysis
  && new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: './stats-analyzer.html',
    openAnalyzer: true,
  }),
].filter(Boolean);


module.exports = env => ({
  mode: process.env.NODE_ENV,
  bail: true,
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
    publicPath: paths.prodBase,
    pathinfo: false,
  },
  module: {
    ...common.moduleOptions,
    rules: prodLoaderConfig(env),
  },
  plugins: prodPluginConfig(env),
  resolve: {
    ...common.resolve(env),
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
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: false,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: require('postcss-safe-parser'),
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
});
