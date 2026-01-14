import React, { useState } from 'react';
import Welcome from './components/Welcome';
import LanguageSelection from './components/LanguageSelection';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleWelcomeNext = () => {
    setCurrentStep('language');
  };

  const handleLanguageNext = (language) => {
    setSelectedLanguage(language);
    setCurrentStep('complete'); // We'll build more later
  };

  const handleLanguagePrevious = () => {
    setCurrentStep('welcome');
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

      {currentStep === 'complete' && (
        <div className="completion-message">
          <h1>Setup Complete!</h1>
          <p>Selected Language: {selectedLanguage}</p>
          <p>More onboarding steps coming next...</p>
        </div>
      )}
    </div>
  );
}

export default App;