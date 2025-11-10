import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {login, logout} from './slice/authSlice'
import {api} from './api/api'

export default function App() {
  const [formValue, setFormValue] = useState({name: '', password: ''})
  const dispatch = useDispatch()
  const store = useSelector(store => store.user)

  const handleChange = (e) => {
    setFormValue(formValue => {return {...formValue, [e.target.name]: e.target.value}})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fakeResponse = {
      data: {
        token: "fake token 1234",
        user: {id: 1, name: "vicky test"}
      }
    }

    dispatch(login(fakeResponse.data))
  }

  const testGet = async () => {
    const res = api.get("/test")
    console.log(res);
  }

  return (
    <>
    {!store.token && (
      <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='email' value={formValue.name} onChange={e => handleChange(e)} /> <br /> <br />
        <input type="password" name="password" placeholder='password' value={formValue.password} onChange={e => handleChange(e)} /> <br /> <br />
        <button type='submit'>Submit</button>
      </form>
      </>
    )}
      {store.token && (
      <>
      <h1>Welcome {store.user.name}</h1>
      <button onClick={testGet}>test</button>
      <button onClick={() => dispatch(logout())}>logout</button>
      </>
    )}
    </>
  )
}
