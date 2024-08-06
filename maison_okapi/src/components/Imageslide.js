import React, { useState, useRef } from 'react';
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
  const doubledImages = [...images, ...images];
  const [isPaused, setIsPaused] = useState(false);
  const imageRowRef = useRef(null);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const handleArrowClick = (direction) => {
    if (imageRowRef.current) {
      const scrollAmount = imageRowRef.current.clientWidth / 2; // Scroll by half the width of the container
      if (direction === 'left') {
        imageRowRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else if (direction === 'right') {
        imageRowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="image-container">
      <h1>MEN'S PRE-FALL 2024 COLLECTION</h1>
      <button className="arrow arrow-left" onClick={() => handleArrowClick('left')}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div
        className="image-row"
        ref={imageRowRef}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {doubledImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Clothing ${index + 1}`}
            className="image-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <button className="arrow arrow-right" onClick={() => handleArrowClick('right')}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <button className="pause-button" onClick={handlePauseClick}>
        <i className={`fas ${isPaused ? 'fa-play' : 'fa-pause'}`}></i>
      </button>
    </div>
  );
};

export default Imageslide;
