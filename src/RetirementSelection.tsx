import React from 'react';
import './RetirementSelection.css'; // Reusing the same CSS for consistency

interface Props {
  onBack: () => void;
}

const RetirementSelection: React.FC<Props> = ({ onBack }) => {
  const handleRothIraClick = () => {
    // Handle Roth IRA selection
    console.log('Roth IRA selected');
  };

  const handleTraditionalIraClick = () => {
    // Handle Traditional IRA selection
    console.log('Traditional IRA selected');
  };

  return (
    <div className="retirement-selection-container">
      <div className="retirement-selection-content">
        <div className="header-container">
          <h1 className="header-text">
            <strong>Retirement</strong>
          </h1>
        </div>
        
        <div className="question-container">
          <p className="question-text">
            How do you want to grow your investment?
          </p>
        </div>
        
        <div className="selection-buttons-container">
          <button 
            className="selection-button rothira-button"
            onClick={handleRothIraClick}
          >
            Roth IRA
          </button>
          
          <button 
            className="selection-button traditionalira-button"
            onClick={handleTraditionalIraClick}
          >
            Traditional IRA
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

export default RetirementSelection;