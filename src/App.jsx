import React, { useState } from 'react';
import Welcome from './components/Welcome';
import LanguageSelection from './components/LanguageSelection';
import PurposeOfVisit from './components/PurposeOfVisit';
import RegionSelection from './components/RegionSelection';
import RegionDetail from './components/RegionDetail';

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
    setCurrentStep('complete');
  };

  const handleRegionDetailPrevious = () => {
    setCurrentStep('region');
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

      {currentStep === 'complete' && (
        <div className="completion-message">
          <h1>✅ Onboarding Complete!</h1>
          <div className="progress-info">
            <h2>Your Selections:</h2>
            <p><strong>Language:</strong> {selectedLanguage}</p>
            <p><strong>Purpose:</strong> {selectedPurpose}</p>
            <p><strong>Province:</strong> {selectedProvince}</p>
            <p><strong>Location:</strong> {selectedLocation}</p>
            <p className="next-step">
              Next steps: Dashboard, Checklist, and Indigenous Land Acknowledgement
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;