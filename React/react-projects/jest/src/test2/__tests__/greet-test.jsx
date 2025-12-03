import '@testing-library/jest-dom'
import Greet from '../Greet'
import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import React from 'react'

test("Testing greet component", () => {
    render(<Greet />)
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
})