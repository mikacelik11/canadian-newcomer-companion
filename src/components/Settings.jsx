import React, { useState } from 'react';
import Navigation from './Navigation';

import { useAuth } from '../context/AuthContext';


function Settings({ userProfile, onUpdateProfile, onNavigate }) {
  const { isAuthenticated, user } = useAuth();
  const [isEditingLanguage, setIsEditingLanguage] = useState(false);
  const [isEditingPurpose, setIsEditingPurpose] = useState(false);
  const [isEditingRegion, setIsEditingRegion] = useState(false);

  const [tempLanguage, setTempLanguage] = useState(userProfile.language);
  const [tempPurpose, setTempPurpose] = useState(userProfile.purpose);
  const [tempProvince, setTempProvince] = useState(userProfile.province);
  const [tempLocation, setTempLocation] = useState(userProfile.location);

  const languages = ['English', 'Français'];
  const purposes = ['immigration', 'temporary', 'travel'];
  const provinces = [
    { id: 'BC', name: 'British Columbia' },
    { id: 'AB', name: 'Alberta' },
    { id: 'SK', name: 'Saskatchewan' },
    { id: 'MB', name: 'Manitoba' },
    { id: 'ON', name: 'Ontario' },
    { id: 'QC', name: 'Quebec' },
    { id: 'NB', name: 'New Brunswick' },
    { id: 'NS', name: 'Nova Scotia' },
    { id: 'PE', name: 'Prince Edward Island' },
    { id: 'NL', name: 'Newfoundland and Labrador' },
    { id: 'YT', name: 'Yukon' },
    { id: 'NT', name: 'Northwest Territories' },
    { id: 'NU', name: 'Nunavut' }
  ];

  const handleSaveLanguage = () => {
    onUpdateProfile({ ...userProfile, language: tempLanguage });
    setIsEditingLanguage(false);
  };

  const handleSavePurpose = () => {
    onUpdateProfile({ ...userProfile, purpose: tempPurpose });
    setIsEditingPurpose(false);
  };

  const handleSaveRegion = () => {
    onUpdateProfile({ 
      ...userProfile, 
      province: tempProvince,
      location: tempLocation 
    });
    setIsEditingRegion(false);
  };

  const handleCancelLanguage = () => {
    setTempLanguage(userProfile.language);
    setIsEditingLanguage(false);
  };

  const handleCancelPurpose = () => {
    setTempPurpose(userProfile.purpose);
    setIsEditingPurpose(false);
  };

  const handleCancelRegion = () => {
    setTempProvince(userProfile.province);
    setTempLocation(userProfile.location);
    setIsEditingRegion(false);
  };

  const getProvinceName = (id) => {
    return provinces.find(p => p.id === id)?.name || id;
  };

  const getPurposeLabel = (purpose) => {
    const labels = {
      'immigration': 'Immigration',
      'temporary': 'Temporary Visit',
      'travel': 'Travel'
    };
    return labels[purpose] || purpose;
  };

  return (
    <div className="settings-container">
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

      <Navigation currentPage="settings" onNavigate={onNavigate} />

      <div className="settings-content">
        <header className="settings-header">
          <h1 className="settings-title">Settings</h1>
          <p className="settings-subtitle">
            Update your preferences and profile information
          </p>
        </header>

        {/* Account Information (if logged in) */}
{isAuthenticated && (
  <div className="setting-card">
    <h2 className="setting-title">Account Information</h2>
    <div className="account-info">
      <div className="info-row">
        <span className="info-label">Name:</span>
        <span className="info-value">{user?.name || 'Not set'}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Email:</span>
        <span className="info-value">{user?.email}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Account Type:</span>
        <span className="info-value">Registered User</span>
      </div>
    </div>
  </div>
)}

{/* Guest Mode Notice */}
{!isAuthenticated && (
  <div className="setting-card guest-notice">
    <h2 className="setting-title">⚠️ Guest Mode</h2>
    <p>You're using the app as a guest. Your data is only saved locally and won't sync across devices.</p>
    <p>Create an account to save your progress in the cloud!</p>
  </div>
)}

        {/* Language Setting */}
        <section className="setting-section">
          <div className="setting-card">
            <div className="setting-header">
              <div className="setting-icon">🌐</div>
              <div className="setting-info">
                <h2 className="setting-title">Language</h2>
                <p className="setting-description">
                  Change the language used throughout the app
                </p>
              </div>
            </div>

            {!isEditingLanguage ? (
              <div className="setting-display">
                <div className="setting-value">{userProfile.language}</div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setIsEditingLanguage(true)}
                >
                  Change Language
                </button>
              </div>
            ) : (
              <div className="setting-edit">
                <div className="language-options">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      className={`language-option ${tempLanguage === lang ? 'selected' : ''}`}
                      onClick={() => setTempLanguage(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <div className="setting-actions">
                  <button className="btn btn-secondary" onClick={handleCancelLanguage}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={handleSaveLanguage}>
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Purpose of Visit Setting */}
        <section className="setting-section">
          <div className="setting-card">
            <div className="setting-header">
              <div className="setting-icon">✈️</div>
              <div className="setting-info">
                <h2 className="setting-title">Purpose of Visit</h2>
                <p className="setting-description">
                  Update why you're coming to Canada
                </p>
              </div>
            </div>

            {!isEditingPurpose ? (
              <div className="setting-display">
                <div className="setting-value">{getPurposeLabel(userProfile.purpose)}</div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setIsEditingPurpose(true)}
                >
                  Change Purpose
                </button>
              </div>
            ) : (
              <div className="setting-edit">
                <div className="purpose-options">
                  <button
                    className={`purpose-option ${tempPurpose === 'immigration' ? 'selected' : ''}`}
                    onClick={() => setTempPurpose('immigration')}
                  >
                    <h4>Immigration</h4>
                    <p>Permanent residents planning to settle</p>
                  </button>
                  <button
                    className={`purpose-option ${tempPurpose === 'temporary' ? 'selected' : ''}`}
                    onClick={() => setTempPurpose('temporary')}
                  >
                    <h4>Temporary Visit</h4>
                    <p>Students, workers, or temporary residents</p>
                  </button>
                  <button
                    className={`purpose-option ${tempPurpose === 'travel' ? 'selected' : ''}`}
                    onClick={() => setTempPurpose('travel')}
                  >
                    <h4>Travel</h4>
                    <p>Tourists and visitors</p>
                  </button>
                </div>
                <div className="setting-actions">
                  <button className="btn btn-secondary" onClick={handleCancelPurpose}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={handleSavePurpose}>
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Region Setting */}
        <section className="setting-section">
          <div className="setting-card">
            <div className="setting-header">
              <div className="setting-icon">📍</div>
              <div className="setting-info">
                <h2 className="setting-title">Region</h2>
                <p className="setting-description">
                  Update your province and location
                </p>
              </div>
            </div>

            {!isEditingRegion ? (
              <div className="setting-display">
                <div className="setting-value">
                  {userProfile.location}, {getProvinceName(userProfile.province)}
                </div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setIsEditingRegion(true)}
                >
                  Change Region
                </button>
              </div>
            ) : (
              <div className="setting-edit">
                <div className="region-form">
                  <div className="form-group">
                    <label htmlFor="province">Province/Territory</label>
                    <select
                      id="province"
                      value={tempProvince}
                      onChange={(e) => setTempProvince(e.target.value)}
                      className="form-select"
                    >
                      {provinces.map(prov => (
                        <option key={prov.id} value={prov.id}>
                          {prov.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">City or Location</label>
                    <input
                      id="location"
                      type="text"
                      value={tempLocation}
                      onChange={(e) => setTempLocation(e.target.value)}
                      className="form-input"
                      placeholder="e.g., University of Victoria"
                    />
                  </div>
                </div>
                <div className="setting-actions">
                  <button className="btn btn-secondary" onClick={handleCancelRegion}>
                    Cancel
                  </button>
                  <button 
                    className="btn btn-primary" 
                    onClick={handleSaveRegion}
                    disabled={!tempLocation.trim()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Accessibility Options */}
        <section className="setting-section">
          <div className="setting-card">
            <div className="setting-header">
              <div className="setting-icon">♿</div>
              <div className="setting-info">
                <h2 className="setting-title">Accessibility</h2>
                <p className="setting-description">
                  Customize your experience for better accessibility
                </p>
              </div>
            </div>

            <div className="setting-display">
              <div className="accessibility-options">
                <label className="checkbox-option">
                  <input type="checkbox" />
                  <span>Increase font size</span>
                </label>
                <label className="checkbox-option">
                  <input type="checkbox" />
                  <span>High contrast mode</span>
                </label>
                <label className="checkbox-option">
                  <input type="checkbox" />
                  <span>Reduce animations</span>
                </label>
              </div>
              <p className="coming-soon-note">Coming soon in future updates</p>
            </div>
          </div>
        </section>

        {/* Account Actions */}
        <section className="setting-section">
          <div className="setting-card danger-card">
            <div className="setting-header">
              <div className="setting-icon">⚠️</div>
              <div className="setting-info">
                <h2 className="setting-title">Danger Zone</h2>
                <p className="setting-description">
                  Irreversible actions that affect your data
                </p>
              </div>
            </div>

            <div className="setting-display">
              <button 
                className="btn btn-warning"
                onClick={() => {
                  if (window.confirm('This will reset all your progress and preferences. Are you sure?')) {
                    localStorage.clear();
                    window.location.reload();
                  }
                }}
              >
                Reset All Data
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;