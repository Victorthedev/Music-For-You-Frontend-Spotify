import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlassBtn from '../layout-components/GlassBtn'
import LoginBtn from '../layout-components/LoginBtn'
import spotify from '../../assets/icons/loginspotify.svg';
import deezer from '../../assets/icons/logindeezer.svg';
import appple from '../../assets/icons/loginapplemusic.svg';
import imgDefault from '../../assets/images/default-playlist.png'


const Howitworks = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          offset: 100,
        });
      }, []);

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        <Howitworks1
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
        />,
        <Howitworks2
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
        />,
        <Howitworks3
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
        />,
    ];


  return (
    <div 
        className='bg-[#0C0C0C] py-20 grid gap-20 xl:w-[92%] max-w-[1288px] mx-auto'
    >
        <h3 
            className='font-semibold md:text-5xl text-[40px] text-secondary mx-auto h-fit'
            data-aos="fade-up"
        >
          <span className='gradient-background'>How it </span>works
        </h3>
        {steps[currentStep]}
        
        
        
    </div>
  )
}

const Howitworks1 = ({ currentStep, setCurrentStep }) => {

    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));

    };

  return (
        <section 
            className='h-fit mx-auto xl:flex xl:flex-row flex flex-col-reverse gap-10'
            data-aos="fade-up"
        >
            <div className='w-[92%] h-fit m-auto grid gap-20'
            data-aos="fade-up">
                <div className='gap-[27px] grid'>
                    <h3 className='font-semibold md:text-6xl text-[40px] capitalize gradient-background leading-tight'>connect your music platforms</h3>
                    <p className='text-[#D1D1D1] md:text-xl text-base font-medium'>Pick a song that defines the vibe you want. Whether it’s your current favorite or a track that sets the perfect mood, your chosen song will guide the creation of your playlist.</p>
                    <div className='flex justify-end'>
                    <GlassBtn onClick={handleNext}>Next</GlassBtn>
                        
                    </div>
                </div>
                <div className='w-full grid grid-cols-3 gap-2'>
                    <div className='rounded-3xl bg-white h-1'></div>
                    <div className='rounded-3xl bg-grey h-1'></div>
                    <div className='rounded-3xl bg-grey h-1'></div>
                </div>
            </div>
                <div className='bg-transparent w-[92%] h-fit rounded-[32px] md:p-6 p-4 border border-opacity-12 mx-auto'
                data-aos="fade-up">
                    <div className='w-full md:h-[600px] h-[400px] rounded-3xl sm:px-20 md:py-20 py-10 px-4 bg-white bg-opacity-5 grid'>
                        <div className="h-fit grid gap-10 my-auto">
                            <div className='w-full grid gap-2 text-center mx-auto'>
                                <h5 className='font-semibold text-[30px] capitalize text-primary' >connect your music accounts</h5>
                                <p className='text-[#D1D1D1] text-base font-medium' >Start by linking your favorite music platforms like Spotify, Apple Music, or others. </p>
                            </div>
                            <div className='w-full grid gap-6 h-fit mx-auto'>
                                <LoginBtn 
                                    image={spotify} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
  )
}

const Howitworks2 = ({ setCurrentStep }) => {
    const handleNext = () => {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
    };
    const handleBack = () => {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    return (
    <section 
        className='h-fit w-fit mx-auto xl:flex xl:flex-row flex flex-col-reverse gap-10'
        data-aos="fade-up"
    >
        <div className='w-[92%] h-fit m-auto grid gap-20'>
            <div className='gap-[27px] grid'>
                <h3 className='font-semibold md:text-6xl text-[40px] capitalize gradient-background py-[5px]'>choose a song</h3>
                <p className='text-[#D1D1D1] md:text-xl text-base font-medium'>With just a few clicks, you can sync your accounts and access your entire music library across multiple services.Link Spotify, Apple Music, or other platforms to start creating playlists that match your vibe.</p>
                <div className='flex justify-between'>
                    <GlassBtn onClick={handleBack}>Back</GlassBtn>
                    <GlassBtn onClick={handleNext}>Next</GlassBtn>
                </div>
            </div>
            <div className='w-full grid grid-cols-3 gap-2'>
                <div className='rounded-3xl bg-grey h-1'></div>
                <div className='rounded-3xl bg-white h-1'></div>
                <div className='rounded-3xl bg-grey h-1'></div>
            </div>
        </div>
            <div className='bg-transparent w-[92%] h-fit rounded-[32px] p-6 border border-opacity-12 mx-auto'>
                <div className='w-full md:h-[600px] h-[400px] rounded-3xl sm:px-20 md:py-20 py-10 px-4 bg-white bg-opacity-5 grid'>
                    <div className="h-fit grid gap-10 my-auto">
                        <div className='w-full grid gap-2 text-center mx-auto'>
                            <h5 className='font-light text-[30px] leading-none capitalize text-primary' >create a playlist</h5>
                            <p className='text-[#D1D1D1] text-base font-light' >You are about to create a playlist that matches the vibe of the selected song</p>
                        </div>
                        <div className='w-full grid gap-6 h-fit mx-auto'>
                            <div className='flex gap-4 h-fit w-fit'>
                                <img src={imgDefault} className='h-auto w-[120px] rounded-2xl' />
                                <div className='h-fit w-fit gap-1 m-auto'>
                                    <h6 className='text-primary text-2xl font-semibold w-30'>Song name</h6>
                                    <p className='text-grey text-base font-semibold w-30'>Artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
  }

const Howitworks3 = ({ setCurrentStep }) => {
    
    const handleBack = () => {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };
  return (
        <section 
            className='h-fit w-fit mx-auto xl:flex xl:flex-row flex flex-col-reverse gap-10'
            data-aos="fade-up"
        >
            <div className='w-[92%] h-fit m-auto grid gap-20'>
                <div className='gap-[27px] grid'>
                    <h3 className='font-semibold md:text-6xl text-[40px] capitalize gradient-background leading-tight'>get a curated playlist</h3>
                    <p className='text-[#D1D1D1] md:text-xl text-base font-medium'>Our intelligent algorithm instantly analyzes the chosen song's mood, energy, and style. Within moments, you'll have a playlist that transitions smoothly between tracks, ensuring a cohesive listening experience.</p>
                    <div className='flex justify-between'>
                        <GlassBtn onClick={handleBack}>Back</GlassBtn>
                    </div>
                </div>
                <div className='w-full grid grid-cols-3 gap-2'>
                    <div className='rounded-3xl bg-grey h-1'></div>
                    <div className='rounded-3xl bg-grey h-1'></div>
                    <div className='rounded-3xl bg-white h-1'></div>
                </div>
            </div>
                <div className='bg-transparent w-[92%] h-fit rounded-[32px] p-6 border border-opacity-12 mx-auto'>
                    <div className='w-full mx-auto md:h-[600px] h-[400px] rounded-3xl sm:px-20 md:py-20 py-10 px-4 bg-white bg-opacity-5 grid'>
                        <div className="h-fit grid gap-10 my-auto text-center">
                                  <img src={imgDefault} alt="" className='sm:w-[250px] w-[180px] h-auto m-auto rounded-3xl'/>
                                  <section className='grid gap-2'>
                                    <h6 className='text-primary text-base font-semibold w-30'>Groovs playlist</h6>
                                    <p className='text-grey text-[14px] font-semibold w-30'>Your playlist is ready</p>
                                  </section>
                        </div>
                    </div>
                </div>
        </section>
  )
}


export default Howitworks