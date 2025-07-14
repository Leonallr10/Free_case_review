import React from 'react';
import './FreeCasePanel.css';
import ClaimForm from './ClaimForm';

const FreeCasePanel = () => {
  return (
    <div className="hero-container">
      <div className="left-panel">
        <div className="top-section">
          <div className="free-case">
            <h1>Free <br /> Case <br /> Review</h1>
          </div>
          <div className="slots-circle">
            ONLY 6 <br /> SLOTS <br /> LEFT
          </div>
          <div className="help-text">
            We are here <br /> to help!
          </div>
          <ul className="features">
            <li><span>🛡️</span> 100% Confidential</li>
            <li><span>✔️</span> No Win, No Fee</li>
            <li><span>⚖️</span> Free Case Evaluation</li>
          </ul>
          <button className="contact-btn">Contact us ➜</button>
        </div>

        <div className="mesothelioma-box">
          <h2>Have you or a loved one been affected by Mesothelioma?</h2>
          <p>All veterans, trades workers, factory workers, and residents that have been exposed to asbestos may be entitled to compensation.</p>
          <ul>
            <li>Secondary Asbestos exposure is common</li>
            <li>Mesothelioma delays are more frequent in women</li>
            <li>Asbestos can lurk in homes, schools, and workplaces</li>
          </ul>
        </div>
      </div>

      <div className="right-panel">
        <ClaimForm />
      </div>
    </div>
  );
};

export default FreeCasePanel;
