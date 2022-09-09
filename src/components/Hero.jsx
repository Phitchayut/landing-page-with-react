import React from 'react'

import HeroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px] '>
        <video className='object-cover w-full h-full absolute  -z-10' src={HeroVid} autoPlay loop muted />
        <div className='w-full h-[90%] text-white flex flex-col items-center justify-center text-center'>
            <h1>Decentralized</h1>
            <h1><span className='blue'>Trading</span> Protocol</h1>
            <p className='text-xl py-5'>Guaranteed liquidity trading for millions of users and top Wthereum applications.</p>
            <div className='space-x-5 mt-3'>
                <button>Use Defi</button>
                <button className=''>FAQ</button>
            </div>
        </div>
        <div>
            <p className='text-white text-center'>Total Volume Secured: $42,104,783,662.47</p>
        </div>
    </div>
  )
}

export default Hero