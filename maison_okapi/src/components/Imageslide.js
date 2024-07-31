import React from 'react';
import './Imageslide.css';
import WhiteImage1 from './images/WhiteImage1.jpeg';
import WhiteImage2 from './images/WhiteImage2.jpeg';
import WhiteImage3 from './images/WhiteImage3.jpeg';
import WhiteImage4 from './images/WhiteImage4.jpeg';
import WhiteImage5 from './images/WhiteImage5.jpeg';
import WhiteImage6 from './images/WhiteImage6.jpeg';
import WhiteImage7 from './images/WhiteImage7.jpeg';
import WhiteImage8 from './images/WhiteImage8.jpeg';
import WhiteImage9 from './images/WhiteImage9.jpeg';
import WhiteImage10 from './images/WhiteImage10.jpeg';
import WhiteImage11 from './images/WhiteImage11.jpeg';

const images = [
  WhiteImage1,
  WhiteImage2,
  WhiteImage3,
  WhiteImage4,
  WhiteImage5,
  WhiteImage6,
  WhiteImage7,
  WhiteImage8,
  WhiteImage9,
  WhiteImage10,
  WhiteImage11
];

const Imageslide = () => {
  // Duplicate the images array to create a seamless scroll
  const doubledImages = [...images, ...images];

  return (
    <div className="image-container">
      <h1>MEN'S PRE-FALL 2024 COLLECTION</h1>
      <div className="image-row">
        {doubledImages.map((image, index) => (
          <img key={index} src={image} alt={`Clothing ${index + 1}`} className="image-item" />
        ))}
      </div>
    </div>
  );
};

export default Imageslide;
