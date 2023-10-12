import React from 'react'
import "./TopNationCard.css"

function TopNationCard() {
    return (

        <div className='main-container'>
            <div className='td-cards'>

                <div className=' comp-card'>
                    <h2 className='comp-card-heading'>Pilgrimage</h2>
                    <img className='comp-card-img' src="https://www.tourmyindia.com/packages-tour-india/pilgrimage-tour-packages/image/buddhist-pilgrimage-tour1.webp"></img>
                    <p className='comp-caption'>65+ packages</p>
                    <button className='comp-book-now'>Book Now</button>

                </div >
                <div className=' comp-card'>
                    <h2 className='comp-card-heading'>Hill Stations</h2>
                    <img className='comp-card-img' src="https://www.tourmyindia.com/states/uttarakhand/image/nainital-lake.webp"></img>
                    <p className='comp-caption'>75+ packages</p>
                    <button className='comp-book-now'>Book Now</button>
                </div>
                <div className=' comp-card'>
                    <h2 className='comp-card-heading'>Beach Tour</h2>
                    <img className='comp-card-img' src="https://www.tourmyindia.com/golden-triangle/golden-images/goa/goa-banner.webp"></img>
                    <p className='comp-caption'>20+ packages</p>
                    <button className='comp-book-now'>Book Now</button>

                </div>
                <div className=' comp-card'>
                    <h2 className='comp-card-heading'>Trekking</h2>
                    <img className='comp-card-img' src="https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/frozen-river-trek10.jpg"></img>
                    <p className='comp-caption'>50+ packages</p>
                    <button className='comp-book-now'>Book Now</button>

                </div>
            </div>
        </div>
    )
}

export default TopNationCard