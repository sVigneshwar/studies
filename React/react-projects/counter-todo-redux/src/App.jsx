import React from 'react'
import { increment, decrement } from './slice/counterSlice'
import {useSelector, useDispatch} from 'react-redux'

export default function App() {
  const value = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}
