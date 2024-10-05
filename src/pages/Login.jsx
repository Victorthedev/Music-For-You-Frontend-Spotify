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
    // Redirect to Spotify login page
    // window.location.href = 'http://localhost:4000/auth/login'; 

    // After successful Spotify login, navigate to '/playlists'
    // Simulating successful login for demonstration purposes
    // You may need to handle the actual authentication flow here
    setTimeout(() => {
        navigate('/home');
    }, 2000); // Navigate to '/playlists' after 2 seconds (adjust as needed)
};

  // const handleSpotifyLogin = () => {
  //   window.location.href = 'http://localhost:4000/auth/login'; 
  // };

  return (
    <div className="w-screen h-screen bg-[#0C0C0C] py-6 pr-6 flex">

      <img src={shadow} className='object-cover w-full h-full fixed pointer-events-none' />
      
      <div className="w-[45%] flex flex-col justify-between">
        <Logo />
        
        <section className="grid gap-10 h-fit">
          <h2 className="text-5xl font-semibold text-primary">Sign up</h2>
          <section className="grid gap-6 w-full">
            <LoginBtn 
              image={spotify}
              onClick={handleSpotifyLogin} 
            />
            <LoginBtn image={deezer} />
            <LoginBtn image={appple} />
          </section>
        </section>
        
        <p className="text-base font-semibold text-primary h-fit">
          Already using Groovz? <span className="text-secondary cursor-pointer">Sign in here</span>
        </p>
      </div>
      
      <div className="flex-1 h-full rounded-2xl relative" style={{ backgroundImage: `url(${signIn})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-[65%] absolute bottom-0 left-0 p-4'>
          <h3 className='capitalize text-6xl font-semibold text-primary'>unlock your perfect</h3>
          <h3 className='capitalize text-6xl font-semibold text-secondary mb-2'>playlist</h3>
          <p className='text-[#D1D1D1] text-base font-medium'>Sign in to link your music accounts and discover playlists that match your vibe, song by song.</p>
        </div>
      </div>
    </div>
  );
};




export default Login;
