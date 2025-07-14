// src/components/ClaimForm.js

import React from 'react';
import './ClaimForm.css';

const ClaimForm = () => {
  return (
    <div className="claim-form">
      <h2>Claim Form</h2>
      <form>
        <div className="form-row">
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Last Name*" required />
        </div>
        <div className="form-row">
          <input type="tel" placeholder="Phone Number*" required />
          <input type="email" placeholder="Email ID*" required />
        </div>
        <div className="form-row">
          <input type="date" placeholder="Date of Birth*" required />
          <input type="text" placeholder="Job Title*" />
        </div>
        <div className="form-row">
          <input type="date" placeholder="Date of Diagnosis*" required />
          <select required>
            <option value="">Type of Diagnosis*</option>
            <option value="mesothelioma">Mesothelioma</option>
            <option value="lung-cancer">Lung Cancer</option>
          </select>
        </div>
        <textarea placeholder="Tell us your story (optional)" rows="4"></textarea>
        <label className="checkbox">
          <input type="checkbox" required />
          I agree to the privacy policy and disclaimer.
        </label>
        <label className="checkbox">
          <input type="checkbox" required />
          Please check this box to verify you’re a person.
        </label>
        <button type="submit">Start your claim now</button>
      </form>
    </div>
  );
};

export default ClaimForm;
