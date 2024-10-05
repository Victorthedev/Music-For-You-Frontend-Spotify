import React from 'react'
import groovz from '../../assets/icons/Groovz.svg'
import X from '../../assets/icons/X.svg'
import Insta from '../../assets/icons/Instagram.svg'
import Linked from '../../assets/icons/Linked.svg'
import Logo from '../layout-components/Logo'

const Footer = () => {
  return (
    <div className='w-screen h-fit bg-[#0C0C0C] grid gap-10 pt-16'>
        <div className='flex justify-between w-[75%] mx-auto items-center'>
            <Logo />
            <p className='text-[#D1D1D1] text-[12px] font-[400]'>© 2024 Groovz. All rights reserved</p>
            <div className='flex w-fit h-fit gap-6'>
                <img src={Insta} className='cursor-pointer'/>
                <img src={Linked} className='cursor-pointer'/>
                <img src={X} className='cursor-pointer'/>
            </div>
        </div>
        <img src={groovz} alt="" />
    </div>
  )
}

export default Footer