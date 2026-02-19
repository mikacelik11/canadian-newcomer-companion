import React from 'react';

function CustomHeader() {
  return (
    <div className="custom-header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🍁</span>
          <div className="logo-text">
            <h1 className="app-name">Canadian Newcomer Companion</h1>
            <p className="app-tagline">Your Independent Settlement Guide</p>
          </div>
        </div>
        <div className="disclaimer-badge">
          Independent Resource
        </div>
      </div>
    </div>
  );
}

export default CustomHeader;