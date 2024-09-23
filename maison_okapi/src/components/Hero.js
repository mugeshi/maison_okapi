import React from 'react';
import { Link } from 'react-router-dom'; 
import './Hero.css';
import video1 from './images/video1.mp4';
import video2 from './images/video2.mp4';
import video3 from './images/video3.mp4';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="video-container">
          <video src={video1} autoPlay loop muted className="video" />
          <video src={video2} autoPlay loop muted className="video" />
          <video src={video3} autoPlay loop muted className="video" />
        </div>
        
      </section>

      
    </>
  );
};

export default Hero;
