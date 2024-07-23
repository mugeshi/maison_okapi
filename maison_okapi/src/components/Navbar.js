import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Correct icon import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 className="playwrite-at-logo">maison okapi</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/accessories">Accessories</a></li>
        <li><a href="/footwear">Footwear</a></li>
        <li><a href="/newcollection">New Collection</a></li>
      </ul>
      <div className="icon-container">
        <FontAwesomeIcon icon={faUser} className="fa-thin" /> 
      </div>
    </nav>
  );
};

export default Navbar;
