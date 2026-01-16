import React, { useState } from 'react';

function RegionSelection({ onNext, onPrevious }) {
  const [selectedProvince, setSelectedProvince] = useState('');

  const provinces = [
    { id: 'BC', name: 'British Columbia', abbr: 'BC' },
    { id: 'AB', name: 'Alberta', abbr: 'AB' },
    { id: 'SK', name: 'Saskatchewan', abbr: 'SK' },
    { id: 'MB', name: 'Manitoba', abbr: 'MB' },
    { id: 'ON', name: 'Ontario', abbr: 'ON' },
    { id: 'QC', name: 'Quebec', abbr: 'QC' },
    { id: 'NB', name: 'New Brunswick', abbr: 'NB' },
    { id: 'NS', name: 'Nova Scotia', abbr: 'NS' },
    { id: 'PE', name: 'Prince Edward Island', abbr: 'PE' },
    { id: 'NL', name: 'Newfoundland and Labrador', abbr: 'NL' },
    { id: 'YT', name: 'Yukon', abbr: 'YT' },
    { id: 'NT', name: 'Northwest Territories', abbr: 'NT' },
    { id: 'NU', name: 'Nunavut', abbr: 'NU' }
  ];

  const handleProvinceSelect = (provinceId) => {
    setSelectedProvince(provinceId);
  };

  const handleNext = () => {
    if (selectedProvince) {
      onNext(selectedProvince);
    }
  };

  return (
    <div className="region-container">
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

      <div className="region-content">
        <h1 className="region-title">Select Region</h1>
        <p className="region-description">
          Choose your province or territory to receive localized information
        </p>

        <div className="canada-map-container">
          <div className="map-placeholder">
            <svg viewBox="0 0 800 600" className="canada-map">
              {/* Simplified visual map - provinces as clickable regions */}
              
              {/* BC */}
              <rect x="50" y="280" width="80" height="100" 
                    className={`province ${selectedProvince === 'BC' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('BC')} />
              <text x="90" y="335" className="province-label" 
                    onClick={() => handleProvinceSelect('BC')}>BC</text>

              {/* AB */}
              <rect x="140" y="260" width="70" height="120" 
                    className={`province ${selectedProvince === 'AB' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('AB')} />
              <text x="175" y="325" className="province-label"
                    onClick={() => handleProvinceSelect('AB')}>AB</text>

              {/* SK */}
              <rect x="220" y="240" width="70" height="140" 
                    className={`province ${selectedProvince === 'SK' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('SK')} />
              <text x="255" y="315" className="province-label"
                    onClick={() => handleProvinceSelect('SK')}>SK</text>

              {/* MB */}
              <rect x="300" y="250" width="70" height="130" 
                    className={`province ${selectedProvince === 'MB' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('MB')} />
              <text x="335" y="320" className="province-label"
                    onClick={() => handleProvinceSelect('MB')}>MB</text>

              {/* ON */}
              <rect x="380" y="280" width="100" height="100" 
                    className={`province ${selectedProvince === 'ON' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('ON')} />
              <text x="430" y="335" className="province-label"
                    onClick={() => handleProvinceSelect('ON')}>ON</text>

              {/* QC */}
              <rect x="490" y="260" width="100" height="120" 
                    className={`province ${selectedProvince === 'QC' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('QC')} />
              <text x="540" y="325" className="province-label"
                    onClick={() => handleProvinceSelect('QC')}>QC</text>

              {/* NB */}
              <rect x="600" y="340" width="50" height="40" 
                    className={`province ${selectedProvince === 'NB' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('NB')} />
              <text x="625" y="365" className="province-label"
                    onClick={() => handleProvinceSelect('NB')}>NB</text>

              {/* NS */}
              <rect x="660" y="360" width="60" height="30" 
                    className={`province ${selectedProvince === 'NS' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('NS')} />
              <text x="690" y="380" className="province-label"
                    onClick={() => handleProvinceSelect('NS')}>NS</text>

              {/* PE */}
              <rect x="650" y="330" width="40" height="20" 
                    className={`province ${selectedProvince === 'PE' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('PE')} />
              <text x="670" y="345" className="province-label"
                    onClick={() => handleProvinceSelect('PE')}>PE</text>

              {/* NL */}
              <rect x="680" y="240" width="60" height="80" 
                    className={`province ${selectedProvince === 'NL' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('NL')} />
              <text x="710" y="285" className="province-label"
                    onClick={() => handleProvinceSelect('NL')}>NL</text>

              {/* Territories - Top */}
              {/* YT */}
              <rect x="80" y="100" width="60" height="70" 
                    className={`province ${selectedProvince === 'YT' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('YT')} />
              <text x="110" y="140" className="province-label"
                    onClick={() => handleProvinceSelect('YT')}>YT</text>

              {/* NT */}
              <rect x="150" y="80" width="140" height="150" 
                    className={`province ${selectedProvince === 'NT' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('NT')} />
              <text x="220" y="160" className="province-label"
                    onClick={() => handleProvinceSelect('NT')}>NT</text>

              {/* NU */}
              <rect x="300" y="60" width="180" height="170" 
                    className={`province ${selectedProvince === 'NU' ? 'selected' : ''}`}
                    onClick={() => handleProvinceSelect('NU')} />
              <text x="390" y="150" className="province-label"
                    onClick={() => handleProvinceSelect('NU')}>NU</text>
            </svg>
          </div>

          {selectedProvince && (
            <div className="selected-region-info">
              <p>
                <strong>Selected:</strong>{' '}
                {provinces.find(p => p.id === selectedProvince)?.name}
              </p>
            </div>
          )}
        </div>

        <div className="navigation-buttons">
          <button className="btn btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
            disabled={!selectedProvince}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegionSelection;