import React from 'react'

const GlassBtn = ({onClick, children}) => {
  return (
    <button 
        className='capitalize rounded-[32px] text-primary px-[18px] py-[10px] glass-btn w-fit'
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default GlassBtn