import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Featured from './Featured'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Featured/>
    </div>
  )
}

export default Home