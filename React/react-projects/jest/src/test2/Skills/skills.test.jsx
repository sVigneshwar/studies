import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Skills from './Skills'
import React from 'react'

describe("Skills", () => {
    const skills = ['html', 'css', "js"];
    test("component render correctly", () => {
        render(<Skills skills={skills} />)
        const list = screen.getByRole("list")
        expect(list).toBeInTheDocument()
    })

    test("skills render correctly", () => {
        render(<Skills skills={skills} />)
        const list = screen.getAllByRole("listitem")
        expect(list).toHaveLength(skills.length)
    })
})