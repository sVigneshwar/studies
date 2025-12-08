import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Users from '../Users/Users.jsx'
import React from 'react'

describe('Users Component', () => {
    test('check if component renders', async () => {
        render(<Users />)
        expect(screen.getByText("Users List")).toBeInTheDocument()
    })

    test("check if users are rendered", async () => {
        render(<Users />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })
})