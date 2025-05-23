import React from 'react'
import aboutImg from '../assets/about.svg'

function About() {
  return (
    <div className='bg-white min-h-screen flex justify-around p-10'>
        <div className="left_side">
            <p className='bg-[#F3F4F6] py-1 px-3 inline-block rounded-full text-sm font-semibold my-2'>🔥ABOUT</p>
            <h1 className='font-extrabold text-4xl pb-2'>Empowering Communities.</h1>
            <h1 className='font-extrabold text-4xl mb-4'>Simplifying Finance.</h1>
            
            <ul className='list-disc pl-5 pt-2 pb-5 text-medium'>
                <li className='leading-8 font-semibold text-zinc-500'>One-stop platform for users, agents, and admins.</li>
                <li className='leading-8 font-semibold text-zinc-500'>Seamless onboarding and real-time notifications.</li>
                <li className='leading-8 font-semibold text-zinc-500'>Earn up to 3% cashback on purchases.</li>
                <li className='leading-8 font-semibold text-zinc-500'>Secure dashboards with instant approvals.</li>
                <li className='leading-8 font-semibold text-zinc-500'>Scalable microservices architecture.</li>
            </ul>
            <button className='text-white cursor-pointer hover:bg-[#61CA53] bg-green-400 py-2 px-4 rounded-full font-bold text-lg'>GET STARTED</button>
        </div>
        <div className="right_side">
            <div className='h-120 w-150'>
                <img src={aboutImg} className='w-full h-full object-fit object-contain transform scale-x-[-1]' />
            </div>
        </div>
    </div>
  )
}

export default About