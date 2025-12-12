import { createStore } from 'redux'
import authReducer, { login, logout } from '../slice/slice'

describe('auth slice', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('login reducer sets user and localStorage', () => {
    const initialState = authReducer(undefined, { type: '@@INIT' })
    const newState = authReducer(initialState, login({ name: 'emilys', token: 'abc123' }))

    expect(newState.user.name).toBe('emilys')
    expect(newState.user.token).toBe('abc123')
    expect(newState.isLoggedIn).toBe(true)
    expect(localStorage.getItem('accessToken')).toBe('abc123')
    expect(localStorage.getItem('username')).toBe('emilys')
  })

  test('logout reducer clears state and localStorage', () => {
    const initialState = authReducer(undefined, { type: '@@INIT' })
    const loggedIn = authReducer(initialState, login({ name: 'emilys', token: 'abc123' }))
    const loggedOut = authReducer(loggedIn, logout())

    expect(loggedOut.user.name).toBe(null)
    expect(loggedOut.user.token).toBe(null)
    expect(loggedOut.isLoggedIn).toBe(false)
    expect(localStorage.getItem('accessToken')).toBe(null)
    expect(localStorage.getItem('username')).toBe(null)
  })
})
