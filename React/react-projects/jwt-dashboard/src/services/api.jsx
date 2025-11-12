import axios from 'axios'
import { store } from '../store/store'
import { logout, setToken } from '../slice/authSlice'

export const api = axios.create({
    baseURL: "https://dummyjson.com/auth",
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("accessToken")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config

        console.log("❌ [API Error]", error.response?.status, "on", originalRequest.url);
        console.log("⚙️ Original Request Config:", originalRequest);

        if(error.response?.status === 401 && !originalRequest._retry){
            console.log("🔁 Token expired — attempting refresh...");
            originalRequest._retry = true
            console.log("🧩 Marked _retry =", originalRequest._retry);
            const refreshToken = localStorage.getItem("refreshToken")
            if(!refreshToken){
                console.warn("⚠️ No refresh token found. Logging out...");
                store.dispatch(logout())
                return Promise.reject(error)
            }
            try{
                console.log("📤 Sending refresh request with refreshToken")
                const res = await api.post("/refresh", {refreshToken, expiresInMins: 1})
                const data = res.data;
                console.log("✅ [Refresh Success] New tokens received:");
                store.dispatch(setToken(data))
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
                console.log("🔁 Retrying original request:")
                return api(originalRequest)
            }catch(err){
                console.error("❌ [Refresh Failed]", err.response?.status);
                store.dispatch(logout())
            }
        }

        return Promise.reject(error)
    }
)