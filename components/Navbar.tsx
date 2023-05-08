import Image from 'next/image'
import React from 'react'
import logo from '../public/plantasia-logo.svg'
import { Link } from "react-scroll/modules";
import NextLink from 'next/link';


function Navbar() {
  return (
    <nav className='w-full top-0 z-10 bg-black backdrop-filter my-auto py-4 sticky flex justify-between px-4'>
      <Image
        src={logo}
        alt="Plantasia"
        width={150}
        height={90}
        />
        <div className='flex flex-col'>
          <Link 
            to='projects' 
            spy={true}
            smooth={true}
            className='links'
            offset={0}
            duration={500}>PROJECTS</Link>
          <Link
            to='about' 
            className='links'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >ABOUT</Link>
          <Link to='contact' 
            className='links'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>CONTACT</Link>
        </div>
        <div className='flex flex-col'>
          <NextLink href='http://instagram.com/plantasia111' target="_blank" className='links'>INSTAGRAM</NextLink>
          <NextLink href='http://vimeo.com/1terabyteflor' target="_blank" className='links'>VIMEO</NextLink>
          <NextLink href='http://github.com/1terabyteflor' target="_blank" className='links'>GITHUB</NextLink>
        </div>
    </nav>
  )
}

export default Navbar