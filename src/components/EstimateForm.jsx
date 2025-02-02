import React, { useState } from 'react';
import './Form.css'; // Import the CSS file for the form styles

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    info: ''
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
      <form action="https://formspree.io/f/xnnjvbye" method="POST">
        <label className="fs-label">
          Name:
          <input className="fs-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label className="fs-label">
          Email:
          <input className="fs-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label className="fs-label">
          Phone:
          <input className="fs-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label className="fs-label">
          Address:
          <input className="fs-input" type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label className="fs-label">
          Additional Info:
          <textarea className="fs-textarea" name="info" value={formData.info} onChange={handleChange} required />
        </label>
        <button className="fs-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EstimateForm;