import React, { useEffect } from 'react'
import { updateToken } from '../slice/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import { api } from '../service/api'
import {updateUserData } from '../slice/userSlice'

export default function Dashboard() {
  const dispatch = useDispatch()
  const store = useSelector(store => store.user)

  useEffect(() => {
      if(store.token) fetchData()
    }, [store.token])
  
    const fetchData = async () => {
      try{
        const res = await api.get("/me")
        const data = res.data;
  
        console.log(data);
        dispatch(updateUserData(res.data))
        
      }catch(err){
        console.log("Fetch Data Error", err);
      }
    }

  const handleLogout = () => {
    dispatch(updateToken(""))
    localStorage.removeItem("token")
    
  }
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <h1>Welcome {store.userData.firstName}</h1>
      <h3>Find your details below:</h3>
      <pre>{JSON.stringify(store.userData, null, 4)}</pre>
    </>
  )
}
