// for settung up router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import "../styles/auth.css";
import { useSelector } from 'react-redux';

export default function AppRouter() {
  const token = useSelector(store => store.auth.user.token);
  return (
    <Router>
        <Routes>
            {/* default route */}
            <Route path="/" element={token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />

            {/* login route */}
            <Route path="/login" element={<Login />} />

            {/* protected route */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            
        </Routes>
    </Router>
  )
}