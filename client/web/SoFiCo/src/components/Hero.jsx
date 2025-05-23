import React from 'react'
import heroImg from '../assets/hero.png'

function Hero() {
  return (
    <div className='min-h-[85vh]'>
        <div className='flex justify-around items-center'>
            <div className="left_side text-white">
                <p className=' my-2 bg-zinc-900 text-green-300 font-semibold inline-block px-3 rounded-full py-1'>
                    <span className='duration-300 animate-bounce'>🔥</span>100% TRUSTED PLATFORM
                </p>
                <h1 className='text-6xl font-extrabold'>FINANCE WITH</h1>
                <h1 className='text-6xl font-extrabold'>FRIENDS, INVEST</h1>
                <h1 className='text-6xl font-extrabold text-[#9AE600]'>WITH INTENSION</h1>
                
                <ul className='my-5 tracking-tight text-lg font-semibold'>
                    <li>No-Fee Checking Account With Cash Back Rewards </li>
                    <li>Enjoy Fee-Free Banking And Earn Cash Back On Your Everyday Purchases.</li>
                </ul>
                <button className='cursor-pointer hover:bg-green-500 bg-green-400 py-2 px-4 rounded-full font-bold text-lg'>GET STARTED</button>
            </div>
            <div className="right_side">
                <div className='h-110 w-90'>
                    <img src={heroImg} className='w-full h-full object-fit object-contain' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero