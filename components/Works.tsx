import Image from 'next/image';
import React, { useState } from 'react'

function Works({image, title, description, date} 
    : {image: string, title: string, description: string, date: string}) {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <div className='w-full relative flex justify-start align-bottom h-screen overflow-hidden filter grayscale contrast-150 hover:grayscale-0 hover:contrast-100' id='projects'>
      <div className='flex flex-col z-30 justify-end align-bottom p-5'>
        <h1 className='font-pinyon text-6xl text-pink drop-shadow-main'>{title}</h1>
        <div className='font-nunito text-sm uppercase text-pink flex'>
          <p className='lg:w-[50%]'>{description}</p>
          <p className='lg:ml-10'>{date}</p>
        </div>
      </div>
      <video autoPlay loop muted className="absolute z-10 min-h-screen max-w-screen object-cover">
        <source src={image} type="video/mp4"/>Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default Works