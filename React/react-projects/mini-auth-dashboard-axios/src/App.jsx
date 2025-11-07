import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function App() {
  
  const [formData, setFormData] = useState({ username: "emilys", password: "emilyspass" })
  const [formError, setFormError] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userProfile, setUserProfile] = useState({})
  
  const handleChange = input => {
    setFormData({...formData, [input.target.name]: input.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.username === "" || formData.password === ""){
      setFormError("Please fill all the details")
      return;
    }
    try{
      setFormError("")
      setSubmitting(true)
      const res = await axios.post("https://dummyjson.com/auth/login",formData)
      const accessToken = res.data.accessToken;
      console.log(res.data)     
      console.log(accessToken)     
      localStorage.setItem("token", accessToken)
      setToken(accessToken)
    }catch(err){
      console.log(err);
      setFormError(err.message)
    }finally{
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if(token){
      fetchProfile()
    }
  }, [token])

  const fetchProfile = async () => {
    try{
      const res = await axios.get("https://dummyjson.com/auth/me", {headers: {Authorization: `Bearer ${token}`}})
      const data = res.data;

      setUserProfile(data)

      console.log(data)
    }catch(err){
      console.log(err);
    }
  }

  const handleLogout = () => {
    setToken("")
    localStorage.removeItem("token")
  }

  return (
    <>
    {!token 
    ? (
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Name' value={formData.username} onChange={handleChange} disabled={submitting} />  <br />
        <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} disabled={submitting} />  <br />
        {formError !== "" && <p style={{color: "red"}}>{formError}</p>}
        <button type='submit'>{submitting ? "Logging..." : "Login"}</button>
      </form>
      ) 
    : (<>
      <h1>Welcome {userProfile.firstName}</h1>
      <button onClick={handleLogout}>Logout</button>
      <pre>{JSON.stringify(userProfile, null, 4)}</pre>
      </>
    )
    }
    </>
  )
}
