import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Import the CSS file for the About component

const About = () => {
  const navigate = useNavigate();

  const handleGetEstimateClick = () => {
    navigate('/estimate');
  };

  return (
    <div>
      <p className="about-container">
        Looking for unique, durable, and stylish countertops? We specialize in custom concrete countertops, tailored to your space—perfect for kitchens, bathrooms, or outdoor areas. Serving Kitchener-Waterloo and Beyond.
      </p>
      <button className="get-estimate-btn" onClick={handleGetEstimateClick}>Get Estimate</button>
    </div>
  );
};

export default About;
