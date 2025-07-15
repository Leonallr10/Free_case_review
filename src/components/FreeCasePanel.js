import React from 'react';
import './FreeCasePanel.css';
import ClaimForm from './ClaimForm';

const FreeCasePanel = () => {
  return (
    <div className="hero-container">
      <div className="left-panel">
         <div className="top-section">
          <div className="left-side">
            <div className="free-case">
              <h1>Free <br /> Case <br /> Review</h1>
            </div>
            <ul className="features">
              <li><span>🛡️</span> 100% Confidential</li>
              <li><span>✔️</span> No Win, No Fee</li>
              <li><span>⚖️</span> Free Case Evaluation</li>
            </ul>
          </div>
          <div className="right-side">
            <div className="help-text">
              We are here <br /> to help!
            </div>
            <div className="slots-container">
              <div className="slots-circle">
                <svg viewBox="0 0 200 200" className="curved-text">
                  <defs>
                    <path id="circle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  </defs>
                  <text className="curved-text-path">
                    <textPath href="#circle" startOffset="0%">
                      ONLY 6 SLOTS LEFT
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <button className="contact-btn">Contact us ➜</button>
          </div>
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
