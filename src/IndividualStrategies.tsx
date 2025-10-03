import React from 'react';
import './IndividualStrategies.css';

interface Props {
  onBack: () => void;
}

const IndividualStrategies: React.FC<Props> = ({ onBack }) => {
  const handleConservativeClick = () => {
    // Handle Conservative strategy selection
    console.log('Conservative strategy selected');
  };

  const handleModerateClick = () => {
    // Handle Moderate strategy selection
    console.log('Moderate strategy selected');
  };

  const handleAggressiveClick = () => {
    // Handle Aggressive strategy selection
    console.log('Aggressive strategy selected');
  };

  const handleBackClick = () => {
    // Handle back navigation to onboarding
    console.log('Back to onboarding');
  };

  return (
    <div className="individual-strategies-container">
      <div className="individual-strategies-content">
        <div className="header-container">
          <h1 className="header-text">
            <strong>Individual</strong>
          </h1>
        </div>
        
        <div className="question-container">
          <p className="question-text">
            How do you want to grow your investment?
          </p>
        </div>
        
        <div className="strategies-buttons-container">
          <button 
            className="strategy-button conservative-button"
            onClick={handleConservativeClick}
          >
            Conservative
          </button>
          
          <button 
            className="strategy-button moderate-button"
            onClick={handleModerateClick}
          >
            Moderate
          </button>
          
          <button 
            className="strategy-button aggressive-button"
            onClick={handleAggressiveClick}
          >
            Aggressive
          </button>
        </div>
      </div>
      <button 
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>
    </div>
  );
};

export default IndividualStrategies;