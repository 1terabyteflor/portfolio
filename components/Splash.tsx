import React from 'react'
import AnimatedTextTitle from '../components/AnimatedTextTitle'


function Splash() {
  return (
    <div className='w-full flex flex-col'>
      <div className="flex flex-col flex-start flex-wrap justify-center w-[100%] h-screen bg-[url('/1.png')] px-5">
        <AnimatedTextTitle text="Plantasia"/>
          <hr className='border-1 border-pink'/>
          <h3 className="font-nunito italic text-pink mt-2 flex justify-end text-2xl tracking-[.5em]">VISUAL ARTIST</h3>
      </div>
    </div>
)
}

export default Splash