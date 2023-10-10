import React from 'react'
import "./TopNationCard.css"

function TopNationCard() {
    return (

        <div className='main-container'>
            <div className='td-cards'>

                <div className='card1 comp-card'>
                    <h2 className='card-heading'>Pilgrimage</h2>
                    <img className='card-img' src="https://www.tourmyindia.com/packages-tour-india/pilgrimage-tour-packages/image/buddhist-pilgrimage-tour1.webp"></img>
                    <p className='caption'>65+ packages</p>
                    <button className='book-now'>Book Now</button>

                </div >
                <div className='card2 comp-card'>
                    <h2 className='card-heading'>Hill Stations</h2>
                    <img className='card-img' src="https://www.tourmyindia.com/states/uttarakhand/image/nainital-lake.webp"></img>
                    <p className='caption'>75+ packages</p>
                    <button className='book-now'>Book Now</button>
                </div>
                <div className='card3 comp-card'>
                    <h2 className='card-heading'>Beach Tour</h2>
                    <img className='card-img' src="https://www.tourmyindia.com/golden-triangle/golden-images/goa/goa-banner.webp"></img>
                    <p className='caption'>20+ packages</p>
                    <button className='book-now'>Book Now</button>

                </div>
                <div className='card4 comp-card'>
                    <h2 className='card-heading'>Trekking</h2>
                    <img className='card-img' src="https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/frozen-river-trek10.jpg"></img>
                    <p className='caption'>50+ packages</p>
                    <button className='book-now'>Book Now</button>

                </div>
            </div>
        </div>
    )
}

export default TopNationCard