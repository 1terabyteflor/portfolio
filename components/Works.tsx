import Link from 'next/link';
import React from 'react'

function Works({image, title, description, date, link} 
    : {image: string, title: string, description: string, date: string, link: string}) {

  return (
    <div className='w-full relative flex justify-start align-bottom h-screen overflow-hidden grayscale hover:grayscale-0 hover:contrast-100 hover:cursor-' id='projects'>
      <Link className='flex flex-col z-30 justify-end align-bottom p-5 w-full' href={link} target='_blank'>
        <h1 className='font-pinyon text-6xl text-pink drop-shadow-main'>{title}</h1>
        <div className='font-nunito text-sm uppercase text-pink flex flex-col lg:flex-row justify-between'>
          <p className='lg:w-[50%]'>{description}</p>
          <p className='lg:ml-10'>{date}</p>
        </div>
      </Link>
      <video autoPlay loop muted playsInline className="absolute z-10 min-h-screen max-w-screen object-cover">
        <source src={image} type="video/mp4"/>Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default Works