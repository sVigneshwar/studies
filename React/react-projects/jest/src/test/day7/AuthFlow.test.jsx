import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import React from 'react'
import { AppRoutes } from './Day7'
import { MemoryRouter } from "react-router-dom"
import { api } from "./service/api"

// (1) MOCK AXIOS INSTANCE
jest.mock('./service/api/')

// (2) SPY ON localStorage
const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem')

// (3) MOCK window.location.reload
delete window.location
const reloadMock = jest.fn()
window.location = {reload: reloadMock, href: ''}


beforeEach(() => {
    removeItemSpy.mockClear()
    reloadMock.mockClear()
})


test("Full login → dashboard → logout flow", async () => {
  const user = userEvent.setup()

  // (4) MOCK LOGIN API CALL
  api.post.mockResolvedValue({
    data: {
        accessToken: "accesstoken",
        refreshToken: "refreshtoken"
    }
  })

  // (5) MOCK /me PROFILE CALL
  api.get.mockResolvedValue({
    data: {
        firstName: "Emily",
        email: "emily@mail.com"
    }
  })
  

  // (6) START APP AT /login
  render(
    <MemoryRouter initialEntries={["/login"]}>
        <AppRoutes />
    </MemoryRouter>
  )
  

  // (7) LOGIN PAGE LOADED
  expect(await screen.findByRole("heading", { name: /login/i })).toBeInTheDocument()
  

  // (8) SUBMIT LOGIN
  await user.type(screen.getByLabelText(/username/i), "emilys")
  await user.type(screen.getByLabelText(/password/i), "emilyspass")
  await user.click(screen.getByRole("button", { name: /login/i }))
  

  // (9) DASHBOARD LOADS WITH PROFILE
  expect(await screen.findByText(/welcome emily/i)).toBeInTheDocument()
  expect(screen.getByText(/email:/i)).toBeInTheDocument()
  

  // (10) LOG OUT
  await user.click(screen.getByRole("button", { name: /logout/i }))
  

  // (11) VERIFY LOGOUT CALLED - tokens removed from localStorage
  expect(removeItemSpy).toHaveBeenCalledWith('token')
  expect(removeItemSpy).toHaveBeenCalledWith('refreshToken')
  
})
