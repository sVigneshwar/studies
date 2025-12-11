//for protected route component
import React, { use } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
    const token = useSelector(store => store.auth?.user?.token)
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
}