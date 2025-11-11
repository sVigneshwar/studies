import React from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const token = useSelector(store => store.user.token)

  return(
    <>
    <Router>
      <Routes>
        {/* default route */}
        <Route path="/" element={<Navigate to={token ? "/dashboard": "/login"} replace />} />
        {/* public route */}
        <Route path="/login" element={<Login />} />
        {/* protected route */}
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
    </>
  )

}
