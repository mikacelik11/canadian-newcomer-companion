import React, { useState } from 'react';
import Welcome from './components/Welcome';
import LanguageSelection from './components/LanguageSelection';
import PurposeOfVisit from './components/PurposeOfVisit';
import RegionSelection from './components/RegionSelection';
import RegionDetail from './components/RegionDetail';
import IndigenousAcknowledgement from './components/IndigenousAcknowledgement';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

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
    setCurrentStep('region');
  };

  const handlePurposePrevious = () => {
    setCurrentStep('language');
  };

  const handleRegionNext = (province) => {
    setSelectedProvince(province);
    setCurrentStep('regionDetail');
  };

  const handleRegionPrevious = () => {
    setCurrentStep('purpose');
  };

  const handleRegionDetailNext = (location) => {
    setSelectedLocation(location);
    setCurrentStep('indigenous');
  };

  const handleRegionDetailPrevious = () => {
    setCurrentStep('region');
  };

  const handleIndigenousNext = () => {
    setCurrentStep('dashboard');
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

      {currentStep === 'region' && (
        <RegionSelection
          onNext={handleRegionNext}
          onPrevious={handleRegionPrevious}
        />
      )}

      {currentStep === 'regionDetail' && (
        <RegionDetail
          province={selectedProvince}
          onNext={handleRegionDetailNext}
          onPrevious={handleRegionDetailPrevious}
        />
      )}

      {currentStep === 'indigenous' && (
        <IndigenousAcknowledgement
          province={selectedProvince}
          location={selectedLocation}
          onNext={handleIndigenousNext}
        />
      )}

      {currentStep === 'dashboard' && (
        <div className="completion-message">
          <h1>🎉 Welcome to Your Dashboard!</h1>
          <div className="progress-info">
            <h2>Your Profile:</h2>
            <p><strong>Language:</strong> {selectedLanguage}</p>
            <p><strong>Purpose:</strong> {selectedPurpose}</p>
            <p><strong>Province:</strong> {selectedProvince}</p>
            <p><strong>Location:</strong> {selectedLocation}</p>
            <p className="next-step">
              Coming next: Personalized checklist, tasks, and resources for your region
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;