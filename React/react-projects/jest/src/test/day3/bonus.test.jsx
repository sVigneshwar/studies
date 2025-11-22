import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Bonus from './Bonus'
import React from 'react'

test("Input typing", async () => {
    const user = userEvent.setup();
    render(<Bonus />)
    const input = screen.getByPlaceholderText(/enter/i)
    await user.type(input, "vicky")
    expect(input.value).toBe("vicky")
})

test("Clearing input", async () => {
    const user = userEvent.setup();
    render(<Bonus />)
    const input = screen.getByPlaceholderText(/enter/i)
    const clearBtn = screen.getByRole('button', {name: /clear/i})
    await user.type(input, "vicky")
    await user.click(clearBtn)
    expect(input.value).toBe("")
})

test("Text updates with typed input", async () => {
    const user = userEvent.setup();
    render(<Bonus />)
    const input = screen.getByPlaceholderText(/enter/i)
    await user.type(input, "vicky")
    expect(screen.getByText(/you typed: vicky/i)).toBeInTheDocument()
})

test("finds the dashboard heading", async () => {
    render(<Bonus />)
    expect(screen.getByRole('heading', {level: 1}).textContent).toBe("Dashboard")
})

test("moves focus", async () => {
    const user = userEvent.setup();
    render(<Bonus />)
    const input = screen.getByPlaceholderText(/enter/i)
    const btn = screen.getByRole('button', {name: /clear/i})
    input.focus();
    expect(input).toHaveFocus();
    await user.tab()
    expect(btn).toHaveFocus();
})