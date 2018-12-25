const jestConfig = {
  rootDir: '../../',
  verbose: true,
  coverageDirectory: '<rootDir>/coverage',
  cacheDirectory: '<rootDir>/.cache',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(js|jsx|ts|tsx)',
    '!<rootDir>/src/**/assets/*.js',
    '!<rootDir>/src/**/*.d.ts',
  ],
  globals: {
    NODE_ENV: 'test',
  },
  testURL: 'http://localhost',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/**/?(*.)(spec|test).(js|jsx|ts|tsx)',
  ],
  setupFiles: [
    '<rootDir>/config/jest/jest.init.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/jest.global.js',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
  ],
  moduleDirectories : ['node_modules', 'src'],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/config/jest/cssMock.js',
  }
}

module.exports = jestConfig;
