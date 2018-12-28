const path = require('path');
const { paths } = require('../../tsconfig.json').compilerOptions;

const resolveTsPathsToAlias = () =>
  Object.keys(paths).reduce((a, pathKey) => {
    a[pathKey.replace('/*', '')] = path.resolve(process.cwd(), paths[pathKey][0].replace('/*', ''));
    return a;
  }, {});

module.exports = resolveTsPathsToAlias;
