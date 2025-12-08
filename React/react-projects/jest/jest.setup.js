// jest.setup.js (Used in setupFilesAfterEnv)

// Import jest-dom matchers (e.g., .toBeInTheDocument())
import '@testing-library/jest-dom';

// Import your server instance
import { server } from './src/test2/mocks/server';

// Start the server before all tests run
beforeAll(() => server.listen());

// Reset any request handlers that are declared during the tests
// so they don't interfere with other tests
afterEach(() => server.resetHandlers());

// Stop the server once all tests are done
afterAll(() => server.close());

// Note: You do NOT need the cross-fetch import here anymore 
// because 'jest-fixed-jsdom' provides those globals automatically.