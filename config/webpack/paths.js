const path = require('path');

const _path = (...paths) => path.join(process.cwd(), ...paths);

module.exports = {
  fn: _path,
  root: _path(),
  entry: _path('src', 'index.js'),
  src: _path('src'),
  dist: _path('dist'),
  html: _path('dist', 'index.html'),
  cache: _path('.cache'),
  node_modules: _path('node_modules'),
  local_modules: _path('local_modules'),
};
