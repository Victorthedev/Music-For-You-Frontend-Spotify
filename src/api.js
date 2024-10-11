import axios from 'axios';
import { getAccessToken, getRefreshToken, setTokens, isTokenExpired } from './utils/tokenUtils';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use(async (config) => {
  if (isTokenExpired()) {
    try {
      const response = await axios.post('http://localhost:4000/auth/refresh', {
        refresh_token: getRefreshToken(),
      });
      setTokens(response.data.access_token, getRefreshToken(), response.data.expires_in);
    } catch (error) {
      console.error('Error refreshing token:', error);
      // Redirect to login if refresh fails
      window.location.href = '/login';
      return Promise.reject(error);
    }
  }

  const token = getAccessToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;