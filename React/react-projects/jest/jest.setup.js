// jest.setup.js (Used in setupFilesAfterEnv)

// Global test setup
import '@testing-library/jest-dom'

import { server } from './src/test2/mocks/server'

// Start MSW before all tests and clean up between tests
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())