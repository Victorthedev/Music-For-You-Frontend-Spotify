import { useState } from 'react';
import axios from 'axios';
import TrackSearch from './TrackSearch';

const NewPlaylist = () => {
    const [selectedTrackId, setSelectedTrackId] = useState('');
    const [message, setMessage] = useState('');

    const handleCreatePlaylist = async () => {
        const token = localStorage.getItem('spotify_access_token');
        const userIdResponse = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const userId = userIdResponse.data.id;

        const response = await axios.post(
            'http://localhost:4000/playlist/create',
            { seedTrackId: selectedTrackId },
            { params: { userId } }
        );

        setMessage(response.data.message);
    };

    return (
        <div>
            <TrackSearch onSelectTrack={setSelectedTrackId} />
            {selectedTrackId && (
                <div>
                    <button onClick={handleCreatePlaylist}>Create Playlist</button>
                </div>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default NewPlaylist;
