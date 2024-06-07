import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:4000/auth/login'; 
  };

  return (
    <div className="login-container">
      <h1>Login with Spotify</h1>
      <button onClick={handleLogin}>Sign in with Spotify</button>
    </div>
  );
};

export default Login;
