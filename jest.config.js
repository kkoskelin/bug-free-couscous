module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageProvider: 'babel',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.[j]sx?$': 'babel-jest',
    '^.+\\.[j]s$': 'babel-jest',
  },
  verbose: false,
};
