import React from 'react'
import AnimatedTextTitle from '../components/AnimatedTextTitle'


function Splash() {
  return (
    <div className='w-full flex relative justify-center h-screen overflow-hidden'>
      <div className='relative z-30 p-5'>
        <AnimatedTextTitle text="Plantasia"/>
        <h5 className='font-pinyon text-2xl lg:text-4xl text-center text-pink drop-shadow-main'>Digital Artist</h5>
      </div>
      <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-black">
        <source src="/26.mp4" type="video/mp4"/>Your browser does not support the video tag.
      </video>

    </div>
)
}

export default Splash