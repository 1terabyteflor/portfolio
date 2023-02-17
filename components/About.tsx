import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 divide-y lg:divide-x h-screen">
      <div className="bg-[url('/7.png')] object-fill"></div>
      <div className='flex flex-col justify-center items-center px-2 py-2 lg:px-40'>
        <h2 className="text-[rgb(253,110,227)] text-7xl font-['PinyonScript-Regular']">About Me</h2>
        <p className="font-['NunitoSans-Regular']">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas non ornare enim, eget suscipit massa. Suspendisse commodo dapibus nunc, in commodo magna venenatis sit amet. Maecenas tincidunt nisi posuere arcu eleifend, in suscipit erat eleifend. Suspendisse nec interdum elit, at euismod nuncam.</p>
      </div>
    </div>
  )
}

export default About