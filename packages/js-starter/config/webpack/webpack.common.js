const webpack = require('webpack');
// plugins
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ShakePlugin = require('webpack-common-shake').Plugin;
// internal
const paths = require('./paths');
const CONFIG = require('../config');

/**
 * loaders
 */
const loaderConfig = env => {
  const prodMode = process.env.NODE_ENV === 'production';
  return [
    // linting
    {
      test: /\.(js|jsx)$/,
      include: paths.src(),
      enforce: 'pre',
      loader: 'eslint-loader',
      options: {
        failOnError: prodMode,
      },
    },
    // loading script files
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        'thread-loader',
        {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  modules: false,
                  targets: '> 0.25%, not dead',
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                  pure: true,
                },
              ],
              !prodMode && 'react-hot-loader/babel',
            ].filter(Boolean),
            compact: prodMode,
          },
        },
        'stylelint-custom-processor-loader',
      ],
    },
    // loading css files
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        prodMode ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
            ],
          },
        },
      ],
      sideEffects: true,
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
};

/**
 * plugins
 */
const pluginConfig = env => {
  const prodMode = process.env.NODE_ENV === 'production';
  return [
    new SimpleProgressPlugin(),
    new ErrorOverlayPlugin(),
    new webpack.ProvidePlugin({
      // add global module if necessary
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      BASE_DEV: CONFIG.BASE_DEV,
      BASE_PROD: CONFIG.BASE_PROD,
    }),
    new CopyWebpackPlugin([
      //   { from: './src/App/assets/javascripts', to: './assets/javascripts' },
    ]),
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: paths.html,
        },
        prodMode
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined,
      ),
    ),
    new MiniCssExtractPlugin({
      filename: prodMode ? '[name].[contenthash].css' : '[name].css',
      chunkFilename: prodMode ? '[id].[contenthash].css' : '[id].css',
    }),
    !prodMode && new WatchMissingNodeModulesPlugin(paths.node_modules),
    new CaseSensitivePathsPlugin(),
    new ShakePlugin({
      warnings: {
        global: false,
      },
    }),
  ].filter(Boolean);
};

/**
 * resolve
 */
const resolveConfig = env => ({
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  symlinks: false,
  alias: {},
});

module.exports = {
  moduleOptions: {},
  loaders: env => loaderConfig(env),
  plugins: env => pluginConfig(env),
  resolve: env => resolveConfig(env),
};
