import React from 'react'

const LandingBtn = ({children, onClick}) => {
  return (
    <button 
        className='landing-button capitalize min-w-[147px]'
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default LandingBtn