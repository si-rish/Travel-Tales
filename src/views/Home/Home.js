import React from 'react'
import "./Home.css"

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import TopNationCard from '../../components/TopNationCard/TopNationCard'


function Home() {
  return (
    <div>
      <Navbar />
      <div className="header-main-img">
        <HeroSection />
      </div>
        <TopNationCard />
      <hr />
      <div>
      <p className='description'>Let us plan you a
        perfect India Holiday</p>
      <p className='caption'>Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in India.</p>
      </div>
     
      <Footer />

    </div>


  )
}

export default Home