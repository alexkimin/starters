const webpack = require('webpack');
const path = require('path');
const IP = require('ip');
const chalk = require('chalk');
// internal
const paths = require('./paths');
const common = require('./webpack.common');
const devServer = require('./devServer');
const CONFIG = require('../config');
const PORT = CONFIG.DEV_SERVER_PORT;
// plugins
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const devLoaderConfig = (e) => [
  ...common.loaders(e),
];

const devPluginConfig = (e) => [
  ...common.plugins(e),
  new HardSourceWebpackPlugin({
    cacheDirectory: `${paths.cache}/hard-source/[confighash]`,
    environmentHash: {
      root: paths.root,
      directories: [],
      files: ['package-lock.json', '.babelrc'],
    },
    configHash (webpackConfig) {
      const hash = require('node-object-hash')({ sort: false }).hash(webpackConfig);
      return `${process.env.NODE_ENV}.${e.SERVER_ENV}.${hash}`;
    },
  }),
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [
        `${chalk.inverse(' App is running: ')}\n\n` +
        `    [INTERNAL]: http://localhost:${PORT}\n` +
        `    [EXTERNAL]: http://${IP.address()}:${PORT}\n` +
        `    [NODE_ENV]: ${process.env.NODE_ENV}\n` +
        `    [API_SERVER_PRESET]: ${e.SERVER_ENV}\n`
      ],
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
];


module.exports = (env) => ({
  mode: process.env.NODE_ENV,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['@babel/polyfill', paths.entry],
  },
  output: {
    path: paths.dist,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: paths.devBase,
    pathinfo: true,
  },
  module: {
    ...common.rules,
    rules: devLoaderConfig(env),
  },
  plugins: devPluginConfig(env),
  resolve: {
    ...common.resolve(env),
  },
  devServer: devServer(env),
});