import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
            <li><Link to="/SizeGuide">Size Guide</Link></li>
            <li><Link to="/carelabel">Care Label</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Maison Okapi | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;
