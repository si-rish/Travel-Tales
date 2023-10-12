import React from 'react'
import "./HeroSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
    return (
        <div className='main-container'>
            <div className='container'>
                <h1 className='herosection-title fade-in-bottom'>Explore Travel Tales<br />Real Adventure & Travels</h1>
                {/* <button className='herossection-btn'>Explore Now <FontAwesomeIcon icon={faArrowRight} className='hero-arrow' /></button> */}
            </div>
        </div>
    )

}

export default HeroSection
