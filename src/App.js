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
        <Route path="/login" exact component={Login} />
        <Route path="/callback" component={Callback} />
        <Route path="/playlists" component={Playlists} />
        <Route path="/create-playlist" component={NewPlaylist} />
      </Routes>
    </Router>
  );
};

export default App;
