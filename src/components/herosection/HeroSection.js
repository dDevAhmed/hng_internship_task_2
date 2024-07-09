// HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className='section-padding hero'>
      <div className='hero-caption'>
        <h2>Unleash Your Style with Fashion Factory Clothing.</h2>
        <p>Fashion factory is your go-to destination for trendy and unique fashion piece</p>
        <a href='/products'><button>Shop Now</button></a>
      </div>
    </section>
  )
}

export default HeroSection;
