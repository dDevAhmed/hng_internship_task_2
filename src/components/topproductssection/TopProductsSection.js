// HeroSection.js
import React from 'react';
import './TopProductsSection.css';
import image_1 from '../../assets/images/products/1.png';
import image_2 from '../../assets/images/products/2.png';
import image_3 from '../../assets/images/products/3.png';
import image_4 from '../../assets/images/products/4.png';
import image_5 from '../../assets/images/products/5.png';
import image_6 from '../../assets/images/products/6.png';
import image_7 from '../../assets/images/products/7.png';
import image_8 from '../../assets/images/products/8.png';


const TopProductsSection = () => {
  return (
    <section className='section-padding top-products'>
      <span className='section-header'>
        <h3 className='section-title'>Our Top Products</h3>
        <p className='section-subtitle'>Choose from our top trending</p>
      </span>
      <section className='section-content-container'>
        <div className='top-products'>
          <span className="image-background">
            <img src={image_1} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
          <span className="image-background">
            <img src={image_2} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
          <span className="image-background">
            <img src={image_3} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
          <span className="image-background">
            <img src={image_4} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
          <span className="image-background">
            <img src={image_5} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
          <span className="image-background">
            <img src={image_6} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
          <span className="image-background">
            <img src={image_7} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
          <span className="image-background">
            <img src={image_8} alt="Evening Gown" />
            <span className='collection-name'>
              <h3>Yellow Summer Dress</h3>
              <p>Casual Wear</p>
              <span className='price'>
                <span>&#x20A6; 15,000</span>
                <span className='discount'>&#x20A6; 15,000</span>
              </span>
            </span>
          </span>
        </div>
        <a href='#' className='show-more-button'><button>Show More</button></a>
      </section>
    </section>
  )
}

export default TopProductsSection;
