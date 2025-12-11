import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import api from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slice/slice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = React.useState('emilys');
    const [password, setPassword] = React.useState('emilyspass');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const onSubmit = async data => {
        console.log(data);
        // handle login logic here
        // https://dummyjson.com/auth/login

        try {
            const res = await api.post('/auth/login', {
                username: data.name,
                password: data.password,
                expiresInMins: 60,
            });
            
            console.log('Login successful:', res.data);
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('username', res.data.username);
            // navigate to dashboard or another page
            dispatch(login({ name: res.data.username, token: res.data.accessToken }));
            navigate('/dashboard');
            
        } catch (err) {
            console.error('Login failed:', err.message);
            // handle error display
        }
    }
    

  return (
    <div>
        {/* login page using react hook form */}
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    {...register('name', { required: 'Name is required' })}
                    value={name} onChange={e => setName(e.target.value)}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    {...register('password', { required: 'Password is required' })}
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Login</button>
        </form>     
    </div>
  )
}
