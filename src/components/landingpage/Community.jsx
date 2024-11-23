import React from 'react'
import LandingBtn from '../layout-components/LandingBtn'
import comm1 from '../../assets/images/comm1.png'
import comm2 from '../../assets/images/comm2.png'
import comm3 from '../../assets/images/comm3.png'
import comm4 from '../../assets/images/comm4.png'
import comm5 from '../../assets/images/comm5.png'
import comm6 from '../../assets/images/comm6.png'
import comm7 from '../../assets/images/comm7.png'
import comm8 from '../../assets/images/comm8.png'
import comm9 from '../../assets/images/comm9.png'
import comm10 from '../../assets/images/comm10.png'
import comm11 from '../../assets/images/comm11.png'
import comm12 from '../../assets/images/comm12.png'
import comm13 from '../../assets/images/comm13.png'
import comm14 from '../../assets/images/comm14.png'
import comm15 from '../../assets/images/comm15.png'
import comm16 from '../../assets/images/comm16.png'
import comm17 from '../../assets/images/comm17.png'


const Community = () => {
  return (
    <div  className='h-fit bg-[#0C0C0C] py-20 grid'>
      <div className="rounded-3xl border border-primary pt-20 pb-6 h-[701px] md:h-[701px] w-[92%] sm:w-[95%] md:w-fit mx-auto grid gap-20" style={{
        backgroundImage: 'linear-gradient(180deg, rgba(249, 249, 249, 0.04) 0%, rgba(255, 255, 255, 0) 100%)'
      }}>
        <div className='grid gap-6 text-center'>
          <h3 className='font-semibold text-5xl capitalize text-secondary'>
            <span className='gradient-background'>join our </span>community
          </h3>
          <p className='text-[#D1D1D1] text-base font-medium'>
            Supported by a network of early advocates, contributors, and champions
          </p>
          <LandingBtn>
            Join
          </LandingBtn>
        </div>
        <div className='overflow-x-hidden'>
          <div className='flex'>
            <img src={comm1} className='md:w-[120px] w-[86px] h-[86px] md:h-auto'/>
            <img src={comm2} className='md:w-[150px] w-[86px] h-[86px] md:h-auto'/>
            <img src={comm3} className='md:w-[150px] w-[86px] h-[86px] md:h-auto'/>
            <img src={comm4} className='md:w-[150px] w-[86px] h-[86px] md:h-auto'/>
            <img src={comm5} className='md:w-[150px] w-[86px] h-[86px] md:h-auto'/>
            <img src={comm6} className='md:w-[150px] w-[86px] h-[86px] md:h-auto'/>
            <img src={comm17} className='md:w-[150px] h-auto'/>
            <img src={comm7} className='md:w-[100px] h-auto'/>
          </div>
          <div className='flex'>
            <img src={comm8} className='w-[40px] h-auto'/>
            <img src={comm9} className='w-[150px] h-auto'/>
            <img src={comm10} className='w-[150px] h-auto'/>
            <img src={comm11} className='w-[150px] h-auto'/>
            <img src={comm12} className='w-[150px] h-auto'/>
            <img src={comm13} className='w-[150px] h-auto'/>
            <img src={comm14} className='w-[150px] h-auto'/>
            <img src={comm15} className='w-[150px] h-auto'/>
            <img src={comm16} className='w-[30px] h-auto'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community