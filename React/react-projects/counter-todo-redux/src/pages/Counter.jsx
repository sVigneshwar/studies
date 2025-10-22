import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../slice/counterSlice'

export default function Counter() {
const value = useSelector(state => state.counter.count)
const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter App</h1>
        <h2>{value}</h2>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}
