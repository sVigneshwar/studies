import React, { useState } from 'react'
import useCounter from './useCounter'

export default function Counter() {

  const {count, increment, decrement} = useCounter(0, 10)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  )
}
