import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import React from 'react'
import Application from '../Application/Application'

test("Testing application component", () => {
    render(<Application />)

    let inputElement = screen.getByRole("textbox", {name: /name/i})
    let selectElement = screen.getByRole("combobox")
    let checkboxElement = screen.getByRole("checkbox")
    let heading1 = screen.getByRole("heading", {level: 1})
    let heading2 = screen.getByRole("heading", {level: 2})
    let inputElement2 = screen.getByLabelText("Name", {selector: "input"})
    let selectElement2 = screen.getByLabelText("Name", {selector: "select"})
    let checkboxElement2 = screen.getByLabelText(/Terms checkbox/i)
    let inputElement3 = screen.getByPlaceholderText("fullname")
    let textElement = screen.getByText(/are mandatory/i)
    let inputElement4 = screen.getByDisplayValue(/Vicky/i)
    let closeElement = screen.getByTitle("close")
    let customElement = screen.getByTestId("custom-element")

    expect(inputElement).toBeInTheDocument()
    expect(selectElement).toBeInTheDocument()
    expect(checkboxElement).toBeInTheDocument()
    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
    expect(inputElement2).toBeInTheDocument()
    expect(selectElement2).toBeInTheDocument()
    expect(checkboxElement2).toBeInTheDocument()
    expect(inputElement3).toBeInTheDocument()
    expect(textElement).toBeInTheDocument()
    expect(inputElement4).toBeInTheDocument()
    expect(closeElement).toBeInTheDocument()
    expect(customElement).toBeInTheDocument()
})