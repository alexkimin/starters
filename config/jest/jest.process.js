module.exports = require('babel-jest')
  .createTransformer({
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
        },
      ],
    ]
  });
