import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import './App.css';
import Callback from './components/Callback'; // Update import statement
import Home from './pages/Home';
import NewPlaylist from './pages/NewPlaylist';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/createplaylist' element={<NewPlaylist />} />
          <Route path='/callback' element={<Callback />} /> {/* Uncommented Callback route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;