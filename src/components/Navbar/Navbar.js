import { Link } from 'react-router-dom'
import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div className='navbar'>
      
        <h2 className='nav-brand'>TRAVEL<span className='tales-logo'>TALES</span></h2>

        <Link className='nav-link' to="/" >Home</Link>
        <Link className='nav-link' to="/destination">Destinations</Link>
        <Link className='nav-link' to="/blogs">Blogs</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
        <Link className='nav-link' to="/shop">Shop</Link>
        <Link className='nav-link'to="/Wishcard">Wishlist</Link>
        {/* <Link to="/login"><button className='login-btn registeration'>Login</button></Link> */}
        <Link to="/signup"><button className='signup-btn registeration'>Register</button></Link>
   

    </div>
  )
}

export default Navbar