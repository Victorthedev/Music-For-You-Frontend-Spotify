import React from 'react'
import Hero from '../components/landingpage/Hero'
import Vibe from '../components/landingpage/Vibe'
import Howitworks from '../components/landingpage/Howitworks'
import Community from '../components/landingpage/Community'
import Footer from '../components/layout-components/Footer'

const LandingPage = () => {
  return (
    <>
        <Hero />
        <Vibe />
        <Howitworks />
        <Community />
        <Footer />
    </>
  )
}

export default LandingPage