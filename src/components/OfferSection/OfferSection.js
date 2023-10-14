import React from 'react'
import "./OfferSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faRoute, faTicket, faHotel } from '@fortawesome/free-solid-svg-icons'


function OfferSection() {
  return (
    <div >
       
        <div className="offer-section">

          <div className='offer-card-design'>
          <FontAwesomeIcon icon={faRoute} className='fa_icons' />
          <h4>Travel Guide</h4>
          <p></p>
            
          </div>
          <div className='offer-card-design'>
          <FontAwesomeIcon icon={faTicket} className='fa_icons' />
          <h4>Ticket Booking</h4>

          </div>
          <div className='offer-card-design'>
          <FontAwesomeIcon icon={faHotel} className='fa_icons' />
          <h4>Hotel Booking</h4>

          </div >

        </div>

         
    </div>
  )
}

export default OfferSection
