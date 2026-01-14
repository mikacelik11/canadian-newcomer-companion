import React, { useState } from 'react';
import Welcome from './components/Welcome';
import LanguageSelection from './components/LanguageSelection';
import PurposeOfVisit from './components/PurposeOfVisit';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');

  const handleWelcomeNext = () => {
    setCurrentStep('language');
  };

  const handleLanguageNext = (language) => {
    setSelectedLanguage(language);
    setCurrentStep('purpose');
  };

  const handleLanguagePrevious = () => {
    setCurrentStep('welcome');
  };

  const handlePurposeNext = (purpose) => {
    setSelectedPurpose(purpose);
    setCurrentStep('complete');
  };

  const handlePurposePrevious = () => {
    setCurrentStep('language');
  };

  return (
    <div className="app">
      {currentStep === 'welcome' && (
        <Welcome onNext={handleWelcomeNext} />
      )}

      {currentStep === 'language' && (
        <LanguageSelection 
          onNext={handleLanguageNext}
          onPrevious={handleLanguagePrevious}
        />
      )}

      {currentStep === 'purpose' && (
        <PurposeOfVisit
          onNext={handlePurposeNext}
          onPrevious={handlePurposePrevious}
        />
      )}

      {currentStep === 'complete' && (
        <div className="completion-message">
          <h1>Onboarding Progress</h1>
          <div className="progress-info">
            <p><strong>Selected Language:</strong> {selectedLanguage}</p>
            <p><strong>Purpose of Visit:</strong> {selectedPurpose}</p>
            <p className="next-step">Next: Region Selection (coming soon...)</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;