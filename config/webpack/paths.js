const path = require('path');

const CONFIG = require('../config');

const _path = (...paths) => path.join(process.cwd(), ...paths);

module.exports = {
  in: _path,
  root: _path(),
  entry: _path('src', 'index.js'),
  src: (...s) => _path('src', ...s),
  dist: _path('dist'),
  html: _path('src', 'index.html'),
  cache: _path('.cache'),
  node_modules: _path('node_modules'),
  local_modules: _path('local_modules'),
  devBase: CONFIG.BASE_DEV,
  prodBase: CONFIG.BASE_PROD,
};
