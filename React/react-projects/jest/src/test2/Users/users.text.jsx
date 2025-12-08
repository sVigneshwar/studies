import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Users from './Users.jsx'
import React from 'react'
import { server } from '../mocks/server.js'
import {http, HttpResponse} from 'msw'

describe('Users Component', () => {
   test("check if component renders", async () => {
        render(<Users />)
        expect(screen.getByText("Users List")).toBeInTheDocument()
        await screen.findAllByRole('listitem')
   })

   test("check if user renders", async () => {
        render(<Users />)
        const userlist = await screen.findAllByRole("listitem")
        expect(userlist).toHaveLength(3)
   })

   test("check if error renders", async () => {
        server.use(
            http.get('https://jsonplaceholder.typicode.com/users', () => {
                return HttpResponse.json(null, {status: 500})
            })
        )

        render(<Users />)
        const errorMessage = await screen.findByText("Error: Failed to fetch users")
        expect(errorMessage).toBeInTheDocument()
   })
})