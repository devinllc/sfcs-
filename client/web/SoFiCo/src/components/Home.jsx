import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Featured from './Featured'
import Trust from './Trust'
import Threecard from './Threecard'
import GetStarted from './GetStarted'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Featured/>
        <Trust/>
        <Threecard/>
        <GetStarted/>
        <Footer/>
    </div>
  )
}

export default Home