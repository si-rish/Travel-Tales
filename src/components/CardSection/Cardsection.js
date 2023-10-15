import React from 'react';
import "./Cardsection.css";
import Teant from '../../components/Image/Teant.png'
import Biking from '../../components/Image/Biking.png'
import Fishing from '../../components/Image/Fishing.png'
import Caravan from '../../components/Image/Caravan.png'
export default function CardSection() {

    return (
     <div>
         <div className="container12">
            <div >
                <img className="video" src="https://d3nn873nee648n.cloudfront.net/900x600/17212/120-SM754546.jpg" alt="/"/>
            </div>
            <div className="card23-componant">
            <div className="card23">
                <img className="logo" src={Teant} alt="/"/>
                <h3 className='text02'>Tent Camping</h3>
                <h4 className='text03'>Tent camping involves setting up a temporary shelter outdoors using a tent.</h4>
            </div>
            <div className="card23">
                <img className="logo" src={Biking} alt="/"/>
                <h3 className='text02'>Mountain Biking</h3>
                <h4 className='text03'>Mountain biking is an exhilarating outdoor adventure sport.</h4>
            </div>
            <div className="card23">
                <img className="logo" src={Fishing} alt="/"/>
                <h3 className='text02'>Fishing & Boat</h3>
                <h4 className='text03'>An angler casts their line into the tranquil waters from a small boat.</h4>
            </div>
            <div className="card23">
                <img className="logo" src={Caravan} alt="/"/>
                <h3 className='text02'>RV Caravan Tent</h3>
                <h4 className='text03'>An RV  is a portable shelter that attaches to a recreational vehicle</h4>
            </div>
           </div>
        </div>  
 </div> 
)
}  