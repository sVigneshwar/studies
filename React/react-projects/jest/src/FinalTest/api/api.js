//for fetch setup
import axios from "axios";
import { store } from "../store/store";
import { logout } from "../slice/slice";

const api = axios.create({
        baseURL: 'https://dummyjson.com',
});

api.interceptors.request.use(
    config => {
    // You can add auth tokens or other headers here if needed
    const token = localStorage.getItem('accessToken');
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
    // Handle global errors here

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;
        // Access token expired or invalid
        const refreshToken = localStorage.getItem('refreshToken');
        
        if (!refreshToken) {
            store.dispatch(logout());
            return Promise.reject(error);
        }

        try {
            const { data } = await axios.post("https://dummyjson.com/auth/refresh", { refreshToken, expiresInMins: 60 });    
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            return api(originalRequest);
        } catch (err) {
            store.dispatch(logout());
        }
    }
    
    return Promise.reject(error);

});

export default api;