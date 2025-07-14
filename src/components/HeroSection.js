import React from 'react';
import FreeCasePanel from './FreeCasePanel';
import ClaimForm from './ClaimForm';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-background">
      <div className="hero-container">
        <FreeCasePanel />
        <ClaimForm />
      </div>
    </div>
  );
};

export default HeroSection;
