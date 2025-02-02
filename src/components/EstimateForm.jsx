import React, { useState } from 'react';
import '../Form.css'; // Import the CSS file for the form styles

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="estimate-form-container">
      <h2>Get an Estimate</h2>
      <form action="https://formspree.io/f/xnnjvbye" method="POST" className="fs-form" target="_top">
        <div className="fs-field">
          <label className="fs-label" htmlFor="name">Your Name</label>
          <input className="fs-input" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="fs-field">
          <label className="fs-label" htmlFor="email">Email</label>
          <input className="fs-input" id="email" name="email" value={formData.email} onChange={handleChange} required />
          <p className="fs-description">This will help me respond to your query via an email.</p>
        </div>
        <div className="fs-field">
          <label className="fs-label" htmlFor="message">Message</label>
          <textarea className="fs-textarea" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          <p className="fs-description">What would you like to discuss?</p>
        </div>
        <div className="fs-button-group">
          <button className="fs-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EstimateForm;