import React, { useState } from 'react';
import CustomHeader from './CustomHeader';

function LanguageSelection({ onNext, onPrevious }) {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleNext = () => {
    if (selectedLanguage) {
      onNext(selectedLanguage);
    }
  };

  return (
    <div className="language-selection-container">
      <CustomHeader />

      <div className="language-content">
        <h1 className="language-title">Choose Your Language</h1>
        
        <p className="language-description">
          Select the language you'd like to use in the app. You can change this anytime in Settings.
        </p>

        <div className="language-options">
          <button
            className={`language-btn ${selectedLanguage === 'English' ? 'selected' : ''}`}
            onClick={() => handleLanguageSelect('English')}
          >
            English
          </button>

          <button
            className={`language-btn ${selectedLanguage === 'Français' ? 'selected' : ''}`}
            onClick={() => handleLanguageSelect('Français')}
          >
            Français
          </button>

          <button
            className="language-btn disabled"
            disabled
          >
            More Coming Soon
          </button>
        </div>

        <div className="navigation-buttons">
          <button className="btn btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
            disabled={!selectedLanguage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelection;