import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
      <p data-testid="count">{count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
    </div>
  )
}
