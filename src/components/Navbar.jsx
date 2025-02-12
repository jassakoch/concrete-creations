import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <img
        src="/images/custom concrete countertops_transparent-.png"
        alt="logo"
        onError={(e) => { e.target.onerror = null; e.target.src = '/images/fallback-image.png'; }}
      />
      <div className="burger-menu" onClick={toggleMenu}>☰</div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/estimate" onClick={() => setIsOpen(false)}>Get Estimate</Link>
        <Link to="/fyi" onClick={() => setIsOpen(false)}>FYI</Link>
      </nav>
    </div>
  );
};

export default Navbar;
