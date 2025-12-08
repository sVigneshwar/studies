// jest.config.js
export default {
  // Use the environment that includes the necessary fetch globals and Node globals
  testEnvironment: 'jest-fixed-jsdom', 

  transform: {
    // Ensures Babel processes your JS/JSX files
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  
  // Setup files for MSW and @testing-library/jest-dom setup
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  
  // You can remove setupFiles: ["<rootDir>/jest.env.js"] and 
  // the 'cross-fetch/polyfill' import entirely, as jest-fixed-jsdom handles this.
};