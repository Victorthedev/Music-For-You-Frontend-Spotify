import React, { useState } from 'react';
import axios from 'axios';

const NewPlaylist = () => {
  const [seedTrackId, setSeedTrackId] = useState('');
  const [playlistId, setPlaylistId] = useState(null);

  const handleCreatePlaylist = () => {
    const accessToken = localStorage.getItem('spotify_access_token');
    if (!accessToken) {
      alert('You are not logged in.');
      window.location.href = '/';
      return;
    }

    axios.post('http://localhost:4000/playlist/create', { seedTrackId }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setPlaylistId(response.data.playlistId);
      alert('Playlist created successfully!');
    })
    .catch(error => {
      console.error('Error creating playlist:', error);
      alert('Error creating playlist. Please try again later.');
    });
  };

  return (
    <div className="new-playlist-container">
      <h1>Create a New Playlist</h1>
      <input 
        type="text" 
        value={seedTrackId} 
        onChange={e => setSeedTrackId(e.target.value)} 
        placeholder="Enter a seed track ID" 
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>
      {playlistId && <p>New playlist created with ID: {playlistId}</p>}
    </div>
  );
};

export default NewPlaylist;
