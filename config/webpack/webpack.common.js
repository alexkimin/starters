const webpack = require('webpack');
// plugins
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
// internal
const paths = require('./paths');
const CONFIG = require('../config');

const loaderConfig = (env) => [
  // todo: lint setup required
  // loading js|jsx files
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['thread-loader', 'babel-loader'],
  },
  // loading css files
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [require('autoprefixer')],
        },
      },
    ],
  },
  // loading images
  {
    test: /\.(jpg|png|gif|ico|bmp|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/images/[name].[hash:8].[ext]',
          fallback: 'file-loader',
        },
    },
  },
  // loading fonts
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
      loader: 'file-loader',
      options: { name: 'assets/fonts/[name].[hash:8].[ext]' },
    },
  },
];

const pluginConfig = (env) => {
  const isProd = env.NODE_ENV === 'production';
  return [
    new SimpleProgressPlugin(),
    new ErrorOverlayPlugin(),
    new webpack.ProvidePlugin({
      // add global module if necessary
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: env.NODE_ENV || process.env.NODE_ENV,
      BASE_DEV: CONFIG.BASE_DEV,
      BASE_PROD: CONFIG.BASE_PROD,
    }),
    new CopyWebpackPlugin([
    //   { from: './src/App/assets/javascripts', to: './assets/javascripts' },
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: paths.html,
      minify: {
        caseSensitive: isProd,
        collapseWhitespace: isProd,
        collapseInlineTagWhitespace: isProd,
        keepClosingSlash: isProd,
        removeComments: isProd,
        removeRedundantAttributes: isProd,
        preserveLineBreaks: isProd,
      },
    }),
    new BaseHrefWebpackPlugin({
      baseHref: isProd
        ? CONFIG.BASE_DEV
        : CONFIG.BASE_PROD,
    }),
  ];
};

const resolveConfig = (env) => ({
  extensions: ['.js', '.jsx'],
  symlinks: false,
  alias: {},
});

module.exports = {
  loaders: (env) => loaderConfig(env),
  plugins: (env) => pluginConfig(env),
  resolve: (env) => resolveConfig(env),
};