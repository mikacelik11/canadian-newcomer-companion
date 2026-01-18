import React, { useState } from 'react';
import Welcome from './components/Welcome';
import LanguageSelection from './components/LanguageSelection';
import PurposeOfVisit from './components/PurposeOfVisit';
import RegionSelection from './components/RegionSelection';
import RegionDetail from './components/RegionDetail';
import IndigenousAcknowledgement from './components/IndigenousAcknowledgement';
import Dashboard from './components/Dashboard';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userProfile, setUserProfile] = useState({
    language: '',
    purpose: '',
    province: '',
    location: ''
  });

  const handleWelcomeNext = () => {
    setCurrentStep('language');
  };

  const handleLanguageNext = (language) => {
    setUserProfile(prev => ({ ...prev, language }));
    setCurrentStep('purpose');
  };

  const handleLanguagePrevious = () => {
    setCurrentStep('welcome');
  };

  const handlePurposeNext = (purpose) => {
    setUserProfile(prev => ({ ...prev, purpose }));
    setCurrentStep('region');
  };

  const handlePurposePrevious = () => {
    setCurrentStep('language');
  };

  const handleRegionNext = (province) => {
    setUserProfile(prev => ({ ...prev, province }));
    setCurrentStep('regionDetail');
  };

  const handleRegionPrevious = () => {
    setCurrentStep('purpose');
  };

  const handleRegionDetailNext = (location) => {
    setUserProfile(prev => ({ ...prev, location }));
    setCurrentStep('indigenous');
  };

  const handleRegionDetailPrevious = () => {
    setCurrentStep('region');
  };

  const handleIndigenousNext = () => {
    setCurrentStep('dashboard');
  };

  const handleNavigate = (page) => {
    // For now, just show alerts - we'll build these pages next
    if (page === 'home') {
      setCurrentStep('dashboard');
    } else {
      alert(`${page} page coming soon!`);
    }
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
          province={userProfile.province}
          onNext={handleRegionDetailNext}
          onPrevious={handleRegionDetailPrevious}
        />
      )}

      {currentStep === 'indigenous' && (
        <IndigenousAcknowledgement
          province={userProfile.province}
          location={userProfile.location}
          onNext={handleIndigenousNext}
        />
      )}

      {currentStep === 'dashboard' && (
        <Dashboard 
          userProfile={userProfile}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}

export default App;