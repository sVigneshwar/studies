import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductList from '../components/ProductList'
import { server } from './msw/server'
import { http, HttpResponse } from 'msw'

test('renders list items and handles api error', async ()=>{
  render(<ProductList />)
  
  await waitFor(() => {
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThan(0)
  }, { timeout: 3000 })

  // mock error behavior and ensure ErrorMessage appears
  server.use(
    http.get('https://dummyjson.com/products', () => {
      return HttpResponse.json(null, {status:500})
    })
  )
  
  render(<ProductList />)
  
  await waitFor(() => {
    const err = screen.getByText(/Failed to fetch products/i)
    expect(err).toBeInTheDocument()
  }, { timeout: 3000 })
})
