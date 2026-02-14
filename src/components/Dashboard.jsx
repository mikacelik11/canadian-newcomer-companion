import React, { useState, useEffect } from 'react'; // usestate and useffect import 
import Navigation from './Navigation';
import { clearAllData, getTaskProgress } from '../utils/storage';


function Dashboard({ userProfile, onNavigate }) {
  const { language, purpose, province, location } = userProfile; // usestate // dw
  const [completedCount, setCompletedCount] = useState(0); // Keeps track of completed count
  const totalCount = 11; // Total tasks in checklist

  useEffect(() => {
    const loadProgress = async () => {
      const taskProgress = await getTaskProgress();
      if (taskProgress) {
        const completed = taskProgress.filter(task => task.completed).length;
        setCompletedCount(completed);
      }
    };
    
    loadProgress();
  }, []);
  
  // GET PROVINCE-SPECIFIC TASKS - ADD THIS FUNCTION HERE test
  // Get province-specific tasks
const getQuickTasks = () => {
  const provinceTasks = {
    BC: [
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
        description: 'Apply for a BC driver\'s license. ICBC handles all licensing in BC.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    ON: [
      {
        id: 1,
        title: 'Get Ontario Health Card (OHIP)',
        description: 'Apply for your Ontario Health Insurance Plan card for healthcare coverage.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number needed for working and accessing benefits.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up your Canadian bank account at major banks like TD, RBC, or Scotiabank.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Ontario Driver\'s License',
        description: 'Apply at ServiceOntario. May need to complete G1, G2 road tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    AB: [
      {
        id: 1,
        title: 'Get Alberta Health Care Card',
        description: 'Register for Alberta Health Care Insurance Plan (AHCIP).',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada office.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at ATB Financial, TD, or other Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Alberta Driver\'s License',
        description: 'Apply at Alberta Registry. Exchange foreign license or take knowledge/road tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    QC: [
      {
        id: 1,
        title: 'Get Quebec Health Insurance Card',
        description: 'Apply for RAMQ (Régie de l\'assurance maladie du Québec) card.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Open account at Desjardins, National Bank, or other Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Quebec Driver\'s License',
        description: 'Apply at SAAQ. May need French language exam. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    SK: [
      {
        id: 1,
        title: 'Get Saskatchewan Health Card',
        description: 'Apply for Saskatchewan Health Services card for healthcare coverage.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Saskatchewan Driver\'s License',
        description: 'Apply at SGI Motor License Issuer. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    MB: [
      {
        id: 1,
        title: 'Get Manitoba Health Card',
        description: 'Apply for Manitoba Health card for healthcare coverage.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Manitoba Driver\'s License',
        description: 'Apply at Manitoba Public Insurance. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    NB: [
      {
        id: 1,
        title: 'Get New Brunswick Medicare Card',
        description: 'Apply for NB Medicare card for healthcare coverage.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get New Brunswick Driver\'s License',
        description: 'Apply at Service New Brunswick. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    NS: [
      {
        id: 1,
        title: 'Get Nova Scotia Health Card',
        description: 'Apply for NS MSI (Medical Services Insurance) card.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Nova Scotia Driver\'s License',
        description: 'Apply at Access Nova Scotia. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    PE: [
      {
        id: 1,
        title: 'Get PEI Health Card',
        description: 'Apply for Prince Edward Island Health Card.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get PEI Driver\'s License',
        description: 'Apply at Access PEI. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    NL: [
      {
        id: 1,
        title: 'Get Newfoundland and Labrador MCP Card',
        description: 'Apply for Medical Care Plan (MCP) card.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get NL Driver\'s License',
        description: 'Apply at Motor Registration. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    YT: [
      {
        id: 1,
        title: 'Get Yukon Health Care Card',
        description: 'Apply for Yukon Health Insurance card.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Yukon Driver\'s License',
        description: 'Apply at Motor Vehicles. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    NT: [
      {
        id: 1,
        title: 'Get NWT Health Care Card',
        description: 'Apply for Northwest Territories Health Care card.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get NWT Driver\'s License',
        description: 'Apply at Motor Vehicles. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ],
    NU: [
      {
        id: 1,
        title: 'Get Nunavut Health Care Card',
        description: 'Apply for Nunavut Health Care card.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 2,
        title: 'Apply for SIN',
        description: 'Social Insurance Number from Service Canada.',
        status: 'not-started',
        category: 'Identification'
      },
      {
        id: 3,
        title: 'Open a Bank Account',
        description: 'Set up banking at major Canadian banks.',
        status: 'not-started',
        category: 'Banking'
      },
      {
        id: 4,
        title: 'Get Nunavut Driver\'s License',
        description: 'Apply at Motor Vehicles. Exchange or take tests.',
        status: 'not-started',
        category: 'Transportation'
      }
    ]
  };

  // Return province-specific tasks or default to BC tasks
  return provinceTasks[province] || provinceTasks.BC;
};
  
  // CALL THE FUNCTION TO GET TASKS - REPLACE OLD const quickTasks = [...] WITH THIS
  const quickTasks = getQuickTasks();
  

  const helpfulServices = [
    {
      title: 'Healthcare Registration',
      description: `Register for ${province}'s healthcare plan`,
      link: '#'
    },
    {
      title: 'Find a Family Doctor',
      description: 'Connect with healthcare providers in your area',
      link: '#'
    },
    {
      title: 'Public Transit Information',
      description: `Get transit passes and routes for ${location}`,
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