import React from 'react';
import './onboarding.css';
import IndividualStrategies from './IndividualStrategies';


const Onboarding: React.FC = () => {
    const [selectedAccountType, setSelectedAccountType] = React.useState<'individual' | 'retirement' | null>(null);

    const getSelection = (accountType: 'individual' | 'retirement') => {
        setSelectedAccountType(accountType);
    // Handle the account type selection
    console.log(`Selected account type: ${accountType}`);
  };

const handleIndividualClick = () => {
    getSelection('individual');
};

const handleRetirementClick = () => {
    getSelection('retirement');
};

const handleBackClick = () => {
    // Handle back button click
    console.log('Back button clicked');
};

if (selectedAccountType === 'individual') {
    return <IndividualStrategies />;
}



  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <div className="text-container">
          <p className="onboarding-text">
            Start an account: what type of investment do you want to start today?
          </p>
        </div>
        
        <div className="buttons-container">
          <button 
            className="account-button individual-button"
            onClick={(handleIndividualClick)}
          >
            Individual
          </button>
          
          <button 
            className="account-button retirement-button"
            onClick={handleRetirementClick}
          >
            Retirement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
