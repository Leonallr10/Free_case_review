import React from 'react';
import './ClaimForm.css';

const ClaimForm = () => {
  return (
    <form className="claim-form">
      <h2>Claim Form</h2>
      <div className="form-row">
        <input type="text" placeholder="First Name *" />
        <input type="text" placeholder="Last Name *" />
      </div>
      <div className="form-row">
        <input type="tel" placeholder="Phone Number *" />
        <input type="email" placeholder="Email ID *" />
      </div>
     <div className="form-row">
  <div className="date-wrapper">
    <input
      type="text"
      placeholder="Date of Birth *"
      onFocus={(e) => (e.target.type = 'date')}
      onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
    />
    <span className="calendar-icon">📅</span>
  </div>
  <input type="text" placeholder="Job Title *" />
</div>

<div className="form-row">
  <div className="date-wrapper">
    <input
      type="text"
      placeholder="Date of Diagnosis *"
      onFocus={(e) => (e.target.type = 'date')}
      onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
    />
    <span className="calendar-icon">📅</span>
  </div>
  <div className="select-wrapper">
 <select required defaultValue="">
  <option value="" disabled hidden>Type of Diagnosis *</option>
  <option value="Mesothelioma">Mesothelioma</option>
  <option value="Lung Cancer">Lung Cancer</option>
</select>

  </div>
</div>


      <textarea placeholder="Tell us your story (optional)" rows="4"></textarea>
      <div className="checkboxes">
        <label>
          <input type="checkbox" /> I agree to the <a href="#">privacy policy</a> and <a href="#">disclaimer</a> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
        </label>
        <label>
          <input type="checkbox" /> Please check this box to verify you’re a person.
        </label>
      </div>
      <button type="submit">Start your claim now</button>
    </form>
  );
};

export default ClaimForm;
