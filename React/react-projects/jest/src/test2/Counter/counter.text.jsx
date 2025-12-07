import '@testing-library/jest-dom'
import useCounter from './useCounter'
import {renderHook, act, render} from '@testing-library/react'

describe("useCounter", () => {
    test("test if useCounter renders", () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialValue: 0,
                updateByValue: 10
            }
        })
        expect(result.current.count).toBe(0)
    })

    test("test if useCounter renders with different initialvalue", () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialValue: 1,
                updateByValue: 10
            }
        })
        expect(result.current.count).toBe(1)
    })


    test("test if useCounter increments", () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialValue: 0,
                updateByValue: 10
            }
        })
        act(() => result.current.increment())
        expect(result.current.count).toBe(10)
    })

    test("test if useCounter decrements", () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialValue: 0,
                updateByValue: 10
            }
        })
        act(() => result.current.decrement())
        expect(result.current.count).toBe(-10)
    })
})