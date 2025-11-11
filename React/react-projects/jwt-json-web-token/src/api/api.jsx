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
  console.log("🔹 [Request Sent]", config.url, "with token:", token?.slice(0, 10) + "...");
  return config;
});

// Handle 401 and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log("❌ [API Error]", error.response?.status, "on", originalRequest.url);
    console.log("⚙️ Original Request Config:", originalRequest);

    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log("🔁 Token expired — attempting refresh...");

      originalRequest._retry = true;
      console.log("🧩 Marked _retry =", originalRequest._retry);

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.warn("⚠️ No refresh token found. Logging out...");
        store.dispatch(logout());
        return Promise.reject(error);
      }

      try {
        console.log("📤 Sending refresh request with refreshToken:", refreshToken.slice(0, 10) + "...");
        const { data } = await axios.post("https://dummyjson.com/auth/refresh", { refreshToken, expiresInMins: 1 });

        console.log("✅ [Refresh Success] New tokens received:");
        console.log("accessToken:", data.accessToken.slice(0, 20) + "...");
        console.log("refreshToken:", data.refreshToken.slice(0, 20) + "...");

        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        store.dispatch(setToken(data.accessToken));

        // Retry failed request with new token
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        console.log("🔁 Retrying original request:", originalRequest.url);
        return api(originalRequest);

      } catch (err) {
        console.error("❌ [Refresh Failed]", err.response?.status);
        store.dispatch(logout());
      }
    }

    return Promise.reject(error);
  }
);
