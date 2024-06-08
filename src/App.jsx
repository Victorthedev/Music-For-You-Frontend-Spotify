import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Playlists from './components/Playlists';
import NewPlaylist from './components/NewPlaylist';
import Callback from './components/Callback';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path = '/' element = {<Login />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/callback' element = {<Callback />} />
            <Route path = '/playlists' element = {<Playlists/>} />
            <Route path = '/create-playlists' element = {<NewPlaylist/>} />
          </Routes>
      </div>
    </BrowserRouter>

  )
}


export default App
