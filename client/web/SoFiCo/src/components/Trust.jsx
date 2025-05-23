import React from 'react'
import trustImg from "../assets/trust.svg"

function Trust() {
  return (
    <div className='h-[80vh] bg-[#10293E] flex p-10'>
        <div className="left_side w-1/2 flex justify-center items-center">
            <img src={trustImg} className='w-[80%] h-[70%]' />
        </div>
        <div className="right_side w-1/2 text-white">
          <p className='bg-[#1B3D5E] py-1 px-2 rounded-full font-semibold text-sm text-green-300 inline-block my-2'>
                ⚠️TRUST & SECURITY
            </p>
            <h1 className='font-extrabold text-4xl mt-4 mb-2 leading-15'>WE VALUE YOUR TRUST<br/>AND SECURITY</h1>
            <p className='text-lg mt-2 mb-5 font-semibold'>Our Mission Is To Make Finance More Accessible, Transparent, And Secure For Everyone. With Cutting.</p>
            <button className='text-white cursor-pointer hover:bg-[#61CA53] bg-green-400 py-2 px-4 rounded-full font-bold text-base'>GET STARTED</button>
        </div>
    </div>
  )
}

export default Trust