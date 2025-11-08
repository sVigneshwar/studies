import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function App2() {
  const navigate = useNavigate()
  const store = useSelector(store => store.user)

  useEffect(() => {
    if(!store.token){
      navigate("/login")
    }else{
      navigate("/dashboard")
    }
    
  }, [store.token])

  return (
    <>

    </>
  )
}
