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

    window.location.href = 'https://amvoefu9mk.execute-api.us-east-1.amazonaws.com/prod/auth/login'; 
};

  // const handleSpotifyLogin = () => {
  //   window.location.href = 'http://localhost:4000/auth/login'; 
  // };

  return (
    <div className="h-screen bg-[#0C0C0C] py-6 lg:pr-6 pr-0 flex lg:flex-row flex-col-reverse">

      <img src={shadow} className='object-cover w-full h-full fixed pointer-events-none' />
      
      <div className="lg:w-[45%] w-[92%] flex flex-col justify-between lg:px-20 mx-auto">
        <div className='lg:visible invisible'>
          <Logo />
        </div>
        
        <section className="grid gap-10 h-fit">

          {/* <h2 className="text-5xl font-semibold text-primary">Sign up</h2> */}

          <section className="grid gap-6 w-full">
            <LoginBtn 
              image={spotify}
              onClick={handleSpotifyLogin} 
            />
            
            {/* <LoginBtn image={deezer} />
            <LoginBtn image={appple} /> */}

          </section>
        </section>
        
        <p className="text-base font-semibold text-primary h-fit lg:block hidden">
          Already using Groovz? <span className="text-secondary cursor-pointer">Sign in here</span>
        </p>
      </div>
      
      <div className="flex-1 h-full rounded-2xl relative lg:w-full w-[92%] min-w-[350px] mx-auto" style={{ backgroundImage: `url(${signIn})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
