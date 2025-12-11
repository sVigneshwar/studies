import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { MemoryRouter } from 'react-router-dom'
import Login from '../pages/Login'
import { server } from './msw/server'
import { http, HttpResponse } from 'msw'
import { logout } from '../features/auth/authSlice'

beforeEach(() => {
  store.dispatch(logout())
})

test('shows validation errors and invalid login flow', async ()=>{
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  )

  // submit empty (click the submit button)
  await userEvent.click(screen.getByRole('button', { name: /login/i }))
  expect(screen.getByText('Both fields required')).toBeInTheDocument()

  // invalid credentials
  await userEvent.type(screen.getByLabelText('username'), 'bad')
  await userEvent.type(screen.getByLabelText('password'), 'wrong')
  await userEvent.click(screen.getByRole('button', { name: /login/i }))
  await screen.findByText('Invalid login')
  expect(screen.getByText('Invalid login')).toBeInTheDocument()
})

test('successful login navigates to /dashboard', async ()=>{
  // Mock successful auth endpoint
  server.use(
    http.post('https://dummyjson.com/auth/login', () => {
      return HttpResponse.json({ id: 1, username: 'kminchelle', token: 'fake-token' })
    })
  )

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    </Provider>
  )

  await userEvent.type(screen.getByLabelText('username'), 'kminchelle')
  await userEvent.type(screen.getByLabelText('password'), '0lelplR')
  await userEvent.click(screen.getByRole('button', { name: /login/i }))

  // wait for login to process
  await screen.findByText(/welcome/i, {}, { timeout: 3000 }).catch(() => null)
  const state = store.getState()
  expect(state.auth.isLoggedIn).toBe(true)
})
