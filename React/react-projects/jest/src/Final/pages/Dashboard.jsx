import React from 'react'
import ProductList from '../components/ProductList'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../features/auth/authSlice'
import {selectUser} from '../features/auth/authSelectors'
import {useNavigate} from 'react-router-dom'

export default function Dashboard(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  function handleLogout(){
    dispatch(logout())
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.name || 'Guest'}</p>
      <button onClick={handleLogout}>Logout</button>
      <ProductList />
    </div>
  )
}
