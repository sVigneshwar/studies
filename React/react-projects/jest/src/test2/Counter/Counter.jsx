import React from 'react'
import useCounter from './useCounter'

export default function Counter() {
    const {count, decrement, increment} = useCounter()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  )
}
