import React from 'react'
import spotifynav from '../../assets/icons/spotifynav.svg' 
import Logo from './Logo'

const Navbar = () => {
  return (
    <header>
        <nav className='bg-[#0C0C0C] px-[8%] py-4 flex justify-between items-center mx-auto'>
            <Logo/>
            <img src={spotifynav} />
        </nav>
    </header>
  )
}

export default Navbar