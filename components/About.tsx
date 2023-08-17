import React from 'react'

function About() {
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 divide-y lg:divide-x h-screen border-none bg-black" id='about'>
      <video autoPlay loop muted className="z-10">
        <source src="/ascii.mp4" type="video/mp4"/>Your browser does not support the video tag.
      </video>
      <div className='flex flex-col justify-center items-center px-2 py-2 lg:px-40 bg-black border-none'>
        <h2 className="text-pink text-7xl font-filmotype-yale">About Me</h2>
        <p className="text-white font-mundial text-xs text-justify">Florencia Gomez (1998 - Argentina) 
        <br></br>
        Video Artist and Digital Creator working all over the world. She started her career as a software developer and is currently dedicated to working on collaborative audiovisual projects and live shows under her a.k.a Plantasia. Her interest in combining logic and intuition to create multidisciplinary pieces led her to work with multiple techniques such as installations, development, net.art,photography, analog/digital video, and animation.        
        </p>
      </div>
    </div>
  )
}

export default About