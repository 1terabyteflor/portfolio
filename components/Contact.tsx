import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
    <div className='w-full flex flex-col relative justify-center h-screen overflow-hidden bg-black' id='contact'>
        <h1 className='font-pinyon text-5xl sm:text-9xl text-pink drop-shadow-main self-center'>Get in touch</h1>
        <div className='flex flex-col md:flex-row justify-between px-10 pt-8'>
          <div>
            <p className='font-pinyon text-3xl text-pink'>vía:</p>
            <h1 className='font-pinyon text-2xl sm:text-9xl text-pink'>E-Mail</h1>
            <Link className='font-pinyon text-xl sm:text-3xl text-pink hover:text-red underline' href='mailto:111plantasia111@gmail.com'>111plantasia111@gmail.com</Link>
          </div>
          <div className='pr-10 flex flex-col'>
            <p className='font-pinyon text-3xl text-pink'>or download:</p>
            <Link className='font-pinyon text-2xl sm:text-7xl text-pink hover:text-red underline' href='https://www.notion.so/Florencia-Gomez-82eed371b19347b0a08a0ecafafbb316'>CV</Link>
          </div>
        </div>
    </div>
  )
}

export default Contact