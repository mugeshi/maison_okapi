import React from 'react';
import './ShirtJacketsPage.css';

import shirtJacket1 from './images/shirt-jacket1.jpeg';
import shirtJacket2 from './images/shirt-jacket2.jpeg';
import shirtJacket3 from './images/shirt-jacket3.jpeg';
import shirtJacket4 from './images/shirt-jacket4.jpeg';
import shirtJacket5 from './images/shirt-jacket5.jpeg';
import shirtJacket6 from './images/shirt-jacket6.jpeg';
import shirtJacket7 from './images/shirt-jacket7.jpeg';
import shirtJacket8 from './images/shirt-jacket8.jpeg';
import shirtJacket9 from './images/shirt-jacket9.jpeg';
import shirtJacket10 from './images/shirt-jacket10.jpeg';
import shirtJacket11 from './images/shirt-jacket11.jpeg';
import shirtJacket12 from './images/shirt-jacket12.jpeg';
import shirtJacket13 from './images/shirt-jacket13.jpeg';
import shirtJacket14 from './images/shirt-jacket14.jpeg';
import shirtJacket15 from './images/shirt-jacket15.jpeg';
import shirtJacket16 from './images/shirt-jacket16.jpeg';

const ShirtJacketsPage = () => {
  const shirts = [
    { image: shirtJacket1, title: "Shirt-Jacket 1", price: "$49.99" },
    { image: shirtJacket2, title: "Shirt-Jacket 2", price: "$59.99" },
    { image: shirtJacket3, title: "Shirt-Jacket 3", price: "$69.99" },
    { image: shirtJacket4, title: "Shirt-Jacket 4", price: "$79.99" },
    { image: shirtJacket5, title: "Shirt-Jacket 5", price: "$49.99" },
    { image: shirtJacket6, title: "Shirt-Jacket 6", price: "$59.99" },
    { image: shirtJacket7, title: "Shirt-Jacket 7", price: "$69.99" },
    { image: shirtJacket8, title: "Shirt-Jacket 8", price: "$79.99" },
    { image: shirtJacket9, title: "Shirt-Jacket 9", price: "$49.99" },
    { image: shirtJacket10, title: "Shirt-Jacket 10", price: "$59.99" },
    { image: shirtJacket11, title: "Shirt-Jacket 11", price: "$69.99" },
    { image: shirtJacket12, title: "Shirt-Jacket 12", price: "$79.99" },
    { image: shirtJacket13, title: "Shirt-Jacket 13", price: "$49.99" },
    { image: shirtJacket14, title: "Shirt-Jacket 14", price: "$59.99" },
    { image: shirtJacket15, title: "Shirt-Jacket 15", price: "$69.99" },
    { image: shirtJacket16, title: "Shirt-Jacket 16", price: "$79.99" },
  ];

  return (
    <div className="shirts-page">
      <h1>Shirt-Jackets Collection</h1>
      <div className="shirts-gallery">
        {shirts.map((shirt, index) => (
          <div key={index} className="shirt-card">
            <img src={shirt.image} alt={shirt.title} className="shirt-image" />
            <div className="shirt-info">
              <h2>{shirt.title}</h2>
              <p>{shirt.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShirtJacketsPage;
