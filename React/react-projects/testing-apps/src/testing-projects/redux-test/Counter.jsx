import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './counterSlice'

export default function Counter() {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(increment())}>Increment</button>
      
    </div>
  )
}
