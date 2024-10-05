import React from 'react'
import shadow from '../../assets/icons/mainvector.svg'
import ellipse from '../../assets/icons/ellipse.svg'
import LandingBtn from '../layout-components/LandingBtn';
import vibe1 from '../../assets/images/vibe1.png'
import vibe2 from '../../assets/images/vibe2.png'
import vibe3 from '../../assets/images/vibe3.png'
import vibe4 from '../../assets/images/vibe4.png'
import seamless from '../../assets/images/seamless.png'
import spotify from '../../assets/icons/landingspotify.svg'
import apple from '../../assets/icons/landingdeezer.svg'
import deezer from '../../assets/icons/landingapple.svg'
import { useNavigate } from 'react-router-dom';

const Vibe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <>
    <div className='w-screen h-[960px] bg-[#0C0C0C] py-20 grid gap-20 relative'>

      {/* <img src={shadow} className=' object-cover w-full h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10' style={{ zIndex: 10 }} /> */}
      {/* <img src={ellipse} className=' object-cover w-full h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 opacity-20' style={{ zIndex: 10 }} /> */}
  
      <div className=' w-[740px] text-center grid gap-[27px] mx-auto'>
        <h3 className='font-semibold text-5xl capitalize text-secondary'>vibe-matching <span className='gradient-background'>playlists</span></h3>
        <p className='text-[#D1D1D1] text-xl font-medium'>Select any song, and our algorithm will analyze its mood, energy, and style to curate a playlist that flows seamlessly. Enjoy songs that match the vibe of your favorite tracks, with smooth transitions from start to finish.</p>
        <LandingBtn
          onClick={handleClick}
        >
          try now
        </LandingBtn>
      </div>
      <section className='flex justify-between w-[95%] mx-auto'>
        <img src={vibe1} className='w-[23%] h-{57%} rounded-3xl' />
        <img src={vibe2} className='w-[23%] h-{57%} rounded-3xl' />
        <img src={vibe3} className='w-[23%] h-{57%} rounded-3xl' />
        <img src={vibe4} className='w-[23%] h-{57%} rounded-3xl' />
      </section>
    </div>
    <div
      className="w-screen h-screen px-6 pt-6 pb-16 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${seamless})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className='w-[500px] text-left grid gap-5 ml-[53%] '>
        <h3 className='font-semibold text-5xl capitalize text-secondary'>
          <span className='gradient-background'>seamless <br /></span>integration & sync
        </h3>
        <p className='text-[#D1D1D1] text-xl font-medium'>
          Once you’ve created your playlist, it’s automatically saved to your music library on your connected platform. No extra steps—just sync and start listening.
        </p>
        <div className='items-start'>
          <LandingBtn
            onClick={handleClick}
          >
            try now
          </LandingBtn>
        </div>
      </div> 
      <div className='grid gap-4'>
        <Players 
          img={spotify}
          margin='ml-[58%]'
        />
        <Players 
          img={apple}
          margin='ml-[80%]' 
        />
        <Players 
          img={deezer}
          margin='ml-[53%]' 
        />
      </div>
      <div className="flex items-center justify-center absolute left-[63%] top-[53%]">
        <div className="flex items-center justify-center w-[270px] h-[270px] rounded-full border border-white border-opacity-10">
          <div className="flex items-center justify-center f w-[180px] h-[180px] rounded-full border border-white border-opacity-10 ">
          <div className="w-[100px] h-[100px] rounded-full border border-white border-opacity-10 "></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


const Players = ({img, margin}) => {
  return (
    <button className={`h-16 w-fit px-6 py-4 rounded-[32px] bg-white bg-opacity-10 border border-white border-opacity-16 flex items-center justify-center ${margin}`}>
      <img src={img} />
    </button>
  )
}

export default Vibe