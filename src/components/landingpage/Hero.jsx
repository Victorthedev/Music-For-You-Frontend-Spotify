import React from 'react'
import heroTop from '../../assets/images/herotop.png';
import shadow from '../../assets/icons/mainvector.svg';
import Logo from '../layout-components/Logo';
import GlassBtn from '../layout-components/GlassBtn';
import LandingBtn from '../layout-components/LandingBtn';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div
      className="h-screen px-6 pt-6 pb-16 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${heroTop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className='flex justify-between items-center h-fit w-[92%] max-w-[1288px] mx-auto'>
        <h5 className='text-primary text-xl font-medium'>Discover</h5>
        <Logo />  
        <GlassBtn
          onClick={handleClick}
        >
          sign in
        </GlassBtn>
      </div>
      {/* <img 
        src={shadow} 
        className='absolute object-cover w-fit h-screen pointer-events-none left-1/2 -translate-x-1/2' 
        style={{ top: 0 }}
      /> */}
      <img 
        src={shadow} 
        className='absolute object-cover w-fit h-screen pointer-events-none left-1/2 -translate-x-1/2' 
        style={{ top: 0 }}
      />
      {/* <div class="w-[2000px] fix h-[15023.81px] origin-top-left rotate-[-30deg] opacity-80 bg-black"></div> */}
      <section className='w-[340px] sm:w-[620px] lg:w-[770px] grid gap-2 text-center mx-auto items-center'>
        <h4 className='capitalize sm:text-7xl text-[40px] font-semibold text-secondary'>
          <span className='gradient-background'>seamless vibe matching for your </span>playlist!
        </h4>
        <p className='text-[#D1D1D1] text-base md:text-xl font-medium'>
          Connect with your favorite music platforms and discover playlists that flow effortlessly from your favorite tracks.
        </p>
        <LandingBtn
          onClick={handleClick}
        >
          try it out for free
        </LandingBtn>
      </section>
    </div>
  )
}

export default Hero