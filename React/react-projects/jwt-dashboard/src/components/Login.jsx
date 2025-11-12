import React, { useEffect, useState } from 'react'
import { loginFormSubmit } from '../services/loginService'
import {useSelector, useDispatch} from 'react-redux'
import { login } from '../slice/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [formData, setFormData] = useState({username: 'emilys', password: 'emilyspass'})
    const [formError, setFormError] = useState("")
    const [loading, setLoading] = useState(false)
    const store = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(formData.username === "" || formData.password === ""){
            setFormError("Enter all the credentials")
            return;
        }
        setFormError("")
        setLoading(true)
        try{
            const res = await loginFormSubmit({...formData, expiresInMins: 1})
            dispatch(login(res))
            setFormError("")
        }catch(error){
            console.log(error);
            setFormError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(store.accessToken){
            navigate("/dashboard")
        }
    }, [store.accessToken])

  return (
    <div>
      <h1>Login</h1> 
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} disabled={loading} /> <br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} disabled={loading} /> <br />
        <button type='submit' disabled={loading}>{loading ? "Logging.." : "Login"}</button>
      </form>
      {formError !== "" && <p style={{color: "red"}}>{formError}</p>}
    </div>
  )
}
