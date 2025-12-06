import '@testing-library/jest-dom'
import useCounter from './useCounter'
import {renderHook, act} from '@testing-library/react'

test("custom hook renders initial value", () => {
    const {result} = renderHook(useCounter)
    expect(result.current.count).toBe(0)
})

test("custom hook renders property value", () => {
    const {result} = renderHook(useCounter, {
        initialProps: 10
    })
    expect(result.current.count).toBe(10)
})

test("custom hook increment function", () => {
    const {result} = renderHook(useCounter)
    expect(result.current.count).toBe(0)
    act(() => {
        result.current.increment()
    })
    expect(result.current.count).toBe(1)
})