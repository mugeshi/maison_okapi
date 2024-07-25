import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Maison Okapi</h1>
          <p className="hero-subtitle">Discover the latest trends in fashion</p>
          <a href="/newcollection" className="hero-button">Shop New Collection</a>
        </div>
      </section>
      <section className="banner-section">
        <div className="banner">
          <h1>Kenya’s golden coastline informs Pre-Fall 2024, evoking a spirit of endless summer through handcraft, repurposing, and artistic embellishments.</h1>
          <button className="discover-btn">Discover</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
