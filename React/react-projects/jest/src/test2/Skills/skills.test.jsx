import '@testing-library/jest-dom'
import {render, screen, logRoles} from '@testing-library/react'
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
    
    test("check if login button rendered", () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button", {name: /login/i})
        expect(loginButton).toBeInTheDocument()
    })

    test("check if start learning button is not rendered", () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole("button", {name: /start learning/i})
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test("check if start learning appear after sometime", async () => {
        const view = render(<Skills skills={skills} />)
        logRoles(view.container)
        // render(<Skills skills={skills} />)
        // screen.debug()
        const startLearningButton = await screen.findByRole("button", {name: /start learning/i}, {timeout: 2000})
        // screen.debug()
        expect(startLearningButton).toBeInTheDocument()
    })
})