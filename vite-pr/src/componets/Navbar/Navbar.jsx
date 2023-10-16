import React from 'react'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../assets/images'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);    
    
    
    return (
        <div className='app__navbar'>
            <div className='app-logo'>
                <h1>Qeilow</h1>
            </div>

            <ul className="app__ul">
                <li className='app__li'><a href="/">Home</a></li>
                <li className='app__li'><a href="#timeline">TimeLine</a></li>
                <li className='app__li'><a href="#price">Price</a></li>
                <li className='app__li'><a href="/contact">Contact</a></li>

            </ul>
      

    
<div className='yes'>
          
            <div className="app__navbar-smallscreen">

            <img src={images.ham3} className="app-ham"alt='hammburger' onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay slide-bottom">
  <img src={images.X} className="overlay__close"alt='hammburger' onClick={() => setToggleMenu(false)} />

            <ul className="app__navbar-smallscreen_links">
              <li><a href="#About" onClick={() => setToggleMenu(false)}>About US</a></li>
              <li><a href="#Gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href="#Service" onClick={() => setToggleMenu(false)}>Services</a></li>
              <li><a href="#Find" onClick={() => setToggleMenu(false)}>Find Us</a></li>
            </ul>
          </div>
        )}
      </div>
      </div>
  </div>
    )
}


export default Navbar;