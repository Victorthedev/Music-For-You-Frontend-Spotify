import { useState } from 'react';
import axios from 'axios';

const TrackSearch = ({ onSelectTrack }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        const token = localStorage.getItem('spotify_access_token');
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchQuery,
                type: 'track',
                limit: 10
            }
        });
        setSearchResults(response.data.tracks.items);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a track"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map((track) => (
                    <li key={track.id}>
                        {track.name} by {track.artists[0].name}
                        <button onClick={() => onSelectTrack(track.id)}>Select</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackSearch;
