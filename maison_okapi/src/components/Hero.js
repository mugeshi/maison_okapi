import React from 'react';
import { Link } from 'react-router-dom'; 
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Maison Okapi</h1>
          <p className="hero-subtitle">Discover the latest trends in fashion</p>
        
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
