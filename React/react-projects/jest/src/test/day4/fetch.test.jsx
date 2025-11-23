import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Fetch from '../day4/Fetch'
import React from 'react'

beforeEach(() => {    
    global.fetch = jest.fn()
    fetch.mockClear()
})

describe('Testing fech', () => {
  test("Initial State", () => {
    fetch.mockResolvedValue({
        json: () => Promise.resolve([])
    })
    render(<Fetch />)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  test("Data fetched State", async () => {
    fetch.mockResolvedValue({
        json: () => Promise.resolve([{id:1,name: "vicky"}])
    })
    render(<Fetch />)
    expect(await screen.findByText(/vicky/i)).toBeInTheDocument()
  })

  test("Error State", async () => {
    fetch.mockRejectedValue(new Error("fail"))
    render(<Fetch />)
    expect(await screen.findByText(/error/i)).toBeInTheDocument()
  })
})
