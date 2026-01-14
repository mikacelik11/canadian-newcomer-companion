import React from 'react';

function Welcome({ onNext }) {
  return (
    <div className="welcome-container">
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

      <div className="welcome-content">
        <h1 className="welcome-title">
          Welcome!<br />
          Bienvenu!
        </h1>

        <p className="welcome-subtitle">Canadian Newcomer Companion</p>

        <div className="welcome-actions">
          <button className="btn btn-primary" onClick={onNext}>
            Login as GuestUser
          </button>
          <button className="btn btn-primary" onClick={onNext}>
            Make an Account<br />
            <span className="small-text">(Enter un compte)</span>
          </button>
          <button className="btn btn-secondary" onClick={onNext}>
            Skip for Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;