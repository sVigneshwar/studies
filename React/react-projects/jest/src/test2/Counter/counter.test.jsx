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

    test("check if input value updates in heading", async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const input = screen.getByPlaceholderText("amount")
        const addButton = screen.getByRole("button", {name: "Add Amount"})
        await user.type(input, "10")
        await user.click(addButton)
        const headingValue = screen.getByRole("heading", {level: 1})
        expect(headingValue).toHaveTextContent("10")
    })


    test("check if input value updates in heading", async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole("button", {name: /increment/i})
        const input = screen.getByPlaceholderText("amount")
        const addButton = screen.getByRole("button", {name: "Add Amount"})

        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(input).toHaveFocus()
        await user.tab()
        expect(addButton).toHaveFocus()
    })
})