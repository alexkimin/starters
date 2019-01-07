const paths = require('../webpack/paths');
// const ignoreComponents = names => names.map(n => `**/${n}/**.tsx`)

module.exports = {
  webpackConfig: require('../webpack/webpack.dev'),
  components: '../../src/components/**/*.tsx',
  title: 'NTUC Income UP',
  styleguideDir: paths.dist,
  // ignore: ignoreComponents([]),
  // styleguideComponents: {
  //   Wrapper: paths.src('utils/styleguide/Wrapper.tsx'),
  // },
};
