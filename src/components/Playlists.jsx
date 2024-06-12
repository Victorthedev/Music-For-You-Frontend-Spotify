import { useEffect, useState } from 'react';
import axios from 'axios';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('spotify_access_token');
    if (!accessToken) {
      alert('You are not logged in.');
      window.location.href = 'http://localhost:4000/auth/login';
      return;
    }

    axios.get('http://localhost:4000/playlist/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      console.log('API response:', response.data); // Debugging line
      setPlaylists(response.data);
    })
    .catch(error => {
      console.error('Error fetching playlists:', error);
      alert('Error fetching playlists. Please try again later.');
    });
  }, []);

  return (
    <div className="playlists-container">
      <h1>My Playlists</h1>
      <div id="playlist-container">
        {playlists.length > 0 ? (
          playlists.map(playlist => (
            <div key={playlist.id} className="playlist">
              <img 
                src={playlist.images.length > 0 ? playlist.images[0].url : 'https://via.placeholder.com/150'} 
                alt={playlist.name} 
                style={{ width: '150px', height: '150px' }}
              />
              <h2>{playlist.name}</h2>
              <p>Owner: {playlist.owner.display_name}</p>
              {playlist.description && <p>{playlist.description}</p>}
              <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">Open in Spotify</a>
            </div>
          ))
        ) : (
          <p>No playlists found.</p>
        )}
      </div>
    </div>
  );
};

export default Playlists;
