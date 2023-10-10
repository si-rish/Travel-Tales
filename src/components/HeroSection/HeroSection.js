import React from 'react'
import "./HeroSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
    return (
        <div className='main-container'>
            <div className='container'>
                <h1 className='app-title'>Explore Travel Tales<br />Real Adventure & Travels</h1>
                <button className='explore-btn'>Explore Now <FontAwesomeIcon icon={faArrowRight} className='arrow' /></button>
            </div>
        </div>
    )

}

export default HeroSection
