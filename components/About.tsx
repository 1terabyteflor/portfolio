import React from 'react'

function About() {
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 divide-y lg:divide-x h-screen border-none bg-black" id='about'>
      <video autoPlay loop muted className="z-10">
        <source src="/ascii.mp4" type="video/mp4"/>Your browser does not support the video tag.
      </video>
      <div className='flex flex-col justify-center items-center px-2 py-2 lg:px-40 bg-black border-none'>
        <h2 className="text-pink text-7xl font-pinyon">About Me</h2>
        <p className="text-white font-nunito text-xs text-justify">My name is Florencia. As a visual artist, I explore a variety of techniques and tools to create detail-oriented and abstract pieces, using software such as TouchDesigner, Blender, P5.js. Also, Photoshop, Premiere, and After Effects for post-production.
        <br></br>
        <br></br>
        Throughout my career, I&apos;ve had the opportunity to work with diverse clients from corporate to small groups. I apply an innovative eye with animation, digital media, 3D libraries, and art direction while using technologies such as React, Next.js, and React Native.
        <br></br>
        <br></br>
        Both disciplines are equally important for me, they coexist and merge to create challenging and collaborative projects that attract to a wide range of audiences.
        </p>
      </div>
    </div>
  )
}

export default About