import React from 'react'
import groovz from '../../assets/icons/Groovz.svg'
import X from '../../assets/icons/X.svg'
import Insta from '../../assets/icons/Instagram.svg'
import Linked from '../../assets/icons/Linked.svg'
import Logo from '../layout-components/Logo'

const Footer = () => {
  return (
    <div className='mx-auto '>
      <div className=' md:h-fit bg-[#0C0C0C] md:grid md:gap-y-10 pt-16 grid grid-col-1 gap-40 justify-between'>
        <div className='md:flex md:justify-between w-[92%] grid gap-6 mx-auto items-center'>
            <Logo />
            <p className='text-[#D1D1D1] text-[12px] font-[400]'>© 2024 Groovz. All rights reserved</p>
            <div className='flex w-fit h-fit gap-6'>
                <img src={Insta} className='cursor-pointer'/>
                <img src={Linked} className='cursor-pointer'/>
                <img src={X} className='cursor-pointer'/>
            </div>
        </div>
        <img src={groovz} alt="" className='mx-auto w-screen' />
      </div>
    </div>
  )
}

export default Footer