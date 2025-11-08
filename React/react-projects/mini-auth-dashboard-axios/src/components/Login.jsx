import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { handleInputChange, updateError, updateToken, updateLoading } from '../slice/userSlice'
import { api } from "../service/api";

export default function Login() {
  const store = useSelector(store => store.user)
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    if(store.formData.username === "" || store.formData.password === ""){
      dispatch(updateError("Please enter all the details!"))
      return;
    }
    try{
      dispatch(updateLoading(true))
      const res = await api.post("/login", store.formData)
      const accessToken = res.data.accessToken;

      localStorage.setItem("token", accessToken)
      dispatch(updateToken(accessToken))
      dispatch(updateError(""))
      
    }catch(err){
      console.log("Submit Error: ", err);
      dispatch(updateError("Invalid Username Password"))
    }finally{
      dispatch(updateLoading(false))
    }
  }

  return (
    <>
    
    {store.errorBox !== "" && <p style={{color: "Red"}}>{store.errorBox}</p>}
     <h1>Login</h1> 
     <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder='Username' disabled={store.submitting} value={store.formData.username} onChange={e=> dispatch(handleInputChange({key: e.target.name, value: e.target.value}))} /> <br /> <br />
      <input type="password" name='password' placeholder='Password' disabled={store.submitting} value={store.formData.password} onChange={e=> dispatch(handleInputChange({key: e.target.name, value: e.target.value}))} /> <br /> <br />
      <button type='submit'>{store.submitting ? "Logging...." : "Login"}</button>
     </form>
    </>
  )
}
