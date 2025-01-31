import React from 'react';

const Navbar = () => (
    <div className="navbar">
        <img src="/images/custom concrete countertops_transparent-.png" alt="logo" onError={(e) => { e.target.onerror = null; e.target.src = '/images/fallback-image.png'; }} />
        <div className="burger-menu">☰</div>
    </div>
);

export default Navbar;