import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      axios
        .get(`http://localhost:4000/auth/callback?code=${code}`)
        .then((response) => {
          // Handle successful authentication
          navigate('/playlists');
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
