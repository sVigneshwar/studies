import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import userReducer, {setAge, setName} from './slice'
import Day8 from './Day8'
import { Provider } from 'react-redux'
import {store} from './store'

test("component testing", async () => {
    const user = userEvent.setup()
    
    render(
        <Provider store={store}>
            <Day8 />
        </Provider>
    )

    const inputField = screen.getByPlaceholderText("Enter name")
    const button = screen.getByRole("button", {name: /increase/i})

    await user.type(inputField, "vicky")
    // expect(screen.inputField(/vicky/i)).toBeInTheDocument()
    expect(inputField.value).toBe("vicky")

    await user.click(button)
    expect(screen.getByText(/age: 1/i)).toBeInTheDocument()
})