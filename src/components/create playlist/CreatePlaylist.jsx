import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Body from '../layout-components/Body'
import axios from 'axios'
import toast from 'react-hot-toast'
import imgDefault from '../../assets/images/default-playlist.png'

const CreatePlaylist = () => {
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loadingSongId, setLoadingSongId] = useState(null);
  const { playlistId } = useParams();
  const navigate = useNavigate();

  const fetchPlaylistDetails = () => {
    if (playlistId === 'liked-songs') {
      axios.get('http://localhost:4000/playlist/liked-songs', {
        withCredentials: true
      })
      .then(response => {
        setPlaylistDetails({
          name: 'Liked Songs',
          images: [{ url: imgDefault }],
          id: 'liked-songs'
        });
        setSongs(response.data.items || []);
      })
      .catch(error => {
        console.error('Error fetching liked songs:', error);
        toast.error('Failed to load liked songs');
      });
    }  else {
      axios.get(`http://localhost:4000/playlist/${playlistId}`, {
        withCredentials: true
      })
      .then(response => {
        setPlaylistDetails(response.data.playlist);
        setSongs(response.data.songs);
      })
      .catch(error => {
        console.error('Error fetching playlist songs:', error);
        toast.error('Failed to load playlist details');
      });
    }
  };

  useEffect(() => {
    fetchPlaylistDetails();
  }, [playlistId]);

  const handleSelectSong = (seedTrackId) => {
    setLoadingSongId(seedTrackId);
    axios.post('http://localhost:4000/playlist/create', 
      { seedTrackId },
      { withCredentials: true }
    )
    .then(response => {
      toast.success('Playlist created successfully!', {
        duration: 3000,
        position: 'bottom-left',
      });
      fetchPlaylistDetails(); 
      navigate('/home'); 
    })
    .catch(error => {
      console.error('Error creating playlist:', error);
      toast.error('Failed to create playlist. Please try again.', {
        duration: 3000,
        position: 'bottom-left',
      });
    })
    .finally(() => {
      setLoadingSongId(null);
    });
  };

  return (
    <>
    <Body>
        <div className='min-h-screen grid gap-4'>
            <div className='flex gap-4 h-fit'>
                <img 
                  src={playlistDetails?.images[0]?.url || imgDefault} 
                  className='md:h-[140px] md:w-[140px] h-[90px] w-[90px] rounded-2xl my-auto' 
                  alt={playlistDetails?.name}
                />
                <div className='grid my-auto h-fit gap-1'>
                    <h6 className='text-primary md:text-[32px] text-[24px] font-bold '>{playlistDetails?.name || 'Loading...'}</h6>
                    <div className='flex w-fit gap-1'>
                        <p className='text-grey text-[14px] font-semibold '>{playlistId === 'liked-songs' ? 'Liked Songs' : 'Playlist'} </p>
                        <div className='w-1 h-1 bg-[#8F8F8F] rounded-full m-auto'></div>
                        <p className='text-grey text-[14px] font-semibold '>{songs.length} songs </p>
                    </div>
                </div>
            </div>
            <div className='grid gap-8 h-fit'>
            {songs.map(song => (
            <Song 
              key={song.id || song.track.id}
              song={playlistId === 'liked-songs' ? song.track : song}
              onSelect={() => handleSelectSong(playlistId === 'liked-songs' ? song.track.id : song.id)}
              isLoading={loadingSongId === (playlistId === 'liked-songs' ? song.track.id : song.id)}
            />
          ))}
            </div>
        </div>
    </Body>
    </>
  )
}

const Song = ({ song, onSelect, isLoading }) => {
  return (
    <div 
      className='flex justify-between p-2 hover:bg-gray-100 rounded cursor-pointer'
      onClick={isLoading ? null : onSelect}
    >
        <div className='flex md:gap-4 gap-2 h-fit w-fit'>
            <img 
              src={song.album?.images[0]?.url} 
              className='h-auto w-[60px] rounded-2xl' 
              alt={song.name}
            />
            <div className='h-fit w-fit gap-1 m-auto'>
                <h6 className='text-primary text-[14px] font-semibold w-30'>{song.name}</h6>
                <p className='text-grey text-[14px] font-semibold w-30'>{song.artists[0]?.name}</p>
            </div>
        </div>
        <button 
          className='primary-button my-auto disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={(e) => {
            e.stopPropagation();
            if (!isLoading) onSelect();
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create playlist'}
        </button>
    </div>
  )
}

export default CreatePlaylist