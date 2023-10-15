import React, { useState } from 'react';
import "./BookingForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faCalendarDays, faMapPin, faPersonWalkingWithCane, faChildReaching, faChildren, faHotel,faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

function TravelBookingForm() {
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    destination: '',
    adults: '',
    children: '',
    roomType: 'normal',
  });

  const [resultData, setResultData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowResult = () => {
    setResultData({ ...formData });
    // Store the data in local storage
    localStorage.setItem('travelBookingData', JSON.stringify(formData));
  };

  return (
    <div className="booking-form-container">
      <h1 className='travel-booking-heading'><FontAwesomeIcon icon={faPlaneDeparture} className='form-icon' /> Travel Booking Form</h1>
      <form>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faCalendarCheck} className='form-icon' /> Check-In Date:</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faCalendarDays} className='form-icon' /> Check-Out Date:</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faMapPin} className='form-icon' /> Destination:</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
          >
            <option value="">Destination</option>
            <option value="Destination 1">Pune</option>
            <option value="Destination 2">Mumbai</option>
            <option value="Destination 2">Delhi</option>
            <option value="Destination 2">Hyderabad</option>
            <option value="Destination 2">Chennai</option>
            <option value="Destination 2">Bangaluru</option>
            {/* Add more destination options */}
          </select>
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faPersonWalkingWithCane} className='form-icon' /> Number of Adults:</label>
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faChildReaching} className='form-icon' /> Number of Children:</label>
          <input
            type="number"
            name="children"
            value={formData.children}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faHotel} className='form-icon' /> Room Type:</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
          >
            <option value="normal">Normal</option>
            <option value="premium">Premium</option>
            <option value="deluxe">Deluxe</option>
          </select>
        </div>
        <button type="button" className='show-result-btn' onClick={handleShowResult}>
        Show Result
        </button>
      </form>

      {resultData && (
        <div className="result-card">
          <h2>Booking Details</h2>
          <p><FontAwesomeIcon icon={faCalendarCheck} className='form-icon' /> Check-In Date: {resultData.checkInDate}</p>
          <p><FontAwesomeIcon icon={faCalendarDays} className='form-icon' /> Check-Out Date: {resultData.checkOutDate}</p>
          <p><FontAwesomeIcon icon={faMapPin} className='form-icon' /> Destination: {resultData.destination}</p>
          <p><FontAwesomeIcon icon={faPersonWalkingWithCane} className='form-icon' /> Adults: {resultData.adults}</p>
          <p><FontAwesomeIcon icon={faChildReaching} className='form-icon' /> Children: {resultData.children}</p>
          <p><FontAwesomeIcon icon={faHotel} className='form-icon' /> Room Type: {resultData.roomType}</p>
        </div>
      )}
    </div>
  );
}

export default TravelBookingForm;
