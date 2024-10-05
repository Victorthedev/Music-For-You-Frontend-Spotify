import React from 'react'
import Navbar from '../layout-components/Navbar'
import Body from '../layout-components/Body'
import imgDefault from '../../assets/images/default-playlist.png'

const CreatePlaylist = () => {
  return (
    <>
    <Body>
        <div className='flex gap-4'>
            <img src={imgDefault} className='h-[126px] w-[126px] rounded-2xl' />
            <div className='grid my-auto h-fit gap-1'>
                <h6 className='text-primary text-[32px] font-bold '>Liked songs</h6>
                <div className='flex w-fit gap-1'>
                    <p className='text-grey text-[14px] font-semibold '>Playlist </p>
                    <div className='w-1 h-1 bg-[#8F8F8F] rounded-full m-auto'></div>
                    <p className='text-grey text-[14px] font-semibold '>443 songs </p>
                </div>
            </div>
        </div>
        <div className='grid gap-8 h-fit'>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
        </div>
        <CreatePopUp />
    </Body>
    </>
  )
}



const Song = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-4 h-fit w-fit'>
            <img src={imgDefault} className='h-[60px] w-[60px] rounded-2xl' />
            <div className='h-fit w-fit gap-1 m-auto'>
                <h6 className='text-primary text-base font-semibold w-30'>Song name</h6>
                <p className='text-grey text-[14px] font-semibold w-30'>Artist</p>
            </div>
        </div>
        <button className='primary-button my-auto'>Create playlist</button>
    </div>
  )
}


const CreatePopUp = () => {
  return (
    <div></div>
  )
}

export default CreatePlaylist