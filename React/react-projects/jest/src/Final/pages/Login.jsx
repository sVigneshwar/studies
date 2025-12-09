import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'
import '../styles/app.css'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    setError(null)
    if(!username || !password){
      setError('Both fields required')
      return
    }

    try{
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({username, password})
      })
      if(!res.ok){
        throw new Error('Invalid login')
      }
      const data = await res.json()
      dispatch(login({name: data.username, token: data.token}))
      localStorage.setItem('token', data.token)
      localStorage.setItem('username', data.username)
      navigate('/dashboard')
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input aria-label="username" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
          <input aria-label="password" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
