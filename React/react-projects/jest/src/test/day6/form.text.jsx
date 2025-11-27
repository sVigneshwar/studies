import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {userEvent} from "@testing-library/user-event"
import React from 'react'
import Formikform from './Formikform'
import RHF from './RHF'

test ("Formikform submit validation", async() => {
    const user = userEvent.setup()
    render(<Formikform />)

    const submitbtn = screen.getByRole("button", {name: /formik submit/i})

    await user.click(submitbtn)

    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/password is required/i)).toBeInTheDocument()
})
test ("Formikform typing checking", async() => {
    const user = userEvent.setup()
    render(<Formikform />)

    const emailField = screen.getByPlaceholderText(/email/i)
    const passwordField = screen.getByPlaceholderText(/password/i)

    await user.type(emailField, "vicky@test.com")
    await user.type(passwordField, "vicky1234")

    expect(emailField.value).toBe("vicky@test.com")
    expect(passwordField.value).toBe("vicky1234")

})
test ("Formikform submit checking", async() => {
    const user = userEvent.setup()
    const mock = jest.fn()
    render(<Formikform onSubmit={mock} />)

    const emailField = screen.getByPlaceholderText(/email/i)
    const passwordField = screen.getByPlaceholderText(/password/i)
    const submitbtn = screen.getByRole("button", {name: /formik submit/i})

    await user.type(emailField, "vicky@test.com")
    await user.type(passwordField, "vicky1234")
    await user.click(submitbtn)

    expect(mock).toHaveBeenCalledWith({email: "vicky@test.com",password: "vicky1234"}, expect.anything())
})
test ("RHF submit validation", async() => {
    const user = userEvent.setup()
    render(<RHF />)

    const submitbtn = screen.getByRole("button", {name: /rhf submit/i})

    await user.click(submitbtn)

    expect(screen.getByText(/name is required/i)).toBeInTheDocument()
    expect(screen.getByText(/phone is required/i)).toBeInTheDocument()
})
test ("RHF typing checking", async() => {
    const user = userEvent.setup()
    render(<RHF />)

    const nameField = screen.getByPlaceholderText(/name/i)
    const phoneField = screen.getByPlaceholderText(/phone/i)

    await user.type(nameField, "vignesh")
    await user.type(phoneField, "123456789")

    expect(nameField.value).toBe("vignesh")
    expect(phoneField.value).toBe("123456789")
})
test ("RHF submit checking", async() => {
    const user = userEvent.setup()
    const mock = jest.fn()
    render(<RHF onSubmit={mock} />)

    const nameField = screen.getByPlaceholderText(/name/i)
    const phoneField = screen.getByPlaceholderText(/phone/i)
    const submitbtn = screen.getByRole("button", {name: /rhf submit/i})

    await user.type(nameField, "vignesh")
    await user.type(phoneField, "123456789")
    await user.click(submitbtn)

    expect(mock).toHaveBeenCalledWith({name: "vignesh",phone: "123456789"}, expect.anything())
})