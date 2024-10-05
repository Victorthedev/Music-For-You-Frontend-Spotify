import React from 'react'
import GlassBtn from '../layout-components/GlassBtn'
import LoginBtn from '../layout-components/LoginBtn'
import spotify from '../../assets/icons/loginspotify.svg';
import deezer from '../../assets/icons/logindeezer.svg';
import appple from '../../assets/icons/loginapplemusic.svg';

const Howitworks = () => {
  return (
    <div className='w-screen h-[960px] bg-[#0C0C0C] py-20 grid gap-20'>
        <h3 className='font-semibold text-5xl text-secondary mx-auto h-fit'>
          <span className='gradient-background'>How it </span>works
        </h3>
        <section className='h-fit w-fit mx-auto flex gap-10'>
            <div className='w-[550px] h-fit my-auto grid gap-20'>
                <div className='gap-[27px] grid'>
                    <h3 className='font-semibold text-6xl capitalize gradient-background'>connect your music platforms</h3>
                    <p className='text-[#D1D1D1] text-xl font-medium'>Start by linking your favorite music platforms like Spotify, Apple Music, or others. With just a few clicks, you can sync your accounts and access your entire music library across multiple services.</p>
                    <div className='flex justify-between'>
                        <GlassBtn>Back</GlassBtn>
                        <GlassBtn>Next</GlassBtn>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='rounded-3xl bg-white h-1 w-40'></div>
                    <div className='rounded-3xl bg-grey h-1 w-40'></div>
                    <div className='rounded-3xl bg-grey h-1 w-40'></div>
                </div>
            </div>
                <div className='bg-transparent w-fit h-fit rounded-[32px] p-6 border border-opacity-12'>
                    <div className='w-fit h-[600px] rounded-3xl p-20 bg-white bg-opacity-5 grid gap-10'>
                        <div className='w-[416px] grid gap-2 text-center'>
                            <h5 className='font-semibold text-[30px] capitalize text-primary' >connect your music accounts</h5>
                            <p className='text-[#D1D1D1] text-base font-medium' >Link Spotify, Apple Music, or other platforms to start creating playlists that match your vibe.</p>
                        </div>
                        <div className='w-[416px] grid gap-6 h-fit'>
                            <LoginBtn 
                                image={spotify} 
                            />
                            <LoginBtn 
                                image={deezer} 
                            />
                            <LoginBtn 
                                image={appple} 
                            />
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Howitworks