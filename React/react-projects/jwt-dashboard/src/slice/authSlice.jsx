import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, actions) => {
            state.accessToken = actions.payload.accessToken
            state.refreshToken = actions.payload.refreshToken
            localStorage.setItem("accessToken", state.accessToken)
            localStorage.setItem("refreshToken", state.refreshToken)
        },
        logout: state => {
            state.userData = null;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
        },
        setToken: (state, actions) => {
            state.accessToken = actions.payload.accessToken
            state.refreshToken = actions.payload.refreshToken
            localStorage.setItem("accessToken", state.accessToken)
            localStorage.setItem("refreshToken", state.refreshToken)
        },
        setUserData: (state, actions) => {
            state.userData = actions.payload
        }
    }
})

export const {login, logout, setToken, setUserData} = authSlice.actions
export default authSlice.reducer;