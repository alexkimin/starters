const webpack = require('webpack');
const path = require('path');
const IP = require('ip');
const chalk = require('chalk');
// plugins
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ShakePlugin = require('webpack-common-shake').Plugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
// internal
const CONFIG = require('../config');
const common = require('./webpack.common');
const paths = require('./paths');

const prodLoaderConfig = e => [...common.loaders(e)];

const prodPluginConfig = (e = {}) =>
  [
    ...common.plugins(e),
    new webpack.HashedModuleIdsPlugin(),
    new DuplicatePackageCheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new CompressionPlugin(),
    new LodashModuleReplacementPlugin(),
    new ShakePlugin({
      warnings: {
        global: false,
      },
    }),
    e.analysis &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        defaultSizes: 'gzip',
        reportFilename: './stats-analyzer.html',
        openAnalyzer: true,
      }),
  ].filter(Boolean);

module.exports = env => ({
  mode: process.env.NODE_ENV,
  bail: true,
  devtool: CONFIG.PROD_SOURCE_MAP ? 'source-map' : false,
  entry: {
    app: ['@babel/polyfill', paths.entry],
  },
  output: {
    path: paths.dist(),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: paths.prodBase,
    pathinfo: false,
    globalObject: 'this',
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
        sourceMap: CONFIG.PROD_SOURCE_MAP,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: require('postcss-safe-parser'),
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
    },
  },
});
