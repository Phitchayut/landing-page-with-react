import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className="max-w-[1240px] mx-auto px-6 md:py-40 py-32 flex justify-center">
            <div className="space-y-5 text-center">
                <h1>Join Our DeFi Community</h1>
                <input className='p-3 rounded-3xl mr-5' type="text" placeholder='Enter your email' />
                <button>Sign Up</button>
                <div className="flex">
                    <input className=' mr-2' type="checkbox" name="" id="" />
                    <p>Yes,I agree to receive email communications from DeFi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe