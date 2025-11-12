import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function App() {
  const token = useSelector(store => store.auth.accessToken)
  return (
    <>
   <Router>
  <Routes>
    {/* default route */}
    <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} replace />} />

    {/* public route */}
    <Route path="/login" element={<Login />} />

    {/* protected layout route */}
    <Route path="/" element={<ProtectedRoute>          <Home />        </ProtectedRoute>}    >
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
</Router>

    </>
  )
}
