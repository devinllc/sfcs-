import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Featured from './Featured'
import Trust from './Trust'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Featured/>
        <Trust/>
    </div>
  )
}

export default Home