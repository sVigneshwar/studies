import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from './slice/authSlice'
import {api} from './api/api'

export default function Dashboard() {
  const dispatch = useDispatch()
  const store = useSelector(store => store.user)

  const testGet = async () => {
    const res = api.get("/test")
    console.log(res);
  }

  return (
    <>
      <h1>Welcome {store.user.name}</h1>
      <button onClick={testGet}>test</button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </>
  )
}
