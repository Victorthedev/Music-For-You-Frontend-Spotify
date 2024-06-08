import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Playlists from './components/Playlists';
import NewPlaylist from './components/NewPlaylist';
import Callback from './components/Callback';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/create-playlist" element={<NewPlaylist />} />
      </Routes>
    </Router>
  );
};

export default App;
