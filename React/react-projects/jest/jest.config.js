// jest.config.js
export default {
  // Use standard JSDOM environment (works with Jest 30 + Node fetch)
  testEnvironment: 'jsdom',

  transform: {
    // Ensures Babel processes your JS/JSX files
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  // Allow ESM packages (msw + until-async) to be transformed
  transformIgnorePatterns: ['/node_modules/(?!msw|until-async)/'],
  // Globals set before test env loads (fetch/TextEncoder)
  setupFiles: ["<rootDir>/jest.globals.js"],
  
  // Setup files for MSW and @testing-library/jest-dom setup
  setupFilesAfterEnv: ["<rootDir>/src/Final/tests/setupTests.js"],
  moduleNameMapper: {
    '^.+\\.css$': '<rootDir>/__mocks__/styleMock.js'
  }
};