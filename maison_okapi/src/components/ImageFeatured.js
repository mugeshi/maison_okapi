import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ImageFeatured.css';

import femaleImage from './images/female.jpeg';
import maleImage from './images/male9.jpeg';

const ImagesSection = () => {
  return (
    <section className="images-section">
      <div className="image-container">
        <Link to="/jackets"> 
          <img src={maleImage} alt="Female Featured" className="featured1-image" />
          <h2 className="featured-text">OUTERWEAR</h2>
        </Link>
      </div>
      <div className="image-container">
        <Link to="/shirt-jackets"> 
          <img src={femaleImage} alt="Male Featured" className="featured2-image" />
          <h2 className="featured-text">ACTIVEWEAR</h2>
        </Link>
      </div>
    </section>
  );
};

export default ImagesSection;
