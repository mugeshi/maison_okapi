import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 className="playwrite-at-logo">maison okapi</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/footwear">Footwear</Link></li>
        <li><Link to="/newcollection">New Collection</Link></li>
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

