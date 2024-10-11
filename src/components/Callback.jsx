import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  const clearTokens = () => {
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
    localStorage.removeItem('spotify_token_expiry');
  };

  const redirectToSpotifyLogin = () => {
    const state = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('spotify_auth_state', state);
    window.location.href = `http://localhost:4000/auth/login?state=${state}`;
  };

  useEffect(() => {
    const handleCallback = async () => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get('code');
      const state = searchParams.get('state');
    
      if (code && state) {
        try {
          const response = await axios.get(`http://localhost:4000/auth/callback?code=${code}&state=${state}`);
          
          if (response.data.access_token) {
            localStorage.setItem('spotify_access_token', response.data.access_token);
            localStorage.setItem('spotify_refresh_token', response.data.refresh_token);
            localStorage.setItem('spotify_token_expiry', Date.now() + response.data.expires_in * 1000);
            navigate('/home');
          } else {
            throw new Error('No access token received');
          }
        } catch (error) {
          console.error('Error during authentication:', error);
          if (error.response?.data?.error === 'invalid_grant') {
            setError('Your login session has expired. Redirecting to Spotify login...');
            clearTokens();
            setTimeout(redirectToSpotifyLogin, 3000);
          } else {
            setError(error.response?.data?.error || error.message || 'An unknown error occurred');
            clearTokens();
            setTimeout(() => navigate('/login'), 5000);
          }
        }
      } else {
        setError('No authorization code received. Redirecting to Spotify login...');
        clearTokens();
        setTimeout(redirectToSpotifyLogin, 3000);
      }
    };

    handleCallback();
  }, [location, navigate]);

  if (error) {
    return (
      <div>
        <h2>Authentication Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return <div>Authenticating...</div>;
};

export default Callback;