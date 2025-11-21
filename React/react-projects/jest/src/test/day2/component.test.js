import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'
import Input from './Input'
import React from 'react'
import Toggle from './Toggle'

test("initial", () => {
    render(<Counter />)
    const count = screen.getByTestId("count")
    expect(count.textContent).toBe("0")
})

test("click", async () => {
    render(<Counter />)
    const IncrementButton = screen.getByRole("button", {name: /Increase/i})
    await userEvent.click(IncrementButton)
    expect(screen.getByTestId("count").textContent).toBe("1")
})

test("type", async () => {
    render(<Input />)
    const inputField = screen.getByPlaceholderText("name")
    await userEvent.type(inputField, "Vicky")
    expect(inputField.value).toBe("Vicky")
})

test("initial content", () => {
    render(<Toggle />)

    const text = screen.getByTestId("text")
    expect(text.textContent).toBe("testing content")
})

test("hide click", async () => {
    render(<Toggle />)

    const button = screen.getByRole("button", {name: /hide/i})

    await userEvent.click(button)

    expect(screen.queryByText(/testing/i)).not.toBeInTheDocument()
})