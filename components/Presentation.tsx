import React from 'react'

function Presentation() {
  return (
    <div className='w-full flex items-center relative justify-center h-screen overflow-hidden' id='presentation'>      
          <div className='relative z-30 p-5 flex flex-col justify-center items-center'>
            <h1 className='font-pinyon text-5xl lg:text-9xl text-pink drop-shadow-main'>Plantasia</h1>
            <h5 className='font-pinyon text-2xl lg:text-5xl text-pink drop-shadow-main'>Visual Artist - Creative Developer</h5>
            <p className='font-nunito text-sm uppercase text-pink lg:max-w-[40%] text-center mt-4'>Digital Artist trained as an software engineer with a passion for Computer Graphics, Glitch Art, Archive and Video.</p>
          </div>

        <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none filter blur-sm invert-[.85] contrast-200 hover:blur-0 hover:invert-0">
            <source src="/pres.mp4" type="video/mp4"/>Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Presentation