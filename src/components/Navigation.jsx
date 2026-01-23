import React from 'react';

function Navigation({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'checklist', label: 'Checklist', icon: '✓' },
    { id: 'resources', label: 'Resources', icon: '🏘️' },
    { id: 'land', label: 'Land Acknowledgement', icon: '🍁' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'help', label: 'Help', icon: '❓' }
  ];

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="nav-logo">🍁</span>
          <span className="nav-title">Canadian Newcomer Companion</span>
        </div>
        
        <div className="nav-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              title={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;