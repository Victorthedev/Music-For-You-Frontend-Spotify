// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Since we're using Passport, we don't need a separate check endpoint
  // The session is handled by Passport and user data is available through req.user
  // We can check if user is logged in by attempting to access a protected route
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3000/library', {
        withCredentials: true
      });
      setUser({ isAuthenticated: true });
    } catch (error) {
      if (error.response?.status === 401) {
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };  

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = () => {
    // Redirect to Spotify auth route
    window.location.href = 'http://localhost:3000/auth/spotify';
  };

  const logout = async () => {
    try {
      await axios.get('http://localhost:3000/auth/logout', {
        withCredentials: true
      });
      setUser(null);
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  

  const value = {
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};