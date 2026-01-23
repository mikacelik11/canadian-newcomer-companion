import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { clearAllData, getTaskProgress } from '../utils/storage';


function Dashboard({ userProfile, onNavigate }) {
  const { language, purpose, province, location } = userProfile;
  const [completedCount, setCompletedCount] = useState(0);
  const totalCount = 11; // Total tasks in checklist

  useEffect(() => {
    const taskProgress = getTaskProgress();
    if (taskProgress) {
      const completed = taskProgress.filter(task => task.completed).length;
      setCompletedCount(completed);
    }
    }, []);

  const quickTasks = [
    {
      id: 1,
      title: 'Get BC Services Card',
      description: 'Apply for your health care card. Required for accessing healthcare services.',
      status: 'not-started',
      category: 'Identification'
    },
    {
      id: 2,
      title: 'Apply for SIN',
      description: 'Social Insurance Number. What you need: Work Permit, Study Permit, or Proof of Address.',
      status: 'not-started',
      category: 'Identification'
    },
    {
      id: 3,
      title: 'Open a Bank Account',
      description: 'Set up your Canadian bank account. Bring: Passport, Study Permit, Proof of Address.',
      status: 'not-started',
      category: 'Banking'
    },
    {
      id: 4,
      title: 'Get ICBC Driver\'s License',
      description: 'Apply for a BC driver\'s license. ICBC Office: Visit Hillside Ave or Douglas St.',
      status: 'not-started',
      category: 'Transportation'
    }
  ];

  const helpfulServices = [
    {
      title: 'Healthcare Service Plan',
      description: 'Register for BC\'s Medical Services Plan (MSP)',
      link: '#'
    },
    {
      title: 'Find a Family Doctor',
      description: 'Connect with healthcare providers in your area',
      link: '#'
    },
    {
      title: 'Public Transit Passes',
      description: 'Get your BC Transit pass for Victoria',
      link: '#'
    },
    {
      title: 'Local Community Centers',
      description: 'Find community events and settlement services',
      link: '#'
    },
    {
      title: 'Housing Resources',
      description: 'Find rental listings and tenant rights info',
      link: '#'
    },
    {
      title: 'Employment Services',
      description: 'Job search support and resume building',
      link: '#'
    }
  ];

  return (
    <div className="dashboard-container">
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

      <Navigation currentPage="home" onNavigate={onNavigate} />

      <div className="dashboard-content">
        {/* Welcome Section */}
        <section className="welcome-banner">
          <h1 className="dashboard-title">
            Welcome—let's get you set up in {province}
          </h1>
          <p className="dashboard-subtitle">
            We've put together a simple checklist tailored just for you in <strong>{location}</strong>.
            Let's help you get settled with confidence and connect you to the support you need.
          </p>
        </section>

        {/* Progress Overview */}
        <section className="progress-section">
          <div className="progress-card">
            <h2 className="section-title">Your Progress</h2>
            <div className="progress-stats">
          <div className="stat-item">
            <div className="stat-number">{completedCount}/{totalCount}</div>
              <div className="stat-label">Complete</div>
            </div>
            <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${Math.round((completedCount / totalCount) * 100)}%` }}></div>
          </div>
        </div>
            <button className="btn btn-primary" onClick={() => onNavigate('checklist')}>
              View Full Checklist
            </button>
          </div>

          <div className="info-card">
            <h3>Your Profile</h3>
            <div className="profile-info">
              <p><strong>Region:</strong> {location}, {province}</p>
              <p><strong>Purpose:</strong> {purpose}</p>
              <p><strong>Language:</strong> {language}</p>
            </div>
            <button className="btn btn-secondary" onClick={() => onNavigate('settings')}>
              Change Settings
            </button>
            <button 
              className="btn btn-warning" 
              onClick={() => {
                if (window.confirm('Are you sure? This will reset all your progress and preferences.')) {
                  clearAllData();
                  window.location.reload();
                }
              }}
              style={{ marginTop: '0.5rem' }}
            >
              Reset All Progress
            </button>
          </div>
        </section>

        {/* Quick Tasks */}
        <section className="tasks-section">
          <h2 className="section-title">Get the Essentials Done</h2>
          <p className="section-description">
            Here's what to tackle first in your settlement journey.
          </p>
          
          <div className="tasks-grid">
            {quickTasks.map((task) => (
              <div key={task.id} className="task-card">
                <div className="task-header">
                  <span className="task-category">{task.category}</span>
                  <span className="task-status not-started">Start Task</span>
                </div>
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <button className="task-button" onClick={() => onNavigate('tasks')}>
                  Open Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Helpful Services */}
        <section className="services-section">
          <h2 className="section-title">Helpful Services in BC</h2>
          <div className="services-grid">
            {helpfulServices.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="service-link">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;