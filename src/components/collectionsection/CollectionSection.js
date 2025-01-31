// HeroSection.js
import React from 'react';
import './CollectionSection.css';
import evening_gowns from '../../assets/images/collection-evening-gown.png';
import office_wear from '../../assets/images/collection-office-wears.png';
import casual_wears from '../../assets/images/collection-casual-wear.png';


const CollectionSection = () => {
  return (
    <section className='section-padding collection'>
      <span className='section-header'>
        <h3 className='section-title'>Browse Our Collection</h3>
        <p className='section-subtitle'>Discover the perfect outfit to fit your style</p>
      </span>
      <section className='section-content-container'>
        <span className="image-background">
          <img src={evening_gowns} alt="Evening Gown" />
          <span className='collection-name'>Evening Gowns</span>
        </span>
        <span className="image-background">
          <img src={office_wear} alt="Evening Gown" />
          <span className='collection-name'>Office Wears</span>
        </span>
        <span className="image-background">
          <img src={casual_wears} alt="Evening Gown" />
          <span className='collection-name'>Casual Wears</span>
        </span>
      </section>
    </section>
  )
}

export default CollectionSection;
