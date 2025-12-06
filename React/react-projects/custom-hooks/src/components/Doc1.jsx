import React from 'react'
import {useState} from 'react'
import useTitle from '../hooks/useTitle.jsx'

export default function Doc1() {
    const [count, setCount] = useState(0)
    useTitle(`Count: ${count}`)
    return (
        <>
        <h1>Custom Hooks Demo</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}
