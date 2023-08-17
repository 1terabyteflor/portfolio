import React, { useEffect } from 'react'
import { preLoaderAnim } from '../styles/animations'

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  });

  return (
    <div className='preloader'>
      <div className='texts-container'>
        <span>Video </span>
        <span>Artist </span>
        <span>Multisensory </span>
        <span>Experience </span>
      </div>
    </div>
  )
}

export default Preloader;