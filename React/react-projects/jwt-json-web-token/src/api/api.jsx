import axios from 'axios'
import {store} from "../store/store";
import { logout, setToken } from "../slice/authSlice";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

// Attach token to each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle 401 and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;


    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        
        store.dispatch(logout());
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post("https://dummyjson.com/auth/refresh", { refreshToken, expiresInMins: 1 });


        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        store.dispatch(setToken(data.accessToken));

        // Retry failed request with new token
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);

      } catch (err) {
        console.error("❌ [Refresh Failed]", err.response?.status);
        store.dispatch(logout());
      }
    }

    return Promise.reject(error);
  }
);
