import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import the CSS file for the Navbar component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <img src="/images/custom concrete countertops_transparent-.png" alt="logo" onError={(e) => { e.target.onerror = null; e.target.src = '/images/fallback-image.png'; }} />
      <div className="burger-menu" onClick={toggleMenu}>☰</div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/estimate" onClick={toggleMenu}>Get Estimate</Link>
      </nav>
    </div>
  );
};

export default Navbar;