import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className='w-full h-[100px] bg-pink flex items-end justify-between px-2 pb-2 font-bold'>
        <div className='text-[8px] font-mundial uppercase text-black'>
            Design by <Link className='hover:text-gray-200' href='https://ivannevares.vercel.app/'>Ivan Nevares</Link>

        </div>
        <div className='text-[8px] font-mundial uppercase text-black'> 2023 / this website is constantly evolving
        </div>
    </div>
  )
}

export default Footer