let isRefreshingToken = false;
let failedRequestsQueue = [];

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark request as retried once

      if (isRefreshingToken) {
        // Add to queue if a refresh is already in progress
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject, originalRequest });
        });
      }

      isRefreshingToken = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken'); // Or wherever you store it
        const response = await axios.post('/api/refresh-token', { refreshToken });
        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        const retriedResponse = await axios(originalRequest);

        // Process queued requests
        failedRequestsQueue.forEach(({ resolve, reject, originalRequest: queuedRequest }) => {
          queuedRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          axios(queuedRequest).then(resolve).catch(reject);
        });
        failedRequestsQueue = []; // Clear the queue

        return retriedResponse;
      } catch (refreshError) {
        // Refresh token itself expired or failed
        console.error('Refresh token failed:', refreshError);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        // Clear queue and reject all pending requests
        failedRequestsQueue.forEach(({ reject }) => reject(new Error('Refresh token expired. Please log in again.')));
        failedRequestsQueue = [];
        window.location.href = '/login'; // Redirect to login
        return Promise.reject(refreshError);
      } finally {
        isRefreshingToken = false;
      }
    }
    return Promise.reject(error);
  }
);