// ProductsSection.js
import React from 'react';

const ProductsSection = () => (
  <section>
    <h2>Our Products</h2>
    <div>
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i}>
          <img src={`product-${i + 1}.jpg`} alt={`Product ${i + 1}`} />
          <p>Product Title</p>
          {i % 3 === 0 && <span>Discount</span>}
          {i % 4 === 0 && <span>New In</span>}
        </div>
      ))}
    </div>
  </section>
);

export default ProductsSection;
