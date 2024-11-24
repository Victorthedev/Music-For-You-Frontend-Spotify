import { useEffect, useState } from 'react';
import axios from 'axios';
import imgDefault from '../../assets/images/default-playlist.png'
import Body from '../layout-components/Body';
import { useNavigate } from 'react-router-dom';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/playlist/', { 
      withCredentials: true 
    })
    .then(response => {
      // Set playlists to response.data.items instead of response.data
      setPlaylists(response.data.items || []);
    })
    .catch(error => {
      console.error('Error fetching playlists:', error);
      if (error.response?.status === 401) {
        navigate('/login');
      }
    });
  }, [navigate]);

  const handlePlaylistClick = (playlistId) => {
    navigate(`/createplaylist/${playlistId}`);
  };

  return (
    <Body>
      <div className='min-h-screen grid gap-6'>
        <section className='w-full text-center bg-[#1E1E1E] py-20 rounded-2xl'>
          <h2 className='text-primary md:text-4xl text-[28px] font-bold'>Google Adsense Ads</h2>
        </section>
        <section className='rounded-2xl w-full h-fit grid gap-8'>
          <h3 className='md:text-3xl text-[24px] font-bold text-primary'>Playlists</h3>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:gap-6 gap-9 h-fit'>
            {playlists.map(playlist => (
              <PlaylistCard 
                key={playlist.id}
                playlist={playlist}
                onClick={() => handlePlaylistClick(playlist.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </Body>
  );
};

const PlaylistCard = ({playlist, onClick}) => {
  return (
    <div className='grid gap-4 cursor-pointer' onClick={onClick}>
      <img 
        src={playlist.images?.[0]?.url || imgDefault} 
        alt="" 
        className='sm:w-[250px] h-auto rounded-3xl'
      />
      <section className='grid gap-1'>
        <h6 className='text-primary text-[14px] font-semibold w-30'>
          {playlist.name}
        </h6>
        <p className='text-grey text-[14px] font-semibold w-30'>
          by {playlist.owner?.display_name}
        </p>
      </section>
    </div>
  );
};

export default Playlists;