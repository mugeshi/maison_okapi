import React from 'react';
import './JacketsPage.css'; 

import jacket1 from './images/jacket1.jpeg';
import jacket2 from './images/jacket2.jpeg';
import jacket3 from './images/jacket3.jpeg';
import jacket4 from './images/jacket4.jpeg';
import jacket5 from './images/jacket5.jpeg';
import jacket6 from './images/jacket6.jpeg';
import jacket7 from './images/jacket7.jpeg';
import jacket8 from './images/jacket8.jpeg';
import jacket9 from './images/jacket9.jpeg';
import jacket10 from './images/jacket10.jpeg';

const JacketsPage = () => {
  const jackets = [
    { image: jacket1, price: '$59.99' },
    { image: jacket2, price: '$69.99' },
    { image: jacket3, price: '$79.99' },
    { image: jacket4, price: '$89.99' },
    { image: jacket5, price: '$99.99' },
    { image: jacket6, price: '$109.99' },
    { image: jacket7, price: '$119.99' },
    { image: jacket8, price: '$129.99' },
    { image: jacket9, price: '$139.99' },
    { image: jacket10, price: '$149.99' }
  ];

  return (
    <div className="jackets-page">
      <h1>Jackets Collection</h1>
      <div className="jackets-gallery">
        {jackets.map((jacket, index) => (
          <div key={index} className="jacket-item">
            <img src={jacket.image} alt={`Jacket ${index + 1}`} className="jacket-image" />
            <div className="jacket-price">{jacket.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JacketsPage;
