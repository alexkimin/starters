const { pathsToModuleNameMapper } = require('ts-jest/utils');

const ext = 'ts|tsx';

const jestConfig = {
  rootDir: '../../',
  verbose: true,
  coverageDirectory: '<rootDir>/coverage',
  cacheDirectory: '<rootDir>/.cache',
  collectCoverageFrom: [
    `<rootDir>/src/**/*.(${ext})`,
    '!<rootDir>/src/**/assets/*.ts',
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
  setupFiles: ['<rootDir>/config/jest/jest.init.ts'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/jest.global.ts',
  transform: {
    [`^.+\\.(${ext})$`]: 'ts-jest',
  },
  transformIgnorePatterns: [`[/\\\\]node_modules[/\\\\].+\\.(${ext})$`],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileMock.ts',
    '\\.(css|scss)$': '<rootDir>/config/jest/cssMock.ts',
  },
};

module.exports = jestConfig;
