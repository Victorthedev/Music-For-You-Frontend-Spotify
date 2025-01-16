import React from 'react';
import LoginBtn from '../components/layout-components/LoginBtn';
import shadow from '../assets/icons/mainvector.svg';
import spotify from '../assets/icons/loginspotify.svg';
import deezer from '../assets/icons/logindeezer.svg';
import appple from '../assets/icons/loginapplemusic.svg';
import signIn from '../assets/images/signin.png';
import Logo from '../components/layout-components/Logo';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSpotifyLogin = () => {

    window.location.href = 'http://localhost:3000/auth/spotify'; 
};

  return (
    <div className="h-screen bg-[#0C0C0C] lg:pr-6 pr-0 flex lg:flex-row flex-col-reverse max-w-[1440px] mx-auto gap-8 lg:gap-0 lg:pb-0 pb-12">

      <img src={shadow} className='object-cover w-full h-full fixed pointer-events-none' />
      
      <div className="lg:w-[45%] w-[92%] flex flex-col gap-12 lg:px-20 m-auto h-fit">
          <div className='lg:block hidden w-fit mx-auto'>
            <Logo />
          </div>
          <LoginBtn 
            image={spotify}
            onClick={handleSpotifyLogin} 
          />
      </div>
      
      <div className="flex-1 lg:h-[95%] h-[72%] rounded-2xl relative lg:w-full w-[92%] m-auto" style={{ backgroundImage: `url(${signIn})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-[65%] min-w-[300px] absolute bottom-0 left-0 p-4'>
          <h3 className='capitalize sm:text-6xl text-3xl font-semibold text-primary'>unlock your perfect</h3>
          <h3 className='capitalize sm:text-6xl text-3xl font-semibold text-secondary mb-2'>playlist</h3>
          <p className='text-[#D1D1D1] lg:text-base sm:text-[12px] font-medium'>Sign in to link your music accounts and discover playlists that match your vibe, song by song.</p>
        </div>
      </div>
    </div>
  );
};




export default Login;
