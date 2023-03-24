import React from 'react'
import AnimatedTextTitle from '../components/AnimatedTextTitle'


function Splash() {
  return (
    <div className='w-full flex items-center relative justify-center h-screen overflow-hidden'>
      <div className='relative z-30 p-5'>
        <AnimatedTextTitle text="Plantasia"/>
      </div>
      <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="/26.mp4" type="video/mp4"/>Your browser does not support the video tag.
      </video>

    </div>
)
}

export default Splash