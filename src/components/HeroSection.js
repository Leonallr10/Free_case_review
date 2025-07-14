// src/components/HeroSection.js

import React from 'react';
import FreeCasePanel from './FreeCasePanel';
import ClaimForm from './ClaimForm';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <FreeCasePanel />
      <ClaimForm />
    </div>
  );
};

export default HeroSection;
