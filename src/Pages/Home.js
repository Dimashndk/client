import React from 'react'
import Welcome from '../Component/LandingPage/Welcome'
import ShortAbout from '../Component/LandingPage/ShortAbout'
import ShotProducts from '../Component/LandingPage/ShotProducts'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
        <h1> ini halaman home</h1>
        <Welcome />
        <br/> 
        <ShortAbout />
        <br/> 
        <ShotProducts />
        <br/>
        <Footer />
    </div>
  )
}

export default Home