import React from 'react';
import "./form.css";
export default function Form() {

    return (
    <div>    
      <div className='box'>  
        <div className="container">
        <div className="input-frame">
            <h2 className="heading">Check In</h2>
            <input type="date" placeholder="Check In"/>
        </div>
        <div className="input-frame">
            <h2 className="heading">Check Out</h2>
            <input type="date" placeholder="Check Out"/>
        </div>
        <div className="input-frame">
            <h2 className="heading">Guest</h2>
            <input type="Guest" placeholder="Guest"/>
        </div>
        <div className="input-frame">
            <h2 className="heading">Accomodation</h2>
            <input type="" placeholder="Accomodation"/>
        </div>
        </div>
    <button className="btn1">CHECK AVAILABILITY  </button>
  </div> 
  <button className='b2'> SEARCH HISTORY</button>
  
</div>
    )
}