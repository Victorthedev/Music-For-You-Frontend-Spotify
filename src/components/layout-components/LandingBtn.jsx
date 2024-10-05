import React from 'react'

const LandingBtn = ({children, onClick}) => {
  return (
    <button 
        className='landing-button capitalize'
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default LandingBtn