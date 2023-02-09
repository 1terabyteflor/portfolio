import Image from 'next/image'
import React from 'react'
import logo from '../public/plantasia-logo.svg'
import { Link } from "react-scroll/modules";


function Navbar() {
  return (
    <nav className='w-full top-0 z-10 bg-transparent backdrop-filter bg-opacity-20 my-auto py-4 sticky flex justify-between px-4'>
      <Image
        src={logo}
        alt="Plantasia"
        width={150}
        height={90}
        />
        <div className='flex flex-col'>
          <Link to='/' className='text-xs text-[rgb(253,110,227)] cursor-pointer'>PROJECTS</Link>
          <Link to='/' className='text-xs text-[rgb(253,110,227)] cursor-pointer'>ABOUT</Link>
          <Link to='/' className='text-xs text-[rgb(253,110,227)] cursor-pointer'>CONTACT</Link>
        </div>
        <div className='flex flex-col'>
          <Link to='/' className='text-xs text-[rgb(253,110,227)] cursor-pointer'>INSTAGRAM</Link>
          <Link to='/' className='text-xs text-[rgb(253,110,227)] cursor-pointer'>TWITTER</Link>
          <Link to='/' className='text-xs text-[rgb(253,110,227)] cursor-pointer'>VIMEO</Link>
        </div>
    </nav>
  )
}

export default Navbar