import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import Counter2 from './Counter2'
import React from 'react'

describe("Mock testing", () => {
    test("Check if counter is rendered", () => {
        render(<Counter2 prop={{count: 1}} />)
        expect(screen.getByRole("heading", {level: 1})).toHaveTextContent(1)
    })

    test("Check if mock is working", async () => {
        const user = userEvent.setup()
        const incrementHandler = jest.fn(() => 2)
        const decrementHandler = jest.fn(() => 0)
        render(<Counter2 prop={{count: 1, increment: incrementHandler, decrement: decrementHandler}} />)
        
        const incrementButton = screen.getByRole("button", {name: 'Increment'})
        const decrementButton = screen.getByRole("button", {name: 'Decrement'})

        await user.click(incrementButton)
        await user.click(decrementButton)

        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
})