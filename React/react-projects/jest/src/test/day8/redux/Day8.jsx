import React from 'react'
import { setName, setAge } from './slice'
import {useSelector, useDispatch} from 'react-redux'

export default function Day8() {
    const {name, age} = useSelector(store => store.user)
    const dispatch = useDispatch()
  return (
    <>
    <input type="name" placeholder='Enter name' value={name} onChange={e => dispatch(setName(e.target.value))} /><br />
    <p>Age: {age}</p>
    <button onClick={() => dispatch(setAge(1))}>Increase age</button>
    </>
  )
}
