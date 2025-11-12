import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { logout, setUserData } from '../slice/authSlice'
import { loggedInData } from '../services/loginService'
import Dashboard from './Dashboard'
import About from './About'
import {Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const store = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    if(store.accessToken){
      fetchUserData()
    }
  }, [store.accessToken])

  const fetchUserData = async () => {
    setLoading(true)
    try{
      const res = await loggedInData(store.accessToken)
      dispatch(setUserData(res))
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
        <ul>
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
<li onClick={() => navigate("/about")}>About</li>

        </ul>
        <button onClick={handleLogout}>Logout</button>
        <Outlet />
    </div>
  )
}
