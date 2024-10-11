import { useEffect, useState } from 'react';
import api from '../../api';
import imgDefault from '../../assets/images/default-playlist.png'
import Body from '../layout-components/Body';
import { useNavigate } from 'react-router-dom';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylists = async () => {
      const accessToken = localStorage.getItem('spotify_access_token');
      if (!accessToken) {
        alert('You are not logged in.');
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/playlist', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setPlaylists(response.data.items);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        alert('Error fetching playlists. Please try again later.');
      }
    };

    fetchPlaylists();
  }, [navigate]);

  const handleSelectSong = () => {
    navigate('/createplaylist');
  };

  return (
    <>
      <Body>
        <section className='w-full text-center bg-[#1E1E1E] py-20 rounded-2xl'>
          <h2 className='text-primary text-4xl font-bold'>Google Adsense Ads</h2>
        </section>
        <section className='rounded-2xl w-full h-fit grid gap-8'>
          <h3 className='text-3xl font-bold text-primary'>Playlists</h3>
          <div className='grid grid-cols-5 gap-6 h-fit'>
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                name={playlist.name}
                owner={playlist.owner.display_name}
                image={playlist.images[0]?.url || imgDefault}
                onClick={handleSelectSong}
              />
            ))}
          </div>
        </section>
      </Body>
    </>
  );
};

const PlaylistCard = ({ name, owner, image, onClick }) => {
  return (
    <div className='grid gap-4 cursor-pointer' onClick={onClick}>
      <img src={image} alt="" className='w-[238.4px] h-[200px] rounded-3xl'/>
      <section className='grid gap-1'>
        <h6 className='text-primary text-base font-semibold w-30'>{name}</h6>
        <p className='text-grey text-[14px] font-semibold w-30'>by {owner}</p>
      </section>
    </div>
  )
}

export default Playlists;
