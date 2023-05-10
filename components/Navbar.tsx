import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/plantasia-logo.svg'
import { Link } from "react-scroll/modules";


function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-black sticky top-0 left-0 right-0 z-10">
    <div className="justify-between mx-auto md:items-center md:flex">
      <div>
        <div className="flex items-center justify-between py-3 md:py-5 pl-5 md:block">
              <Image
                src={logo}
                alt="Plantasia"
                width={150}
                height={90}
              />
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image src="/close.png" width={15} height={15} alt="logo" className='invert'/>
              ) : (
                <Image
                  src="/menu.png"
                  width={15}
                  height={15}
                  alt="logo"
                  className="focus:border-none active:border-none invert"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'p-12 md:p-0 block' : 'hidden'
          }`}
        >
          <ul className="h-screen md:h-auto flex flex-col items-center md:flex-row">
            <li>
             <Link 
            to='projects' 
            spy={true}
            smooth={true}
            className='links'
            offset={0}
            onClick={() => setNavbar(!navbar)}
            duration={500}>PROJECTS</Link>
            </li>
            <li>
              <Link
                to='about' 
                className='links'
                spy={true}
                smooth={true}
                offset={0}
                onClick={() => setNavbar(!navbar)}
                duration={500}
              >ABOUT</Link>
            </li>
            <li>
             <Link to='contact' 
              className='links'
              spy={true}
              smooth={true}
              offset={0}
              onClick={() => setNavbar(!navbar)}
              duration={500}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar