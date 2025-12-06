import {useState} from 'react'

export default function useCounter(initialValue = 0, updateValueBy) {
    const [count, setCount] = useState(initialValue) 
    const increment = () => setCount(prevCount => prevCount + updateValueBy)
    const decrement = () => setCount(prevCount => prevCount - updateValueBy)
    const reset = () => setCount(initialValue);


    return [count, increment, decrement, reset];
}
