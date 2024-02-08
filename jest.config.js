module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>/app'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>/**/*.module.ts',
    '!<rootDir>/**/*.provider.ts',
    '!<rootDir>/**/*.dto.ts',
    '!<rootDir>/**/*.entity.ts',
    '!<rootDir>/**/*.config.ts',
    '!<rootDir>/**/main.ts',
    '!<rootDir>/**/*.spec.ts',
  ],
  coveragePathIgnorePatterns: ['/docs/'],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'node'
};
  