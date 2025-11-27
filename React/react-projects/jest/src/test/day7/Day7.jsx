import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

// Extracted Routes component for testing
export function AppRoutes() {
  const token = localStorage.getItem('token');
  return (
    <Routes>
      {/* default route */}
      <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} replace />
      {/* public route */}
      <Route path="/login" element={<Login />} />
      {/* private route */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  );
}

export default function Day7() {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}
