import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login} from './slice/authSlice'
import {useNavigate } from 'react-router-dom'

export default function Login() {
  const [formValue, setFormValue] = useState({name: '', password: ''})
  const dispatch = useDispatch()
  const token = useSelector(store => store.user.token)
  const navigate = useNavigate ()

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

  // 👇 Redirect after token updates
  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [token]);

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='email' value={formValue.name} onChange={e => handleChange(e)} /> <br /> <br />
        <input type="password" name="password" placeholder='password' value={formValue.password} onChange={e => handleChange(e)} /> <br /> <br />
        <button type='submit'>Submit</button>
      </form>
      </>
  )
}
