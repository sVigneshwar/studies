import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'
import React from 'react'

describe("Counter", () => {
    test("component render correctly", () => {
        render(<Counter />)
        const counterElement = screen.getByRole("heading", {level: 1})
        expect(counterElement).toBeInTheDocument()
    })

    test("check initial count is zero", () => {
        render(<Counter />)
        const counterElement = screen.getByRole("heading", {level: 1})
        expect(counterElement).toHaveTextContent("0")
    })

    test("check if increment button is rendered", () => {
        render(<Counter />)
        const incrementButton = screen.getByRole("button", {name: /increment/i})
        expect(incrementButton).toBeInTheDocument()
    })

    test("check if count incremented by 1 on button click", async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole("button", {name: /increment/i})
        await user.click(incrementButton)
        await user.click(incrementButton)
        const counterElement = screen.getByRole("heading", {level: 1})
        expect(counterElement).toHaveTextContent("2")
    })
})