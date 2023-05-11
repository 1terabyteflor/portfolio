import React from 'react'

function Presentation() {
  return (
    <div className='w-full flex items-center relative justify-center h-screen overflow-hidden bg-black' id='presentation'>      
          <div className='relative z-30 p-5 flex flex-col justify-center items-center'>
            <h1 className='font-pinyon text-5xl lg:text-9xl text-pink drop-shadow-main'>Plantasia</h1>
            <h5 className='font-pinyon text-2xl lg:text-5xl text-pink drop-shadow-main'>Developer - Visual artist</h5>
            <p className='font-nunito text-sm uppercase text-pink lg:max-w-[40%] text-center mt-4'>Multidisciplinary artist with a background in software development and a strong passion for digital and media projects.</p>
          </div>

        <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none filter blur-sm contrast-200 hover:blur-0">
            <source src="/pres.mp4" type="video/mp4"/>Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Presentation