import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <div className='navbar'>
      
        <h2 className='nav-brand'>Travel Tales</h2>

        <a className='nav-link'>Home</a>
        <a className='nav-link'>Destinations</a>
        <a className='nav-link'>Blogs</a>
        <a className='nav-link'>About</a>
        <a className='nav-link'>Contact</a>

        <button className='login-btn registeration'>Login</button>
        <button className='signup-btn registeration'>Sign up</button>
   

    </div>
  )
}

export default Navbar