import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Register({ onNext, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    const result = await register(formData.email, formData.password, formData.name);

    if (result.success) {
      onNext();
    } else {
      setError(result.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="onboarding-container">
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

      <div className="onboarding-content">
        <div className="welcome-card">
          <h1 className="welcome-title">Create Your Account</h1>
          <p className="welcome-subtitle">
            Sign up to save your progress and access your checklist from anywhere
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="At least 6 characters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter your password"
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>

            <p className="switch-auth">
              Already have an account?{' '}
              <button 
                type="button" 
                onClick={onSwitchToLogin}
                className="link-button"
              >
                Sign in here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;