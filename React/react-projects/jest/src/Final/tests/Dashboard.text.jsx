import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { MemoryRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { server } from './msw/server'
import { http, HttpResponse } from 'msw'

test('shows loading and product list, retry and logout flows', async ()=>{
  // default handler returns products from msw
  const { unmount } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </Provider>
  )

  expect(screen.getByText('Dashboard')).toBeInTheDocument()
  expect(screen.getByText(/Welcome/)).toBeInTheDocument()

  // product list renders
  await waitFor(() => {
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThan(0)
  }, { timeout: 3000 })

  // simulate error from MSW and retry
  server.use(
    http.get('https://dummyjson.com/products', () => {
      return HttpResponse.json(null, {status:500})
    })
  )

  // unmount & remount to trigger failing fetch
  unmount()
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </Provider>
  )

  const errorMsg = await screen.findByText(/Failed to fetch products/i)
  expect(errorMsg).toBeInTheDocument()

  // now restore success handler and click Retry to re-fetch
  server.use(
    http.get('https://dummyjson.com/products', () => {
      return HttpResponse.json({ products: [
        { id: 10, title: 'Restored Product' }
      ]})
    })
  )

  userEvent.click(screen.getByText('Retry'))
  const itemsAfter = await screen.findAllByRole('listitem')
  expect(itemsAfter.length).toBeGreaterThan(0)

  // logout should navigate back to login and reset store
  userEvent.click(screen.getByText('Logout'))
  const state = store.getState()
  expect(state.auth.isLoggedIn).toBe(false)
})
