import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../slice/slice';
import { useSelector } from 'react-redux';
import api from '../api/api';


export default function Dashboard() {
    const [profile, setProfile] = React.useState(null);
    const dispatch = useDispatch();
   
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('accessToken') || localStorage.getItem('token');
                if (!token) {
                    setProfile({ error: 'Not authenticated' });
                    return;
                }

                const res = await api.get('/auth/me');
                setProfile(res.data);
            } catch (err) {
                console.error('Error fetching profile:', err?.response?.data || err.message || err);
                setProfile({ error: err?.response?.data?.message || err.message || 'Failed' });
            }
        };
        fetchProfile();
    }, []);


  return (
    <div className="dashboard-container">
        <h1>Dashboard Page</h1>
        <p>Welcome to the dashboard!</p>
        <button className="logout-button" onClick={() => dispatch(logout())}>Logout</button>
        {profile && (
            <div className="profile-section">
                <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
        )}
        
    </div>
  )
}
