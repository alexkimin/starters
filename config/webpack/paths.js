const path = require('path');

const CONFIG = require('../config');

const _path = (...paths) => path.join(process.cwd(), ...paths);

module.exports = {
  fn: _path,
  root: _path(),
  entry: _path('src', 'index.js'),
  src: _path('src'),
  dist: _path('dist'),
  html: _path('src', 'index.html'),
  cache: _path('.cache'),
  babel: _path('config', 'webpack', 'babel.config.js'),
  lint: (n) => _path('config', 'lint', n),
  node_modules: _path('node_modules'),
  local_modules: _path('local_modules'),
  devBase: CONFIG.BASE_DEV,
  prodBase: CONFIG.BASE_PROD,
};
