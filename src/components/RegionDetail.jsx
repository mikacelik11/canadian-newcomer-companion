import React, { useState } from 'react';

function RegionDetail({ province, onNext, onPrevious }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Sample locations for BC (you can expand this later)
  const locations = {
    BC: [
      'University of Victoria',
      'University of British Columbia',
      'Vancouver',
      'Victoria',
      'Kelowna',
      'Kamloops',
      'Prince George'
    ],
    ON: [
      'Toronto',
      'Ottawa',
      'Mississauga',
      'Hamilton',
      'London'
    ],
    // Add more provinces as needed
  };

  const currentLocations = locations[province] || ['Location data coming soon...'];

  const filteredLocations = currentLocations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNext = () => {
    if (selectedLocation) {
      onNext(selectedLocation);
    }
  };

  const provinceName = {
    BC: 'British Columbia',
    AB: 'Alberta',
    SK: 'Saskatchewan',
    MB: 'Manitoba',
    ON: 'Ontario',
    QC: 'Quebec',
    NB: 'New Brunswick',
    NS: 'Nova Scotia',
    PE: 'Prince Edward Island',
    NL: 'Newfoundland and Labrador',
    YT: 'Yukon',
    NT: 'Northwest Territories',
    NU: 'Nunavut'
  }[province];

  return (
    <div className="region-detail-container">
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

      <div className="region-detail-content">
        <h1 className="region-detail-title">
          Select Region in {provinceName}
        </h1>

        <div className="location-search">
          <label htmlFor="location-search" className="search-label">
            Enter Postal Code or Address
          </label>
          <input
            id="location-search"
            type="text"
            className="search-input"
            placeholder="University of Vic"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="location-results">
            {filteredLocations.map((location, index) => (
              <button
                key={index}
                className={`location-option ${selectedLocation === location ? 'selected' : ''}`}
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="btn btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
            disabled={!selectedLocation}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegionDetail;