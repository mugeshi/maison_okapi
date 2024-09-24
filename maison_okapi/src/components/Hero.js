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

      <section className="banner-section">
        <div className="banner">
          <h1>PRE-FALL 2024 COLLECTION</h1>
          <h2>Kenya’s golden coastline informs Pre-Fall 2024, evoking a spirit of endless summer through handcraft, repurposing, and artistic embellishments.</h2>
          <Link to="/discovery" className="discover-btn">Discover</Link>
        </div>
      </section>

      
    </>
  );
};

export default Hero;
