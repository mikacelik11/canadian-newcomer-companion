import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login({ onNext, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await login(email, password);

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
          <h1 className="welcome-title">Welcome Back</h1>
          <p className="welcome-subtitle">
            Sign in to continue your settlement journey
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            <p className="switch-auth">
              Don't have an account?{' '}
              <button 
                type="button" 
                onClick={onSwitchToRegister}
                className="link-button"
              >
                Register here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;