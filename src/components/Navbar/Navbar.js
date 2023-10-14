import { Link } from 'react-router-dom'
import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlaneDeparture, faLocationDot, faNewspaper, faShoppingBag, faLayerGroup, faUserGroup, faAddressBook, faCartShopping, faHeart, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <div className='navbar'>
      
        <h2 className='nav-brand'>TRAVEL<span className='tales-logo'>TALES</span></h2>

        <Link className='nav-link' to="/" ><FontAwesomeIcon icon={faHome} className='nav-icons' /> Home</Link>
        <Link className='nav-link' to="/destination"><FontAwesomeIcon icon={faLocationDot} className='nav-icons' /> Destinations</Link>
        <Link className='nav-link' to="/blogs"><FontAwesomeIcon icon={faNewspaper} className='nav-icons' /> Blogs</Link>
        <Link className='nav-link' to="/about"><FontAwesomeIcon icon={faUserGroup} className='nav-icons' /> About</Link>
        <Link className='nav-link' to="/contact"><FontAwesomeIcon icon={faAddressBook} className='nav-icons' /> Contact</Link>
        <Link className='nav-link' to="/shop"><FontAwesomeIcon icon={faShoppingBag} className='nav-icons' /> Shop</Link>
        <Link className='nav-link'to="/Wishcard"><FontAwesomeIcon icon={faHeart} className='nav-icons' /> Wishlist</Link>
        {/* <Link to="/login"><button className='login-btn registeration'>Login</button></Link> */}
        <Link to="/signup"><button className='signup-btn registeration'>Register <FontAwesomeIcon icon={faRightToBracket} className='nav-icons' /> </button></Link>
   

    </div>
  )
}

export default Navbar