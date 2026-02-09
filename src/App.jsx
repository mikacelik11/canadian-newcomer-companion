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
import Loading from './components/Loading';
import PageTransition from './components/PageTransition';
import { 
  saveUserProfile, 
  getUserProfile, 
  setOnboardingComplete, 
  isOnboardingComplete 
} from './utils/storage';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userProfile, setUserProfile] = useState({
    language: '',
    purpose: '',
    province: '',
    location: ''
  });

  // Load saved data on mount
  useEffect(() => {
    const loadData = async () => {
      // Simulate loading time for smooth experience
      await new Promise(resolve => setTimeout(resolve, 800));
    
      const savedProfile = await getUserProfile(); // Now async
      const onboardingDone = isOnboardingComplete();

      if (savedProfile && onboardingDone) {
        setUserProfile(savedProfile);
        setCurrentStep('dashboard');
      }
    
      setIsLoading(false);
    };

    loadData();
  }, []);

// Save profile whenever it changes
  useEffect(() => {
    const saveProfile = async () => {
      if (userProfile.language && userProfile.province && userProfile.location) {
        await saveUserProfile(userProfile); // Now async
      }
    };
  
    saveProfile();
  }, [userProfile]);

  // Handle page transitions
  const transitionToStep = (newStep) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(newStep);
      setIsTransitioning(false);
      window.scrollTo(0, 0); // Scroll to top on page change
    }, 300);
  };

  const handleWelcomeNext = () => {
    transitionToStep('language');
  };

  const handleLanguageNext = (language) => {
    setUserProfile(prev => ({ ...prev, language }));
    transitionToStep('purpose');
  };

  const handleLanguagePrevious = () => {
    transitionToStep('welcome');
  };

  const handlePurposeNext = (purpose) => {
    setUserProfile(prev => ({ ...prev, purpose }));
    transitionToStep('region');
  };

  const handlePurposePrevious = () => {
    transitionToStep('language');
  };

  const handleRegionNext = (province) => {
    setUserProfile(prev => ({ ...prev, province }));
    transitionToStep('regionDetail');
  };

  const handleRegionPrevious = () => {
    transitionToStep('purpose');
  };

  const handleRegionDetailNext = (location) => {
    setUserProfile(prev => ({ ...prev, location }));
    transitionToStep('indigenous');
  };

  const handleRegionDetailPrevious = () => {
    transitionToStep('region');
  };

  const handleIndigenousNext = () => {
    setOnboardingComplete(true);
    transitionToStep('dashboard');
  };

  const handleUpdateProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    saveUserProfile(updatedProfile);
  };

  const handleNavigate = (page) => {
    if (page === 'home') {
      transitionToStep('dashboard');
    } else if (page === 'checklist') {
      transitionToStep('checklist');
    } else if (page === 'land') {
      transitionToStep('indigenous');
    } else if (page === 'settings') {
      transitionToStep('settings');
    } else if (page === 'help') {
      transitionToStep('help');
    } else if (page === 'resources') {
      transitionToStep('resources');
    } else {
      alert(`${page} page coming soon!`);
    }
  };

  // Show loading screen on initial load
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`app ${isTransitioning ? 'transitioning' : ''}`}>
      <PageTransition>
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
      </PageTransition>
    </div>
  );
}

export default App;