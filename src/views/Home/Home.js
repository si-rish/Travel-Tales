import React from 'react'
import "./Home.css"

import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import TopNationCard from '../../components/TopNationCard/TopNationCard'
import Footer from "./../../components/Footer/Footer"


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopNationCard />
      <hr/>
      <p className='description'>Let us plan you a
        perfect India Holiday</p>
      <p className='caption'>Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in India.







      </p>
      <Footer/>

    </div>
    
    
  )
}

export default Home