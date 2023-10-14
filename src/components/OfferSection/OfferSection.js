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
          <p>Explore new horizons and discover unforgettable experiences with our comprehensive travel guide, your passport to adventure.</p>
            
          </div>
          <div className='offer-card-design'>
          <FontAwesomeIcon icon={faTicket} className='fa_icons' />
          <h4>Ticket Booking</h4>
          <p>Book your tickets online for a seamless and convenient travel experience. Choose your destination, secure your seats with just a few clicks.</p>

          </div>
          <div className='offer-card-design'>
          <FontAwesomeIcon icon={faHotel} className='fa_icons' />
          <h4>Hotel Booking</h4>
          <p>"Book a luxurious stay at our hotel and experience unparalleled comfort and convenience. Enjoy top-notch amenities throughout your stay."</p>

          </div >

        </div>

         
    </div>
  )
}

export default OfferSection
