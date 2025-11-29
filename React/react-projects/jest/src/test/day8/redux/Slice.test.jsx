import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import userReducer, {setAge, setName} from './slice'
import reducer from './slice'

test("slice testing", () => {
    expect(reducer({name: '',age: 0}, setName("vicky"))).toEqual({name: 'vicky', age: 0})
    expect(reducer({name: '',age: 0}, setAge(1))).toEqual({name: '', age: 1})
})