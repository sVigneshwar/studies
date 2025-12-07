import React, { useState } from 'react'

export default function Counter2({prop}) {

    const [count, setCount] = useState(prop.count)

  return (
    <div>
      <h1>{count}</h1>
      {prop.decrement && 
      <button onClick={() => setCount(prop.decrement(count))}>Decrement</button>}
      
      {prop.increment && 
      <button onClick={() => setCount(prop.increment(count))}>Increment</button>}      
    </div>
  )
}

//testing will be like this
/*prop = {
  count: 1,
  increment: function mockIncrement(count) { return 2 },
  decrement: function mockDecrement(count) { return 0 }
}

<button onClick={() => setCount(mockIncrement(count))}>Decrement</button>}

<button onClick={() => setCount(mockDecrement(count))}>Increment</button>}      
*/