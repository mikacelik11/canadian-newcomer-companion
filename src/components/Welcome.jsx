import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import CustomHeader from './CustomHeader';
import Footer from './Footer';

function Welcome({ onNext }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (showLogin) {
    return (
      <Login 
        onNext={onNext}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
    );
  }

  if (showRegister) {
    return (
      <Register 
        onNext={onNext}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    );
  }

  return (
    <div className="onboarding-container">
      <CustomHeader />

      <div className="onboarding-content">
        {/* Rest of your welcome content stays the same */}
        <div className="welcome-card">
          <h1 className="welcome-title">
            Welcome to the Canadian Newcomer Companion
          </h1>
          <p className="welcome-subtitle">
            Your step-by-step guide to settling in Canada. We'll help you navigate everything from 
            healthcare to housing, all in one place.
          </p>

          <div className="action-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </button>

            <button 
              className="btn btn-secondary"
              onClick={() => setShowRegister(true)}
            >
              Create Account
            </button>

            <button 
              className="btn btn-outline"
              onClick={onNext}
            >
              Continue as Guest
            </button>
          </div>

          <div className="welcome-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Personalized checklist for your region</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📍</span>
              <span>Local resources and support services</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🍁</span>
              <span>Indigenous land acknowledgements</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💾</span>
              <span>Save progress and access from anywhere</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Welcome;