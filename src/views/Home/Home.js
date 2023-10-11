import React from 'react'
import "./Home.css"

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import TopNationCard from '../../components/TopNationCard/TopNationCard'
import OfferSection from '../../components/OfferSection/OfferSection'
import GridComponent from '../../components/GridComponent/GridComponent'



function Home() {
  return (
    <div>
      <Navbar />
      <div className="header-main-img">
        <HeroSection />
      </div>
        <p className='app-desc'>Uncover hidden gems, savor regional delicacies, and immerse yourself in the warmth and hospitality of the local communities.</p>
        <hr className='hr-line1'/>
        <TopNationCard />
      <hr className='hr-line2'/>
      <div>
      <p className='description'>Let us plan you a
        perfect India Holiday</p>
      <p className='caption'>Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in India.</p>
      </div>

      <GridComponent/>
      <OfferSection/>
     
     
      <Footer />


    </div>


  )
}

export default Home