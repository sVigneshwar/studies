import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import React from 'react'
import { AppRoutes } from './Day7'
import { MemoryRouter } from "react-router-dom"
import { api } from "./service/api"
//mock api
jest.mock('./service/api')
//spy localstorage
const removeLocalStorageSpy = jest.spyOn(Storage.prototype, 'removeItem')
//reset window location
delete window.location
window.location = {href: "", reload: jest.fn()}

//reset mock
beforeEach(() => {
  jest.clearAllMocks();
})
//test

test("testing flow", async () => {
  const user = userEvent.setup()

  api.post.mockResolvedValueOnce({
    data: {
      accessToken: "access token",
      refreshToken: "refresh token",
    }
  })

  api.post.mockResolvedValueOnce({
    data: {
      firstName: "Emily", 
      email: "emily@mail.com"
    }
  })
  
  //render
  render(<MemoryRouter initialEntries={['/login']}>
    <AppRoutes />
  </MemoryRouter>)

  expect(await screen.findByRole("heading", {name: /login/i})).toBeInTheDocument()

  //type
  await user.type(screen.getByLabelText(/username/i), "emilys")
  await user.type(screen.getByLabelText(/password/i), "emilyspass")

  //submit
   user.click(await screen.getByRole('button', /login/i))

  //check dashboard
   expect(await screen.findByText(/welcome/i)).toBeInTheDocument()

  //click logout
  await user.click(screen.getByRole('button', /logout/i))
  expect(removeLocalStorageSpy).toHaveBeenCalledWith('token')
  expect(removeLocalStorageSpy).toHaveBeenCalledWith('refreshToken')

  //check login
  // expect(await screen.findByRole("heading", {name: /login/i})).toBeInTheDocument()

})
