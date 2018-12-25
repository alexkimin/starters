const chalk = require('chalk');

const paths = require('./paths');
const CONFIG = require('../config');

module.exports = e => ({
  port: CONFIG.DEV_SERVER_PORT,
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  contentBase: paths.src,
  historyApiFallback: true,
  compress: true,
  stats: 'none',
  quiet: true,
  noInfo: true,
  clientLogLevel: 'none',
  before() {
    console.log(
      '\n',
      chalk.bgCyan.black('\n DEV SERVER '),
      chalk.cyan('Starting the development server...\n'),
      '\n',
      chalk.inverse('\n ENV STATUS '),
      chalk.white(`ENV: ${e.NODE_ENV}, SERVER: ${e.SERVER_ENV}\n`),
      '\n',
    );
  },
});
