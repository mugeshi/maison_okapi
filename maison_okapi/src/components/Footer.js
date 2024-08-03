import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">Maison Okapi</h2>
          <p>
            Maison Okapi is your ultimate destination for trendy and stylish clothing. We offer a wide range of collections to cater to your fashion needs.
          </p>
        </div>

        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p><i className="fa fa-phone"></i> +123-456-7890</p>
          <p><i className="fa fa-envelope"></i> info@maisonokapi.com</p>
          <p><i className="fa fa-map-marker"></i> 123 Fashion Street, Nairobi, Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Maison Okapi | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;
