module.exports = {
  verbose: true,
  testURL: 'http://localhost',
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  testEnvironment: 'node',
  collectCoverageFrom: [
    /**
     * Accept this files
     */
    'src/app/**/*.js',
    'src/app/*.js',
    'src/domain/**/*.js',
    'src/infra/**/*.js',
    'src/infra/**/**/*.js',
    'src/interfaces/*.js',
    'src/interfaces/**/*.js',
    'src/interfaces/**/**/*.js',
    /**
     * Ignore the following files
     */
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/node_modules/**',
    '!src/infra/database',
    '!src/interfaces/console',
    '!src/app/Application.js',
    '!src/infra/logger.js',
    '!src/interfaces/http Server.js',
  ],
  setupFilesAfterEnv: [
    './specs/setup.js',
  ],
  cache: false,
};
