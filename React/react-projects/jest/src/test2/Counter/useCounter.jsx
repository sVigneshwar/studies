import React, { useState } from 'react'

function useCounter({initialValue = 0, updateByValue = 1}) {
    const [count, setCount] = useState(initialValue)
    const increment = () => setCount(count => count + updateByValue)
    const decrement = () => setCount(count => count - updateByValue)

    return {count, increment, decrement}
}

export default useCounter
