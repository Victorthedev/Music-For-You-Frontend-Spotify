import React from 'react'

const LoginBtn = ({onClick, image}) => {
  return (
    <button 
      className='py-4 px-10 flex gap-4 text-primary text-base font-semibold border-[1px] h-fit w-full bg-primary bg-opacity-5 border-opacity-5 border-primary rounded-lg justify-center items-center'
      onClick={onClick}
    >
      Continue with <img src={image} alt="" />
    </button>
  )
}

export default LoginBtn