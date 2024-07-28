import React, { useState, useEffect } from 'react';
import './Slideshow.css';

import img1 from './images/african-men1.jpeg';
import img2 from './images/african-men2.jpeg';
import img3 from './images/african-men3.jpeg';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3];

  useEffect(() => {
    // Set up the interval to change images every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
    </div>
  );
};

export default Slideshow;
