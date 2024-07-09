// Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/FF_logo.png';

const Navbar = () => {
  return (
    <nav>
      <a href="" className='nav-menu'><i className="fa-regular fa-bars"></i></a>
      <span class="nav-logo">
        <img src={logo} alt="CSS Logo" />
        <h3>Fashion Factory</h3>
      </span>
      <span class="center-nav-links">
        <a href="/">Home</a>
        <a href="/products">Shop</a>
        <a href="">About</a>
        <a href="#">Contact</a>
      </span>
      <span class="right-nav-links">
        <a href=""><i className='fa-regular fa-search'></i></a>
        <a href=""><i className="fa-regular fa-cart-shopping"></i></a>
      </span>
    </nav>
  )
};

export default Navbar;
