module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.{js,ts}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    // a list of regex patterns
    'geolocationGateway',
    '/router\\.ts$',
    'fixtures/',
    'types/',
  ],
  coverageProvider: 'babel',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.[j]sx?$': 'babel-jest',
    '^.+\\.[j]s$': 'babel-jest',
  },
  verbose: false,
};
