// Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/FF_logo.png';
import { useState, useEffect } from 'react';


const Navbar = ({ cartCount }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check for positive scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="" className="nav-menu"><i className="fa-regular fa-bars"></i></a>
      <span className="nav-logo">
        <img src={logo} alt="CSS Logo" />
        <h3 className='logo-name'>Fashion Factory</h3>
      </span>
      <span className="center-nav-links">
        <a href="/">Home</a>
        <a href="/products">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </span>
      <span className="right-nav-links">
        <a href=""><i className="fa-regular fa-search"></i></a>
        <a href=""><i className="fa-regular fa-cart-shopping"></i></a>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </span>
    </nav>
  );
};

export default Navbar;
