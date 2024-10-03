import React from 'react';
import { jackets, shirtJackets } from './images'; 
import './NewCollection.css'; 

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>New Collection</h1>
      <p>Discover the latest additions to our collection.</p>

      <h2>Jackets</h2>
      <div className="collection-grid">
        {jackets.map((jacket, index) => (
          <div className="collection-card" key={index}>
            <img src={jacket.src} alt={`Jacket ${index + 1}`} />
            <p>Price: ${jacket.price}</p>
          </div>
        ))}
      </div>

      <h2>Shirt Jackets</h2>
      <div className="collection-grid">
        {shirtJackets.map((shirtJacket, index) => (
          <div className="collection-card" key={index}>
            <img src={shirtJacket.src} alt={`Shirt Jacket ${index + 1}`} />
            <p>Price: ${shirtJacket.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
