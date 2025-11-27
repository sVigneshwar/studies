import React, {useEffect, useState} from 'react'
import {api} from './service/api';
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const [formData, setFormData] = useState({
        username: "emilys",
        password: "emilyspass"
    });
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', {...formData, expiresInMins: 1});
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            setToken(accessToken);
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        }        
    };

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/dashboard');
        }
    }, [token])
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
