import { useEffect, useState } from 'react';
import axios from 'axios';
import imgDefault from '../../assets/images/default-playlist.png'
import Body from '../layout-components/Body';
import { useNavigate } from 'react-router-dom';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://groovz-backend-js.onrender.com/playlist/', {
      withCredentials: true
    })
    .then(response => {
      // Handle the new response structure
      const playlistsData = response.data.playlists?.items || [];
      const likedSongsData = response.data.likedSongs;

      // Create a "Liked Songs" playlist object
      const likedSongsPlaylist = {
        id: 'liked-songs',
        name: 'Liked Songs',
        images: [{ url: imgDefault }], // You can use a specific image for liked songs
        owner: { display_name: 'You' },
        tracks: likedSongsData
      };

      // Combine liked songs with other playlists
      setPlaylists([likedSongsPlaylist, ...playlistsData]);
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

        {/* <section className='w-full h-[] text-center bg-[#1E1E1E] py-20 rounded-2xl'>
          <h2 className='text-primary md:text-4xl text-[28px] font-bold'>Google Adsense Ads</h2>
        </section> */}

        <section className='rounded-2xl w-full h-fit grid gap-8'>

          <div className='w-[100%] border-b border-[#55667a] flex gap-2 h-fit'>

            <div className="h-[36px] sm:w-fit cursor-pointer w-full px-4 py-2 border-b-2 border-[#a962f3]">
              <h4 className="text-center text-[#a962f3] text-base font-medium">Groovz</h4>
            </div>
  
            <div className="h-9 px-4 sm:w-fit cursor-pointer w-full py-2 rounded-lg justify-center items-center gap-3 inline-flex">
              <div className="text-center text-[#55667a] text-base font-normal">Spotify</div>
            </div>
          
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 h-fit'>
          
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
    <div className='grid gap-4 cursor-pointer fix w-full max-w-[200px] onClick={onClick}'>
      <img 
        src={playlist.images?.[0]?.url || imgDefault}
        alt=""
        className='w-full h-[154px] rounded-3xl fix'
      />
      <section className='grid gap-1 fix'>
        <h6 className='text-primary text-[14px] font-semibold truncate w-full'
          style={{ maxWidth: '200px' }}
        >
          {playlist.name}
        </h6>
        <p
          className="text-grey text-[14px] font-semibold truncate w-full"
          style={{ maxWidth: '200px' }}
        >
          by {playlist.owner?.display_name}
        </p>
      </section>
    </div>
  );
};

export default Playlists;