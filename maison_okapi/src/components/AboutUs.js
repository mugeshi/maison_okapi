import React from 'react';
import './AboutUs.css';
import jacketImage from './images/jacket2.jpeg'; // Adjust the path as per your project structure

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Maison Okapi</h1>
        <p>Celebrate African creativity and excellence in every stitch.</p>
      </header>

      <section className="about-section about-us">
        <div className="about-image">
          <img src={jacketImage} alt="Maison Okapi Jacket" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Maison Okapi is a lifestyle fashion brand rooted in African culture. 
            We are committed to empowering individuals with clothing that speaks to their passion and ambition.
          </p>
          <p>
            Our designs reflect the boldness, greatness, and creativity of African talent, 
            offering individuals a way to represent themselves with pride and purpose.
          </p>
          <p>
            Through our garments, we inspire conscious living and elevate African excellence on the world stage.
          </p>
        </div>
      </section>

      <section className="about-section brand-story">
        <h2>Brand Story</h2>
        <p>
          Born out of a deep love for Africa's diverse creativity and talents, Maison Okapi embodies the Spirit of the Okapi:
        </p>
        <p><strong>RARE, UNIQUE, POWERFUL</strong></p>
        <p>
          We believe African excellence deserves a global stage, and through our carefully crafted clothing, 
          we empower individuals to shine in their craft while embracing a lifestyle of purpose and consciousness.
        </p>
      </section>

      <section className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          On a mission to empower African aspiration by offering sustainable luxury fashion that celebrates heritage, 
          inspires conscious living, and fosters global recognition of African excellence.
        </p>
        <p>
          Maison Okapi is more than a fashion brand; it's a movement dedicated to empowering passionate Africans in different industries. 
          With every garment, we aim to inspire greatness, foster creativity, and celebrate the beauty of conscious living.
        </p>
        <blockquote>"We are your vision."</blockquote>
      </section>

      <section className="about-section vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading fashion brand that owns African creativity, 
          driving cultural impact and inspiring mindful living.
        </p>
      </section>
    </div>
  );
};

export default About;
