import React from 'react';
import { jackets, shirtJackets } from './images'; // Adjust the path based on your structure
import './DiscoveryPage.css';

const DiscoveryPage = () => {
  return (
    <div className="discovery-page">
      <h1>Jackets Collection</h1>
      <div className="jackets-gallery">
        {jackets.map((jacket, index) => (
          <div key={index} className="card">
            <img src={jacket.src} alt={`Jacket ${index + 1}`} />
            <div className="card-info">
              <h2>Jacket {index + 1}</h2>
              <p>${jacket.price}</p>
            </div>
          </div>
        ))}
      </div>

      <h1>Shirt-Jackets Collection</h1>
      <div className="shirt-jackets-gallery">
        {shirtJackets.map((shirtJacket, index) => (
          <div key={index} className="card">
            <img src={shirtJacket.src} alt={`Shirt-Jacket ${index + 1}`} />
            <div className="card-info">
              <h2>Shirt-Jacket {index + 1}</h2>
              <p>${shirtJacket.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoveryPage;
