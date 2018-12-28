const ext = 'js|jsx';

const jestConfig = {
  rootDir: '../',
  verbose: true,
  coverageDirectory: '<rootDir>/coverage',
  cacheDirectory: '<rootDir>/.cache',
  collectCoverageFrom: [
    `<rootDir>/src/**/*.(${ext})`,
    '!<rootDir>/src/**/assets/*.js',
    '!<rootDir>/src/**/*.d.ts',
  ],
  globals: {
    NODE_ENV: 'test',
  },
  testURL: 'http://localhost',
  testMatch: [
    `<rootDir>/src/**/__tests__/**/*.(${ext})`,
    `<rootDir>/src/**/?(*.)(spec|test).(${ext})`,
  ],
  setupFiles: ['<rootDir>/jest/jest.init.js'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/jest.global.js',
  transform: {
    [`^.+\\.(${ext})$`]: '<rootDir>/jest/jest.process.js',
  },
  transformIgnorePatterns: [`[/\\\\]node_modules[/\\\\].+\\.(${ext})$`],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/jest/cssMock.js',
  },
};

module.exports = jestConfig;
