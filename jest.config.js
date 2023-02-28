module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@global/(.*)$': '<rootDir>/src/global/$1',
    '^@constants/(.*)$': '<rootDir>/src/global/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/global/hooks/$1',
    '^@assets/(.*)$': '<rootDir>/src/global/assets/$1',
    '^@services/(.*)$': '<rootDir>/src/global/services/$1',
    '^@configs/(.*)$': '<rootDir>/src/global/configs/$1',
    '^@slices/(.*)$': '<rootDir>/src/global/store/slices/$1',
    '^@styles/(.*)$': '<rootDir>/src/global/styles/$1',
    '^@components/(.*)$': '<rootDir>/src/global/components/$1',
    '\\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
}
