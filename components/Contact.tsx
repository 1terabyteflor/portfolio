import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
    <div className='w-full flex flex-col relative justify-center h-screen overflow-hidden bg-black' id='contact'>
        <h1 className='font-pinyon text-9xl text-pink drop-shadow-main self-center'>Let's get in touch</h1>
        <div className='flex justify-between px-10 pt-8'>
          <div>
            <p className='font-pinyon text-3xl text-pink'>vía:</p>
            <h1 className='font-pinyon text-9xl text-pink'>E-Mail</h1>
            <Link className='font-pinyon text-5xl text-pink hover:text-red underline' href='mailto:florencgmz@gmail.com'>florencgmz@gmail.com</Link>
          </div>
          <div className='pr-10 flex flex-col'>
            <p className='font-pinyon text-3xl text-pink'>or download:</p>
            <Link className='font-pinyon text-7xl text-pink hover:text-red underline' href='http://notion.so'>CV</Link>
            <Link className='font-pinyon text-7xl text-pink hover:text-red underline pt-8' href='http://notion.so'>Touchdesigner Patch</Link>
          </div>
        </div>
    </div>
  )
}

export default Contact