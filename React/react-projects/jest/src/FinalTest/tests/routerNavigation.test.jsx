import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import api from '../api/api'

jest.mock('../api/api')

describe('Router Navigation', () => {
  test('navigates to dashboard route', async () => {
    localStorage.setItem('accessToken', 'valid-token-123')
    api.get.mockResolvedValueOnce({ data: { id: 1, username: 'emilys', email: 'emilys@example.com' } })

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Dashboard Page')).toBeInTheDocument()
  })

  test('renders login route as default', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Login Page')).toBeInTheDocument()
  })

  afterEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })
})
