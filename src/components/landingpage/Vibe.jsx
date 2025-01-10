import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingBtn from '../layout-components/LandingBtn';
import vibe1 from '../../assets/images/vibe1.png';
import vibe2 from '../../assets/images/vibe2.png';
import vibe3 from '../../assets/images/vibe3.png';
import vibe4 from '../../assets/images/vibe4.png';
import seamless from '../../assets/images/seamless.png';
import spotify from '../../assets/icons/landingspotify.svg';
import apple from '../../assets/icons/landingdeezer.svg';
import deezer from '../../assets/icons/landingapple.svg';
import { useNavigate } from 'react-router-dom';

const Vibe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="bg-[#0C0C0C] py-20 grid gap-20 relative">
        <div
          className="w-[92%] max-w-[1288px] text-center grid gap-[27px] mx-auto"
          data-aos="fade-up"
        >
          <h3 className="font-semibold md:text-5xl text-[40px] capitalize text-secondary">
            vibe-matching <span className="gradient-background">playlists</span>
          </h3>
          <p className="text-[#D1D1D1] md:text-xl text-base font-medium">
            Select any song, and our algorithm will analyze its mood, energy, and style to curate a playlist that flows seamlessly. Enjoy songs that match the vibe of your favorite tracks, with smooth transitions from start to finish.
          </p>
          <LandingBtn onClick={handleClick}>try now</LandingBtn>
        </div>

        <section
          className="grid grid-cols-2 gap-x-3 gap-y-4 md:gap-0 sm:flex md:justify-between w-[92%] mx-auto max-w-[1288px]"
          data-aos="fade-up"
        >
          <img
            src={vibe1}
            className="md:w-[23%] md:h-[auto] w-[191px] h-[233px] rounded-3xl"
          />
          <img
            src={vibe2}
            className="md:w-[23%] md:h-[auto] w-[191px] h-[233px] rounded-3xl"
          />
          <img
            src={vibe3}
            className="md:w-[23%] md:h-[auto] w-[191px] h-[233px] rounded-3xl"
          />
          <img
            src={vibe4}
            className="md:w-[23%] md:h-[auto] w-[191px] h-[233px] rounded-3xl"
          />
        </section>
      </div>

      <div
        className="bg-[#0C0C0C] w-[92%] max-w-[1288px] text-left py-10 mx-auto grid gap-5 md:hidden"
        data-aos="fade-up"
      >
        <h3 className="font-semibold text-[40px] capitalize text-secondary">
          <span className="gradient-background">seamless <br /></span>integration & sync
        </h3>
        <p className="text-[#D1D1D1] text-base font-medium">
          Once you’ve created your playlist, it’s automatically saved to your music library on your connected platform. No extra steps—just sync and start listening.
        </p>
        <div className="items-start">
          <LandingBtn onClick={handleClick}>try now</LandingBtn>
        </div>
      </div>

      <div
        className="h-[784px] px-6 pt-6 pb-16 flex flex-col justify-between overflow-x-hidden"
        style={{
          backgroundImage: `url(${seamless})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
        data-aos="fade-up"
      >
        <div 
          className="lg:w-[500px] w-[360px] text-left grid gap-5 ml-[53%] md:visible invisible"
          data-aos="fade-up"
        >
          <h3 className="font-semibold text-[40px] capitalize text-secondary">
            <span className="gradient-background">seamless <br /></span>integration & sync
          </h3>
          <p className="text-[#D1D1D1] text-base font-medium">
            Once you’ve created your playlist, it’s automatically saved to your music library on your connected platform. No extra steps—just sync and start listening.
          </p>
          <div className="items-start">
            <LandingBtn onClick={handleClick}>try now</LandingBtn>
          </div>
        </div>

        <div className="grid gap-4">
          <Players img={spotify} margin="ml-[58%]" />
          <Players img={apple} margin="ml-[74%] md:visible invisible" />
          <Players img={deezer} margin="ml-[53%] md:visible invisible" />
        </div>

        <div className="flex items-center justify-center absolute left-[63%] top-[63%] md:visible invisible">
          <div className="flex items-center justify-center w-[270px] h-[270px] rounded-full border border-white border-opacity-10">
            <div className="flex items-center justify-center w-[180px] h-[180px] rounded-full border border-white border-opacity-10">
              <div className="w-[100px] h-[100px] rounded-full border border-white border-opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Players = ({ img, margin }) => (
  <button
    className={`md:h-16 w-fit md:px-6 md:py-4 h-10 py-[10px] px-4 rounded-[32px] bg-white bg-opacity-10 border border-white border-opacity-16 flex items-center justify-center ${margin}`}
  >
    <img src={img} className="h-6 md:h-auto" />
  </button>
);

export default Vibe;
