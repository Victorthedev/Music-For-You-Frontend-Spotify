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
      axios.get('http://localhost:3000/library/liked-songs', {
        withCredentials: true
      })
      .then(response => {
        setPlaylistDetails({
          name: 'Liked Songs',
          images: [{ url: imgDefault }],
          id: 'liked-songs'
        });
        setSongs(response.data || []); 
      })
      .catch(error => {
        console.error('Error fetching liked songs:', error);
        toast.error('Failed to load liked songs');
        if (error.response?.status === 401) {
          navigate('/login');
        }
      });
    } else {
      axios.get(`http://localhost:3000/library/${playlistId}`, {
        withCredentials: true
      })
      .then(response => {
        const tracks = response.data || []; 
        setPlaylistDetails({
          name: tracks[0]?.track?.album?.name || 'Playlist',
          images: [{ url: tracks[0]?.track?.album?.images[0]?.url || imgDefault }],
          id: playlistId
        });
        setSongs(tracks);
      })
      .catch(error => {
        console.error('Error fetching playlist songs:', error);
        toast.error('Failed to load playlist details');
        if (error.response?.status === 401) {
          navigate('/login');
        }
      });
    }
  };

  useEffect(() => {
    fetchPlaylistDetails();
  }, [playlistId]);

  const handleSelectSong = (song) => {
    const songId = playlistId === 'liked-songs' ? song.track?.id : song.id;
    setLoadingSongId(songId);
    
    // Prepare the song data as expected by the backend
    const songData = {
      id: songId,
      name: playlistId === 'liked-songs' ? song.track?.name : song.name,
      artists: playlistId === 'liked-songs' ? song.track?.artists : song.artists
    };
  
    axios.post('http://localhost:3000/playlist/create', 
      { songData },
      { withCredentials: true }
    )
    .then(response => {
      toast.success('Playlist created successfully!', {
        duration: 3000,
        position: 'bottom-left',
      });
      navigate('/home');
    })
    .catch(error => {
      console.error('Error creating playlist:', error);
      toast.error('Failed to create playlist. Please try again.', {
        duration: 3000,
        position: 'bottom-left',
      });
      if (error.response?.status === 401) {
        navigate('/login');
      }
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
                key={playlistId === 'liked-songs' ? song.track?.id : song.id}
                song={playlistId === 'liked-songs' ? song.track : song.track}
                onSelect={() => handleSelectSong(song)}
                isLoading={loadingSongId === (playlistId === 'liked-songs' ? song.track?.id : song.id)}
              />
            ))}
            </div>
        </div>
    </Body>
    </>
  )
}

const Song = ({ song, onSelect, isLoading }) => {
  if (!song) return null;  // Add safety check
  
  return (
    <div 
      className='flex justify-between p-2 hover:bg-gray-100 rounded cursor-pointer'
      onClick={isLoading ? null : onSelect}
    >
        <div className='flex md:gap-4 gap-2 h-fit w-fit'>
            <img 
              src={song?.album?.images?.[0]?.url || imgDefault} 
              className='h-auto w-[60px] rounded-2xl' 
              alt={song?.name || 'Song'}
            />
            <div className='h-fit w-fit gap-1 m-auto'>
                <h6 className='text-primary text-[14px] font-semibold w-30'>{song?.name || 'Untitled'}</h6>
                <p className='text-grey text-[14px] font-semibold w-30'>{song?.artists?.[0]?.name || 'Unknown Artist'}</p>
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