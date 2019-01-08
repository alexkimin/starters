const paths = require('../webpack/paths');
const common = require('../webpack/webpack.common');
const ignoreComponents = names => names.map(n => `**/${n}/**.tsx`);

module.exports = {
  title: 'NTUC Income UP',
  webpackConfig: {
    resolve: {
      ...common.resolve(),
    },
    module: {
      rules: common.loaders(),
    },
  },
  serverPort: 4040,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    paths.root('tsconfig.json'),
  ).parse,
  components: '../../src/components/**/[A-Z]*.tsx',
  styleguideDir: paths.dist('styleguide'),
  ignore: ignoreComponents([]),
  styleguideComponents: {
    Wrapper: paths.src('utils/styleguide/ThemeWrapper.tsx'),
  },
};
