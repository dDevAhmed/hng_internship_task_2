// HeroSection.js
import React from 'react';
import './CollectionSection.css';
import evening_gowns from '../../assets/images/collection-evening-gown.png';
import office_wear from '../../assets/images/collection-office-wears.png';
import casual_wears from '../../assets/images/collection-casual-wear.png';


const CollectionCard = () => {
  return (
    <section className='section-padding collection-card'>
      <span className='section-header'>
        <h3 className='section-title'>Browse Our Collection</h3>
        <p className='section-subtitle'>Browse Our Collection</p>
      </span>
      <section className='section-content-container'>
        <span className="image-background">
          <img src={evening_gowns} alt="Evening Gown" />
          <span className='collection-name'>Evening Gown</span>
        </span>
        <span className="image-background">
          <img src={office_wear} alt="Evening Gown" />
          <span className='collection-name'>Evening Gown</span>
        </span>
        <span className="image-background">
          <img src={casual_wears} alt="Evening Gown" />
          <span className='collection-name'>Evening Gown</span>
        </span>
      </section>
    </section>
  )
}

export default CollectionCard;
