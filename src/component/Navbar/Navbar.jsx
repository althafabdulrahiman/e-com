import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const cartItems=useSelector((state)=>state.cart.cartItems)
  const cartCount=cartItems.length;
  const [isMenuOpen,setIsMenuOpen]=useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <nav>
      <div className="header">
        <div className="header-1">
        <Link to='/'> <h1>MultiCart</h1></Link>
        </div>
        <div className="header-2">
          <Link to='/'><h2>Home</h2></Link>
          <Link to='/component/Router/Shop'><h2>Shop</h2></Link>
          <Link to='/component/Router/Cart'><h2>Cart</h2></Link>
          <div className="icon"><Link to='/component/Router/Shop'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="header-icon">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path></svg></Link></div>
          <Link to='/component/Router/Cart'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="header-icon"><path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
          </svg>
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>

        </div>
      </div>
      </nav>
      
      </div>
        
    
  )
}

export default Navbar