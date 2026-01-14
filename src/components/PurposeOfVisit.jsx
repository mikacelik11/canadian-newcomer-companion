import React, { useState } from 'react';

function PurposeOfVisit({ onNext, onPrevious }) {
  const [selectedPurpose, setSelectedPurpose] = useState('');

  const purposes = [
    {
      id: 'immigration',
      title: 'Immigration',
      description: 'Permanent residents planning to settle in Canada'
    },
    {
      id: 'temporary',
      title: 'Temporary Visit',
      description: 'Students, workers, or temporary residents'
    },
    {
      id: 'travel',
      title: 'Travel',
      description: 'Tourists and visitors exploring Canada'
    }
  ];

  const handlePurposeSelect = (purposeId) => {
    setSelectedPurpose(purposeId);
  };

  const handleNext = () => {
    if (selectedPurpose) {
      onNext(selectedPurpose);
    }
  };

  return (
    <div className="purpose-container">
      <div className="government-header">
        <div className="canada-flag">🍁</div>
        <div className="government-text">
          <span>Government</span>
          <span>Gouvernement</span>
        </div>
        <div className="government-text">
          <span>of Canada</span>
          <span>du Canada</span>
        </div>
        <div className="canada-wordmark">Canada</div>
      </div>

      <div className="purpose-content">
        <h1 className="purpose-title">Purpose of Visit</h1>

        <div className="purpose-options">
          {purposes.map((purpose) => (
            <button
              key={purpose.id}
              className={`purpose-card ${selectedPurpose === purpose.id ? 'selected' : ''}`}
              onClick={() => handlePurposeSelect(purpose.id)}
            >
              <h3 className="purpose-card-title">{purpose.title}</h3>
              <p className="purpose-card-description">{purpose.description}</p>
            </button>
          ))}
        </div>

        <div className="navigation-buttons">
          <button className="btn btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
            disabled={!selectedPurpose}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurposeOfVisit;