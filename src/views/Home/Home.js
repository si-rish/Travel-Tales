import React from 'react'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div>
        <h1 className='app-title'>Explore Travel Tales<br/>Real Adventure & Travels</h1>
        <button className='explore-btn'>Explore <FontAwesomeIcon icon={faArrowRight} className='arrow' /></button>

    </div>
  )
}

export default Home