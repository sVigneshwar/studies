import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Users from '../Users/Users.jsx'
import React from 'react'
import { server } from '../../test2/mocks/server'
import {http, HttpResponse} from 'msw'

describe('Users Component', () => {
    test('check if component renders', async () => {
        render(<Users />)
        expect(screen.getByText("Users List")).toBeInTheDocument()
        // Wait for async fetch-driven state update to avoid act() warning
        await screen.findAllByRole('listitem')
    })

    test("check if users are rendered", async () => {
        render(<Users />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })

    test("error handling works", async () => {
        server.use(
            http.get('https://jsonplaceholder.typicode.com/users', () => {
                return HttpResponse.json(null, { status: 500 })
            })
        )
        render(<Users />)
        const errorMessage = await screen.findByText(/Error:/i)
        expect(errorMessage).toBeInTheDocument()
    })
})