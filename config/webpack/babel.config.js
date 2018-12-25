const devMode = process.env.NODE_ENV === "development";
const prodMode = process.env.NODE_ENV === "production";
const testMode = process.env.NODE_ENV === "test";

module.exports = (api) => {
  api.cache(false);
  return {
    presets: [
      [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            modules: testMode ? 'commonjs' : false,
          },
        ],
      ],
    ],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        [
          'babel-plugin-styled-components',
          {
            "ssr": false,
            "pure": true,
          }
        ],
        devMode && 'react-hot-loader/babel'
      ].filter(Boolean),
    compact: prodMode,
  };
};

