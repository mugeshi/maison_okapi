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
          <h1>LIMITED EDITION</h1>
          <h2>Each piece tells a unique story of artistry, precision, and boldness, meticulously crafted to inspire confidence and celebrate individuality</h2>
          <Link to="/discovery" className="discover-btn">Discover</Link>
        </div>
      </section>

      
    </>
  );
};

export default Hero;
