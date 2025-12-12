import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Dashboard from '../pages/Dashboard'
import { MemoryRouter } from 'react-router-dom'
import api from '../api/api'

jest.mock('../api/api')

describe('Dashboard Page', () => {
  test('renders profile and logout button', async () => {
    // mock profile response
    api.get.mockResolvedValueOnce({ data: { id: 1, username: 'emilys', email: 'emilys@example.com' } })

    // provide access token so Dashboard will call /auth/me
    localStorage.setItem('accessToken', 'valid-token-123')

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Dashboard Page')).toBeInTheDocument()
    expect(screen.getByText('Welcome to the dashboard!')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText(/emilys@example.com/i)).toBeInTheDocument()
    })

    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })

  test('logout button clears auth state', async () => {
    // ensure user is in store
    store.dispatch({ type: 'auth/login', payload: { name: 'emilys', token: 'valid-token-123' } })

    api.get.mockResolvedValueOnce({ data: { id: 1, username: 'emilys', email: 'emilys@example.com' } })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )

    await waitFor(() => {
      expect(screen.getByText(/emilys@example.com/i)).toBeInTheDocument()
    })

    const logoutButton = screen.getByRole('button', { name: /logout/i })
    logoutButton.click()

    // auth state should be cleared
    expect(store.getState().auth.isLoggedIn).toBe(false)
    expect(store.getState().auth.user.name).toBe(null)
  })

  afterEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  test('renders raw profile JSON in pre tag', async () => {
    const profile = { id: 2, username: 'john', email: 'john@example.com' }
    api.get.mockResolvedValueOnce({ data: profile })
    localStorage.setItem('accessToken', 'valid-token-xyz')

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )

    // wait for the profile to be rendered inside the pre element
    await waitFor(() => {
      const pre = document.querySelector('.profile-section pre')
      expect(pre).toBeInTheDocument()
      expect(pre.textContent).toContain('"username": "john"')
      expect(pre.textContent).toContain('"email": "john@example.com"')
    })
  })
})
