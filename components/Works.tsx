import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function Works({image, title, description, date, link} 
    : {image: string, title: string, description: string, date: string, link: string}) {

  return (
    <div className='w-full relative flex justify-start align-bottom h-screen overflow-hidden grayscale hover:grayscale-0 hover:contrast-100' id='projects'>
      <div className='flex flex-col z-30 justify-end align-bottom p-5 w-full'>
        <h1 className='font-pinyon text-6xl text-pink drop-shadow-main'>{title}</h1>
        <div className='font-nunito text-sm uppercase text-pink flex flex-col lg:flex-row justify-between'>
          <p className='lg:w-[50%]'>{description}</p>
          <p className='lg:ml-10'>{date}</p>
          <Link className='lg:ml-10 links' href={link} target='_blank'>/ go to project </Link>
        </div>
      </div>
      <video autoPlay loop muted playsInline className="absolute z-10 min-h-screen max-w-screen object-cover">
        <source src={image} type="video/mp4"/>Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default Works