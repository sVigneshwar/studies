import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import React from 'react'
import Application from '../Application/Application'

test("Testing application component", () => {
    render(<Application />)

    var inputElement = screen.getByRole("textbox", {name: /name/i})
    var selectElement = screen.getByRole("combobox")
    var checkboxElement = screen.getByRole("checkbox")
    var heading1 = screen.getByRole("heading", {level: 1})
    var heading2 = screen.getByRole("heading", {level: 2})

    expect(inputElement).toBeInTheDocument()
    expect(selectElement).toBeInTheDocument()
    expect(checkboxElement).toBeInTheDocument()
    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
})