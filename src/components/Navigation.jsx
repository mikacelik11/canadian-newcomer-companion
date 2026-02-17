import React from 'react';
import { useAuth } from '../context/AuthContext';

function Navigation({ currentPage, onNavigate }) {
  const { isAuthenticated, user, logout } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'checklist', label: 'Checklist', icon: '✓' },
    { id: 'resources', label: 'Resources', icon: '🏘️' },
    { id: 'land', label: 'Land Acknowledgement', icon: '🍁' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'help', label: 'Help', icon: '❓' }
  ];

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      window.location.reload(); // Reload to reset app state
    }
  };

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>

        {isAuthenticated && (
          <div className="nav-user-section">
            <span className="nav-user-name">👤 {user?.name || user?.email}</span>
            <button 
              className="nav-logout-btn"
              onClick={handleLogout}
              title="Logout"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;