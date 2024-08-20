
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
    jacket1, jacket2, jacket3, jacket4, jacket5,
    jacket6, jacket7, jacket8, jacket9, jacket10
  ];

  return (
    <div className="jackets-page">
      <h1>Jackets Collection</h1>
      <div className="jackets-gallery">
        {jackets.map((jacket, index) => (
          <img src={jacket} alt={`Jacket ${index + 1}`} key={index} className="jacket-image" />
        ))}
      </div>
    </div>
  );
};

export default JacketsPage;
