// for slice
import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
    const token = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
    return {
        user: { name: username || null, token: token || null },
        isLoggedIn: !!token
    };
};

const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialState(),
    reducers: {
        login(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            // Save to localStorage
            localStorage.setItem('accessToken', action.payload.token);
            localStorage.setItem('username', action.payload.name);
        },
        logout(state) {
            state.user = {name: null, token: null};
            state.isLoggedIn = false;
            // Clear localStorage
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('username');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;