import React from 'react';
import './ImageFeatured.css';

import femaleImage from './images/female.jpeg';
import maleImage from './images/male9.jpeg';

const ImagesSection = () => {
  return (
    <section className="images-section">
      <div className="image-container">
        <img src={femaleImage} alt="Female Featured" className="featured1-image" />
        <h2 className="featured-text">WOMEN'S FEATURED</h2>
      </div>
      <div className="image-container">
        <img src={maleImage} alt="Male Featured" className="featured2-image" />
        <h2 className="featured-text">MEN'S FEATURED</h2>
      </div>
    </section>
  );
};

export default ImagesSection;
