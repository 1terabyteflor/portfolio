import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 divide-y lg:divide-x h-screen border-none bg-black" id='about'>
      <video autoPlay loop muted className="z-10">
        <source src="/ascii.mp4" type="video/mp4"/>Your browser does not support the video tag.
      </video>
      <div className='flex flex-col justify-center items-center px-2 py-2 lg:px-40 bg-black border-none'>
        <h2 className="text-pink text-7xl font-pinyon">About Me</h2>
        <p className="text-white font-nunito uppercase text-xs">Florencia Gomez is a visual artist and developer interested in the rarities of code and software to create oniric, synthetic and unknown atmospheres.
        <br></br>Her exploration is based on footage from movies, processed by programs and algorithms, including the error and the creativity of her own computer. Actually, her best friend is Touchdesigner.<br></br>Cinema, video-art and narrative audiovisual world is a source of creation and inspiration for her project as Plantasia, thus collaborating with different sound artists, musicians and labels as a VJ and visual producer.</p>
      </div>
    </div>
  )
}

export default About