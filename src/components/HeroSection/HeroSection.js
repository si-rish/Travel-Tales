import React from 'react'
import "./HeroSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
    return (
        <div className='hero-main-container'>
            <div className='hero-container'>
                <h1 className='hero_section-title fade-in-bottom'>
                <br/> <br/>Explore Travel Tales<br />Real Adventure & Travels</h1> <br/>
                <button className='herossection-btn'>Explore Now <FontAwesomeIcon icon={faArrowRight} className='hero-arrow' /></button>
            </div>
        </div>
    )

}

export default HeroSection
