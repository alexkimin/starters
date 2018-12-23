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
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      return `${e.NODE_ENV}.${e.SERVER_ENV}.${hash}`;
    },
  }),
  new HtmlWebpackPlugin({
    // todo
    template: './src/index.html',
    filename: paths.html,
  }),
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [
        '${chalk.inverse(' App is running: ')}\n' +
        `    [INTERNAL] : http://localhost:${e.DEV_SERVER_PORT}\n    [EXTERNAL] : http://${IP.address()}:${e.DEV_SERVER_PORT}` +
        `    [ENV]: ${e.NODE_ENV}, [SERVER ENV]: ${e.SERVER_ENV}\n`
      ],
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
];


module.exports = (env) => ({
  mode: env.NODE_ENV,
  devtool: 'cheap-module-eval-source-map',
  // todo
  entry: {
    app: ['@babel/polyfill', path.resolve(process.cwd(), 'src/index.tsx')],
  },
  // todo
  output: {
    path: paths.dist,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: devLoaderConfig(env),
  },
  plugins: devPluginConfig(env),
  resolve: {
    ...commons.resolve(env),
  },
  devServer: devServer(envs),
});