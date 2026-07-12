import React, { useRef, useEffect } from 'react'


import NavBar from './NavBar.jsx'
import HeroDescription from './HeroDescription.jsx'



const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, [])
  return (
    <section id="hero">
      <NavBar />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-medium">
            Macbook Pro
            <img src="/title.png" alt="title" />
        </h1>
      </div>
      
      <video ref={videoRef} autoPlay muted loop playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <HeroDescription />
    </section>
  )
}

export default Hero