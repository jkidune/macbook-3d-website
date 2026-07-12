import React from 'react'

import NavBar from './NavBar.jsx'
import HeroTitle from './herotitle.jsx'
import HeroDescription from './HeroDescription.jsx'



const Hero = () => {
  return (
    <section>
      <NavBar />
      <HeroTitle />
      <div>
        <img src="/laptop.png" alt="Mac MacBook Pro" />
      </div>
      <HeroDescription />
    </section>
  )
}

export default Hero