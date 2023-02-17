import Image from 'next/image'
import React from 'react'
import logo from '../public/plantasia-logo.svg'
import { Link } from "react-scroll/modules";


function Navbar() {
  return (
    <nav className='w-full top-0 z-10 bg-transparent backdrop-filter my-auto py-4 sticky flex justify-between px-4'>
      <Image
        src={logo}
        alt="Plantasia"
        width={150}
        height={90}
        />
        <div className='flex flex-col'>
          <Link to='/' className='text-xs text-pink cursor-pointer'>PROJECTS</Link>
          <Link to='/' className='text-xs text-pink cursor-pointer'>ABOUT</Link>
          <Link to='/' className='text-xs text-pink cursor-pointer'>CONTACT</Link>
        </div>
        <div className='flex flex-col'>
          <Link to='/' className='text-xs text-pink cursor-pointer'>INSTAGRAM</Link>
          <Link to='/' className='text-xs text-pink cursor-pointer'>TWITTER</Link>
          <Link to='/' className='text-xs text-pink cursor-pointer'>VIMEO</Link>
        </div>
    </nav>
  )
}

export default Navbar