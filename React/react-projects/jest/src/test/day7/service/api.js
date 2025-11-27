import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {
    "Content-Type": 'application/json'
  },
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;
        console.log("API Error:", error.response.status, "on", originalRequest.url);
        console.log("Original Request Config:", originalRequest);
        if (error.response.status === 401 && !originalRequest._retry) {
            console.log("Token expired — attempting refresh...");
            
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                // Handle missing refresh token, e.g., logout user
                console.warn("No refresh token found. Logging out...");
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                return Promise.reject(error);
            }
            try {
                console.log("Trying to refresh token...");
                const { data } = await axios.post('https://dummyjson.com/auth/refresh', {
                    refreshToken,
                    expiresInMins: 1,
                });
                console.log("Token refreshed successfully.");
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                // Update original request with new token
                console.log("Updating original request with new token...");
                originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                return api(originalRequest);
            } catch (err) {
                console.error("Token refresh failed:", err);
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                return Promise.reject(err);
            }
            // Handle unauthorized access, e.g., redirect to login
        }
        return Promise.reject(error);
    }
);