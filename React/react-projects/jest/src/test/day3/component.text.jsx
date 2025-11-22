import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Component from './Component'
import React from 'react'

test("typing name", async () => {
    render(<Component />)

    const nameInput = screen.getByLabelText(/name/i)

    await userEvent.type(nameInput, "Vicky")

    expect(nameInput.value).toBe("Vicky")
})

test("typing age", async () => {
    
    render(<Component />)

    const ageInput = screen.getByLabelText(/age/i)

    await userEvent.type(ageInput, "18")

    expect(ageInput.value).toBe("18")
})

test("submit form", async () => {
    const user = userEvent.setup();
    render(<Component />);

    const nameInput = screen.getByLabelText(/name/i);
    const ageInput = screen.getByLabelText(/age/i);
    const submit = screen.getByRole("button", { name: /submit/i });

    await user.type(nameInput, "Vicky");
    await user.type(ageInput, "18");
    await user.click(submit);

    // If submit triggers async work, wait for the success text:
    const success = await screen.findByText(/success|submitted|thank you/i);
    expect(success).toBeInTheDocument();
})

test("initial details", () => {
    render(<Component />)

    const details = screen.queryByText(/content/i)

    expect(details).not.toBeInTheDocument()

})

test("first click", async () => {
     render(<Component />)

    const detailsButton = screen.getByRole("button", {name: /show/i})

    await userEvent.click(detailsButton)

    expect(screen.queryByText(/content/i)).toBeInTheDocument()
})

test("second click", async () => {
    render(<Component />)

    const detailsButton = screen.getByRole("button", {name: /show/i})

    await userEvent.dblClick(detailsButton)

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
})

test("select dropdown", async () => {
    render(<Component />)

    const select = screen.getByRole("combobox")

    await userEvent.selectOptions(select, "usa")

    const option = screen.getByRole("option", {name: /usa/i})
    expect(option.selected).toBe(true)
    expect(select.value).toBe("usa")
})