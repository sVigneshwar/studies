import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../routes/AppRouter'
import { login } from '../features/auth/authSlice'

test('redirects to login when not authenticated', ()=>{
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <AppRouter />
      </MemoryRouter>
    </Provider>
  )
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
})

test('allows dashboard navigation after login', ()=>{
  // Pre-login the user
  store.dispatch(login({name:'user'}))
  
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <AppRouter />
      </MemoryRouter>
    </Provider>
  )

  expect(screen.getByText('Dashboard')).toBeInTheDocument()
})
