import React from 'react'
import logo from '../../assets/icons/groove.svg';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/home');
  };


  return (
    <div className="flex items-center gap-2 h-fit cursor-pointer"
      onClick={handleBackToHome}
    >
        <img src={logo} alt="Logo" className='mx-auto'/>
        <h4 className="text-2xl font-semibold text-primary w-full mx-auto">Groovz</h4>
    </div>
  )
}

export default Logo