// src/components/FreeCasePanel.js

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './FreeCasePanel.css';

const FreeCasePanel = () => {
  return (
    <div className="free-case-panel">
      <h2>Free<br />Case<br />Review</h2>
      <div className="slots-circle">ONLY 6 SLOTS LEFT</div>
      <ul className="features">
        <li><FaCheckCircle /> 100% Confidential</li>
        <li><FaCheckCircle /> No Win, No Fee</li>
        <li><FaCheckCircle /> Free Case Evaluation</li>
      </ul>
      <button className="contact-btn">Contact us</button>
    </div>
  );
};

export default FreeCasePanel;
