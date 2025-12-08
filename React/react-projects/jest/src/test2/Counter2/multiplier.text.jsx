import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import React from 'react'
import Multiplier from './Multiplier'

test("mock multiplier", async () => {
    const user = userEvent.setup()
    
    const mockCalculate = jest.fn(() => 4)

    render(<Multiplier calculate={mockCalculate} />)

    expect(screen.getByRole("heading", {level: 1})).toHaveTextContent(2)

    await user.click(screen.getByRole("button"))
    
    expect(mockCalculate).toHaveBeenCalledTimes(1)

    expect(screen.getByRole("heading", {level: 1})).toHaveTextContent(4)
})