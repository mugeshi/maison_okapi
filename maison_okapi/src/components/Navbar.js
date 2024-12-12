import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <h2 className="playwrite-at-logo">maison okapi</h2>
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/activewear" onClick={closeMenu}>Activewear</Link>
        </li>
        <li>
          <Link to="/newcollection" onClick={closeMenu}>New Collection</Link>
        </li>
        <li>
          <Link to="/aboutUs" onClick={closeMenu}>About us</Link>
        </li>
      </ul>
      <div className="icon-container">
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} className="custom-icon" />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="custom-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
