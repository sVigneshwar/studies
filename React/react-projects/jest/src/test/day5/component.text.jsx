import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'
import Waitmessage from './Waitmessage'
import Task from './Task'
import React from 'react'

jest.useFakeTimers()

test("Search", async () => {

    const user = userEvent.setup()

    render(<Search />)
    const searchInput = screen.getByPlaceholderText(/search/i)

    await user.type(searchInput, "vicky")

    jest.advanceTimersByTime(500)

    expect(await screen.findByText(/vicky/i)).toBeInTheDocument()        
})

test("testing waiting message component", async () => {
    render(<Waitmessage />)

    expect(screen.getByText(/waiting.../i)).toBeInTheDocument()

    jest.advanceTimersByTime(2000)

    expect(await screen.findByText(/ready!/i)).toBeInTheDocument()
})

test("Initial Profile Loading", async () => {
    render(<Task />)
    expect(screen.getByText(/fetching/i)).toBeInTheDocument()
    jest.advanceTimersByTime(2000)
    expect(await screen.findByText(/profile loaded/i)).toBeInTheDocument()
})

test("Debounced Search Typing", async () => {
    const user = userEvent.setup()
    render(<Task />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    await user.type(searchInput, "vicky")
    jest.advanceTimersByTime(400)
    expect(await screen.findByText(/vicky/i)).toBeInTheDocument()
})

test("Clearing the Input", async () => {
    const user = userEvent.setup({delay: null})
    render(<Task />)
    const searchInput = screen.getByPlaceholderText(/search/i)

    await user.type(searchInput, "hello")
    jest.advanceTimersByTime(400)
    expect(await screen.findByText(/hello/i)).toBeInTheDocument()
    
    await user.clear(searchInput)    
    jest.advanceTimersByTime(400)
    expect(screen.queryByText(/Search result for/i)).not.toBeInTheDocument()
})

test("New typing cancels old timer", async ()=> {
    const user = userEvent.setup({delay: null})
    render(<Task />)
    const searchInput = screen.getByPlaceholderText(/search/i)

    await user.type(searchInput, "a")
    jest.advanceTimersByTime(200)
    await user.type(searchInput, "b")    
    expect(screen.getByText(/searching/i)).toBeInTheDocument()
    jest.advanceTimersByTime(400)
    expect(await screen.findByText(/ab/i)).toBeInTheDocument()
})