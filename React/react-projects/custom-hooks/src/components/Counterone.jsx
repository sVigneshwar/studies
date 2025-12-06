import React from 'react'
import useCounter from '../hooks/useCounter'

export default function Counterone() {
    const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
