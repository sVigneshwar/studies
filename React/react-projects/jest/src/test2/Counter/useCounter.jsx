import React, {useState} from 'react'

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue)
    const decrement = () => setCount(count => count - 1)
    const increment = () => setCount(count => count + 1)

    return {count, decrement, increment}
}

export default useCounter
