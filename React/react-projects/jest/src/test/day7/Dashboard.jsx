import React, { useEffect, useState } from 'react'
import {api} from './service/api';
import {useNavigate} from 'react-router-dom'

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem('refreshToken');
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      fetchUserData();
    }
  }, []);
  
  const fetchUserData = async () => {
    try {
      const response = await api.get('/me');
      console.log('User data:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  }

  useEffect(() => {
    if (!token) {
      setData(null);
      setToken(null);
      navigate("/login");
    }
  }, [token]);

  return (
    <div>
      <h1>Welcome {data?.firstName}</h1>
      <p>Email: {data?.email}</p>
      <button onClick={() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.reload();
      }}>Logout</button>
    </div>
  )
}
