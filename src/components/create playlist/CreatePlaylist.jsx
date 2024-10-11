import React, { useState } from 'react'
import api from '../../api';
import Body from '../layout-components/Body'
import imgDefault from '../../assets/images/default-playlist.png'

const CreatePlaylist = () => {
  const [message, setMessage] = useState('');

  const handleCreatePlaylist = async (seedTrackId) => {
    try {
      const userIdResponse = await api.get('https://api.spotify.com/v1/me');
      const userId = userIdResponse.data.id;

      const response = await api.post('/playlist/create', { seedTrackId }, { params: { userId } });

      setMessage('Playlist created successfully!');
    } catch (error) {
      console.error('Error creating playlist:', error);
      setMessage('Error creating playlist. Please try again.');
    }
  };

  return (
    <>
      <Body>
        {/* Existing JSX */}
        <div className='grid gap-8 h-fit'>
          <Song onCreatePlaylist={handleCreatePlaylist} />
          <Song onCreatePlaylist={handleCreatePlaylist} />
          <Song onCreatePlaylist={handleCreatePlaylist} />
          <Song onCreatePlaylist={handleCreatePlaylist} />
          <Song onCreatePlaylist={handleCreatePlaylist} />
          <Song onCreatePlaylist={handleCreatePlaylist} />
        </div>
        {message && <p>{message}</p>}
        <CreatePopUp />
      </Body>
    </>
  )
}

const Song = ({ seedTrackId, name, artist, onCreatePlaylist }) => {
  const handleClick = () => {
    onCreatePlaylist(seedTrackId);
  };

  return (
    <div className='flex justify-between'>
      <div className='flex gap-4 h-fit w-fit'>
        <img src={imgDefault} className='h-[60px] w-[60px] rounded-2xl' />
        <div className='h-fit w-fit gap-1 m-auto'>
          <h6 className='text-primary text-base font-semibold w-30'>Song name</h6>
          <p className='text-grey text-[14px] font-semibold w-30'>Artist</p>
        </div>
      </div>
      <button className='primary-button my-auto' onClick={handleClick}>Create playlist</button>
    </div>
  )
}

const CreatePopUp = () => {
  return (
    <div></div>
  )
}

export default CreatePlaylist
