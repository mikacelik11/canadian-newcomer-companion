import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import LanguageSelection from './components/LanguageSelection';
import PurposeOfVisit from './components/PurposeOfVisit';
import RegionSelection from './components/RegionSelection';
import RegionDetail from './components/RegionDetail';
import IndigenousAcknowledgement from './components/IndigenousAcknowledgement';
import Dashboard from './components/Dashboard';
import Checklist from './components/Checklist';
import Settings from './components/Settings';
import Help from './components/Help';
import CommunityResources from './components/CommunityResources';
import { 
  saveUserProfile, 
  getUserProfile, 
  setOnboardingComplete, 
  isOnboardingComplete 
} from './utils/storage';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userProfile, setUserProfile] = useState({
    language: '',
    purpose: '',
    province: '',
    location: ''
  });

  // Load saved data on mount
  useEffect(() => {
    const savedProfile = getUserProfile();
    const onboardingDone = isOnboardingComplete();

    if (savedProfile && onboardingDone) {
      setUserProfile(savedProfile);
      setCurrentStep('dashboard');
    }
  }, []);

  // Save profile whenever it changes
  useEffect(() => {
    if (userProfile.language && userProfile.province && userProfile.location) {
      saveUserProfile(userProfile);
    }
  }, [userProfile]);

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
    setOnboardingComplete(true);
    setCurrentStep('dashboard');
  };

  const handleUpdateProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    saveUserProfile(updatedProfile);
  };

  const handleNavigate = (page) => {
    if (page === 'home') {
      setCurrentStep('dashboard');
    } else if (page === 'checklist') {
      setCurrentStep('checklist');
    } else if (page === 'land') {
      setCurrentStep('indigenous');
    } else if (page === 'settings') {
      setCurrentStep('settings');
    } else if (page === 'help') {
      setCurrentStep('help');
    } else if (page === 'resources') {
      setCurrentStep('resources');
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
          onNavigate={handleNavigate}
        />
      )}

      {currentStep === 'dashboard' && (
        <Dashboard 
          userProfile={userProfile}
          onNavigate={handleNavigate}
        />
      )}

      {currentStep === 'checklist' && (
        <Checklist
          userProfile={userProfile}
          onNavigate={handleNavigate}
        />
      )}

      {currentStep === 'settings' && (
        <Settings
          userProfile={userProfile}
          onUpdateProfile={handleUpdateProfile}
          onNavigate={handleNavigate}
        />
      )}

      {currentStep === 'help' && (
        <Help onNavigate={handleNavigate} />
      )}

      {currentStep === 'resources' && (
        <CommunityResources
          userProfile={userProfile}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}

export default App;