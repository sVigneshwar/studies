import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Fetch from '../day4/Fetch'
import React from 'react'

beforeEach(() => {
    global.fetch = jest.fn();
    fetch.mockClear()
})

describe('Testing fech', () => {
  test("Initial States", async () => {
        fetch.mockImplementation(url => {
            if (url.includes('users')) {
                return Promise.resolve({
                    json: () => Promise.resolve([])
                })
            }
            if (url.includes('posts')) {
                return Promise.resolve({
                    json: () => Promise.resolve([])
                })
            }
        })
        render(<Fetch />)
        expect(await screen.getByText(/loading data/i)).toBeInTheDocument()
        expect(await screen.getByText(/loading posts/i)).toBeInTheDocument()
    })
  
  test("Success state", async () => {
    fetch.mockImplementation(url => {
        if(url.includes('users')){
            return Promise.resolve({
                json: () => Promise.resolve([{id: 1, name: "vicky"}])
            })
        }
        if(url.includes('posts')){
            return Promise.resolve({
                json: () => Promise.resolve([{id: 1, title: "random title"}])
            })
        }
    })

    render(<Fetch />)
    expect(await screen.findByText(/vicky/i)).toBeInTheDocument()
    expect(await screen.findByText(/random title/i)).toBeInTheDocument()
  })

  test("Error State", async () => {
    fetch.mockImplementation(url => {
        if(url.includes("users")){
            return Promise.reject(new Error('user failed'))
        }
        if(url.includes("posts")){
            return Promise.reject(new Error('post failed'))
        }
    })
    render(<Fetch />)
    expect(await screen.findByText(/Error loading data/i)).toBeInTheDocument()
    expect(await screen.findByText(/Error loading posts/i)).toBeInTheDocument()
  })
})
