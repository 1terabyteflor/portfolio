import React from 'react'


function Splash() {
  return (
    <div className='w-full flex flex-col'>
      <div className="flex flex-col flex-start flex-wrap justify-center w-[100%] h-screen bg-[url('/1.png')] px-5">
          <h1 className="hero-title">Plantasia</h1>
          <hr className='border-1 border-[rgb(253,110,227)]'/>
          <h3 className="font-['NunitoSans-Regular'] italic text-[rgb(253,110,227)] mt-2 flex justify-end text-2xl tracking-[.5em]">VISUAL ARTIST</h3>
      </div>
    </div>
)
}

export default Splash