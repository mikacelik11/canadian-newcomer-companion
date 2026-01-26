import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { saveTaskProgress, getTaskProgress } from '../utils/storage';

function Checklist({ userProfile, onNavigate }) {
  const { province, location } = userProfile;

  // Helper function to get province-specific tasks
  const getProvinceTasks = () => {
    const healthcareTask = {
      BC: {
        id: 1,
        title: 'Get BC Services Card',
        category: 'Identification',
        priority: 'high',
        completed: false,
        description: 'Apply for your BC Services Card to access healthcare services in British Columbia.',
        requirements: [
          'Valid passport or travel document',
          'Proof of BC residency (utility bill, rental agreement)',
          'Work Permit, Study Permit, or Proof of Address'
        ],
        steps: [
          'Visit a Service BC location or apply online',
          'Bring required documents',
          'Complete the application form',
          'Take your photo',
          'Receive temporary card immediately, permanent card arrives by mail in 2-3 weeks'
        ],
        links: [
          { text: 'Service BC Locations', url: 'https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/servicebc' },
          { text: 'Apply for MSP', url: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment/how-to-enrol' }
        ],
        estimatedTime: '1-2 hours'
      },
      ON: {
        id: 1,
        title: 'Get Ontario Health Card (OHIP)',
        category: 'Identification',
        priority: 'high',
        completed: false,
        description: 'Apply for your Ontario Health Insurance Plan (OHIP) card for healthcare coverage.',
        requirements: [
          'Valid passport or travel document',
          'Work Permit or Study Permit',
          'Proof of Ontario residency',
          'Immigration documents'
        ],
        steps: [
          'Visit a ServiceOntario location',
          'Complete application form',
          'Submit required documents',
          'Wait for 3-month waiting period (if applicable)',
          'Receive OHIP card by mail'
        ],
        links: [
          { text: 'ServiceOntario Locations', url: 'https://www.ontario.ca/page/serviceontario' },
          { text: 'OHIP Eligibility', url: 'https://www.ontario.ca/page/apply-ohip-and-get-health-card' }
        ],
        estimatedTime: '1-2 hours'
      },
      AB: {
        id: 1,
        title: 'Get Alberta Health Care Card',
        category: 'Identification',
        priority: 'high',
        completed: false,
        description: 'Register for Alberta Health Care Insurance Plan (AHCIP) for healthcare coverage.',
        requirements: [
          'Valid passport',
          'Immigration documents (Work/Study Permit)',
          'Proof of Alberta residency',
          'Social Insurance Number (helpful but not required)'
        ],
        steps: [
          'Complete online application or visit Alberta Health office',
          'Submit required documents',
          'Wait for approval',
          'Receive Alberta Health Care card by mail',
          'Note: May have 3-month waiting period'
        ],
        links: [
          { text: 'Apply for AHCIP', url: 'https://www.alberta.ca/ahcip-apply' },
          { text: 'Alberta Health Services', url: 'https://www.albertahealthservices.ca/' }
        ],
        estimatedTime: '1-2 hours'
      },
      QC: {
        id: 1,
        title: 'Get Quebec Health Insurance Card',
        category: 'Identification',
        priority: 'high',
        completed: false,
        description: 'Apply for RAMQ (Régie de l\'assurance maladie du Québec) health insurance card.',
        requirements: [
          'Valid passport',
          'Immigration documents (CSQ, Work/Study Permit)',
          'Proof of Quebec residency',
          'Birth certificate or equivalent'
        ],
        steps: [
          'Complete RAMQ application online or in person',
          'Submit required documents',
          'Attend interview if required',
          'Wait for 3-month waiting period (if applicable)',
          'Receive health insurance card by mail'
        ],
        links: [
          { text: 'RAMQ Website', url: 'https://www.ramq.gouv.qc.ca/en' },
          { text: 'Apply for Health Insurance', url: 'https://www.ramq.gouv.qc.ca/en/citizens/health-insurance' }
        ],
        estimatedTime: '1-2 hours'
      }
    };

    const driversLicenseTask = {
      BC: {
        id: 4,
        title: 'Get ICBC Driver\'s License',
        category: 'Transportation',
        priority: 'medium',
        completed: false,
        description: 'Apply for a BC driver\'s license if you plan to drive. ICBC handles all licensing in BC.',
        requirements: [
          'Valid foreign driver\'s license (if applicable)',
          'Two pieces of ID',
          'BC Services Card',
          'Eye exam from optometrist (if required)'
        ],
        steps: [
          'Determine if you need to take knowledge and road tests',
          'Visit ICBC office',
          'Take knowledge test (if required)',
          'Book road test (if required)',
          'Pay fees and receive license'
        ],
        links: [
          { text: 'ICBC New to BC', url: 'https://www.icbc.com/driver-licensing/moving-bc/Pages/Moving-from-another-country.aspx' },
          { text: 'Find ICBC Office', url: 'https://www.icbc.com/locators/Pages/default.aspx' }
        ],
        estimatedTime: '2-3 hours (plus test time)'
      },
      ON: {
        id: 4,
        title: 'Get Ontario Driver\'s License',
        category: 'Transportation',
        priority: 'medium',
        completed: false,
        description: 'Apply for Ontario G-class driver\'s license through ServiceOntario.',
        requirements: [
          'Valid foreign driver\'s license (if applicable)',
          'Two pieces of ID',
          'Vision test',
          'Proof of Ontario residency'
        ],
        steps: [
          'Visit ServiceOntario location',
          'Pass vision test',
          'Take G1 knowledge test (if no license exchange)',
          'Practice with G1 license',
          'Book and pass G2 road test',
          'Book and pass G test for full license'
        ],
        links: [
          { text: 'Get Ontario Driver\'s License', url: 'https://www.ontario.ca/page/get-g-drivers-licence-new-drivers' },
          { text: 'Exchange Foreign License', url: 'https://www.ontario.ca/page/exchange-out-province-drivers-licence' }
        ],
        estimatedTime: 'Varies (months if taking tests)'
      },
      AB: {
        id: 4,
        title: 'Get Alberta Driver\'s License',
        category: 'Transportation',
        priority: 'medium',
        completed: false,
        description: 'Apply for Alberta Class 5 driver\'s license at an Alberta Registry.',
        requirements: [
          'Valid foreign driver\'s license (if applicable)',
          'Two pieces of ID',
          'Vision screening',
          'Proof of Alberta residency'
        ],
        steps: [
          'Visit Alberta Registry office',
          'Complete vision screening',
          'Take knowledge test (if no license exchange)',
          'Pass road test (if required)',
          'Pay fees and receive license'
        ],
        links: [
          { text: 'Get Alberta License', url: 'https://www.alberta.ca/get-drivers-licence' },
          { text: 'Find Registry Office', url: 'https://www.alberta.ca/find-registry-agent' }
        ],
        estimatedTime: '2-3 hours (plus test time)'
      },
      QC: {
        id: 4,
        title: 'Get Quebec Driver\'s License',
        category: 'Transportation',
        priority: 'medium',
        completed: false,
        description: 'Apply for Quebec Class 5 driver\'s license through SAAQ.',
        requirements: [
          'Valid foreign driver\'s license (if applicable)',
          'Two pieces of ID',
          'Vision test',
          'Proof of Quebec residency',
          'French language proficiency (for some tests)'
        ],
        steps: [
          'Visit SAAQ service center',
          'Pass vision test',
          'Take knowledge test in French or English',
          'Complete driving course (if required)',
          'Pass road test',
          'Pay fees and receive license'
        ],
        links: [
          { text: 'SAAQ Driver\'s License', url: 'https://saaq.gouv.qc.ca/en/drivers-licences/' },
          { text: 'Exchange Foreign License', url: 'https://saaq.gouv.qc.ca/en/drivers-licences/obtaining-licence/foreign-licence/' }
        ],
        estimatedTime: '2-3 hours (plus test time)'
      }
    };

    const mspTask = {
      BC: {
        id: 5,
        title: 'Register for MSP',
        category: 'Healthcare',
        priority: 'high',
        completed: false,
        description: 'Medical Services Plan (MSP) provides coverage for medically required services in BC.',
        requirements: [
          'BC Services Card application (or existing card)',
          'Immigration documents',
          'Proof of BC residency'
        ],
        steps: [
          'Apply online or by mail',
          'Wait for 3-month waiting period (if applicable)',
          'Receive MSP confirmation',
          'Get temporary private insurance for waiting period'
        ],
        links: [
          { text: 'MSP Enrollment', url: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment' }
        ],
        estimatedTime: '30 minutes (plus waiting period)'
      },
      ON: {
        id: 5,
        title: 'Activate Your OHIP Coverage',
        category: 'Healthcare',
        priority: 'high',
        completed: false,
        description: 'Ensure your Ontario Health Insurance Plan coverage is active after the waiting period.',
        requirements: [
          'OHIP card',
          'Proof of continued Ontario residency'
        ],
        steps: [
          'Wait for 3-month waiting period to end',
          'Verify coverage is active',
          'Carry OHIP card at all times',
          'Update address if you move'
        ],
        links: [
          { text: 'OHIP Coverage', url: 'https://www.ontario.ca/page/what-ohip-covers' }
        ],
        estimatedTime: 'Automatic after waiting period'
      },
      AB: {
        id: 5,
        title: 'Activate Alberta Health Care',
        category: 'Healthcare',
        priority: 'high',
        completed: false,
        description: 'Ensure your Alberta Health Care Insurance Plan is active.',
        requirements: [
          'Alberta Health Care card',
          'Continued Alberta residency'
        ],
        steps: [
          'Wait for approval and card arrival',
          'Carry card when accessing healthcare',
          'Update information if you move',
          'Renew as required'
        ],
        links: [
          { text: 'Alberta Health Coverage', url: 'https://www.alberta.ca/ahcip' }
        ],
        estimatedTime: 'Automatic after approval'
      },
      QC: {
        id: 5,
        title: 'Activate RAMQ Coverage',
        category: 'Healthcare',
        priority: 'high',
        completed: false,
        description: 'Ensure your Quebec health insurance is active through RAMQ.',
        requirements: [
          'RAMQ card',
          'Proof of Quebec residency'
        ],
        steps: [
          'Wait for waiting period to end (if applicable)',
          'Verify coverage status online',
          'Carry RAMQ card at all times',
          'Update address if you move'
        ],
        links: [
          { text: 'RAMQ Coverage', url: 'https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/coverage' }
        ],
        estimatedTime: 'Automatic after approval'
      }
    };

    return {
      healthcare: healthcareTask[province] || healthcareTask.BC,
      driversLicense: driversLicenseTask[province] || driversLicenseTask.BC,
      msp: mspTask[province] || mspTask.BC
    };
  };

  const provinceTasks = getProvinceTasks();

  // Task data - province-specific tasks integrated
  const allTasks = [
    provinceTasks.healthcare, // Task 1 - Healthcare (province-specific)
    {
      id: 2,
      title: 'Apply for SIN',
      category: 'Identification',
      priority: 'high',
      completed: false,
      description: 'Social Insurance Number (SIN) is required for working in Canada and accessing government benefits.',
      requirements: [
        'Work Permit or Study Permit',
        'Valid passport',
        'Proof of address in Canada'
      ],
      steps: [
        'Locate nearest Service Canada office',
        'Book an appointment or walk in',
        'Bring all required documents (originals only)',
        'Complete application form',
        'Receive your SIN immediately'
      ],
      links: [
        { text: 'Service Canada Offices', url: 'https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp' },
        { text: 'SIN Application Info', url: 'https://www.canada.ca/en/employment-social-development/services/sin.html' }
      ],
      estimatedTime: '30 minutes - 1 hour'
    },
    {
      id: 3,
      title: 'Open a Bank Account',
      category: 'Banking',
      priority: 'high',
      completed: false,
      description: 'Set up your Canadian bank account to manage money, receive payments, and pay bills.',
      requirements: [
        'Two pieces of ID (passport, study/work permit)',
        'Proof of address (utility bill, rental agreement)',
        'SIN (optional but helpful)',
        'Initial deposit amount varies by bank'
      ],
      steps: [
        'Research banks: RBC, TD, Scotiabank, BMO, CIBC',
        'Book appointment or visit branch',
        'Bring required documents',
        'Choose account type (chequing, savings, student)',
        'Set up online banking and debit card'
      ],
      links: [
        { text: 'Compare Banks', url: 'https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html' }
      ],
      estimatedTime: '1 hour'
    },
    provinceTasks.driversLicense, // Task 4 - Driver's License (province-specific)
    provinceTasks.msp, // Task 5 - Healthcare activation (province-specific)
    {
      id: 6,
      title: 'Find a Family Doctor',
      category: 'Healthcare',
      priority: 'medium',
      completed: false,
      description: 'Register with a family doctor for ongoing healthcare needs.',
      requirements: [
        'Provincial health card',
        'Health insurance enrollment'
      ],
      steps: [
        'Check provincial health registry',
        'Contact clinics accepting new patients',
        'Register as a patient',
        'Book initial appointment'
      ],
      links: [
        { text: 'Find a Doctor Canada', url: 'https://www.canada.ca/en/health-canada/services/home-continuing-care/find-doctor.html' }
      ],
      estimatedTime: 'Varies'
    },
    {
      id: 7,
      title: 'Get Public Transit Pass',
      category: 'Transportation',
      priority: 'medium',
      completed: false,
      description: 'Get a transit pass for public transportation in your city.',
      requirements: [
        'Valid ID',
        'Payment method',
        'Student ID (for student discount)'
      ],
      steps: [
        'Visit local transit office or purchase online',
        'Choose pass type (monthly, student, etc.)',
        'Load pass onto card or app',
        'Use on all local transit'
      ],
      links: [
        { text: 'Public Transit in Canada', url: 'https://www.canada.ca/en/services/transport.html' }
      ],
      estimatedTime: '15-30 minutes'
    },
    {
      id: 8,
      title: 'Secure Housing',
      category: 'Housing',
      priority: 'medium',
      completed: false,
      description: 'Find suitable housing for your stay in Canada.',
      requirements: [
        'Proof of income or enrollment',
        'References',
        'First month rent + damage deposit'
      ],
      steps: [
        'Search online: Craigslist, Facebook Marketplace, PadMapper',
        'Contact landlords',
        'View properties',
        'Sign rental agreement',
        'Pay deposits and move in'
      ],
      links: [
        { text: 'Tenant Rights Canada', url: 'https://www.canada.ca/en/employment-social-development/programs/communities/homelessness/housing-first.html' }
      ],
      estimatedTime: 'Varies (1-4 weeks)'
    },
    {
      id: 9,
      title: 'Get a Phone Plan',
      category: 'Communication',
      priority: 'medium',
      completed: false,
      description: 'Set up a Canadian mobile phone plan.',
      requirements: [
        'Valid ID',
        'Credit check or prepaid option',
        'Unlocked phone (or purchase from carrier)'
      ],
      steps: [
        'Compare carriers: Rogers, Telus, Bell, Fido, Koodo',
        'Choose plan type',
        'Visit store or apply online',
        'Activate service'
      ],
      links: [
        { text: 'Compare Plans', url: 'https://www.canada.ca/en/radio-television-telecommunications/services/mobile/wireless-phone-plans.html' }
      ],
      estimatedTime: '1 hour'
    },
    {
      id: 10,
      title: 'Connect to Community Services',
      category: 'Community',
      priority: 'low',
      completed: false,
      description: 'Connect with local settlement agencies and community organizations.',
      requirements: [
        'None'
      ],
      steps: [
        'Research local settlement services',
        'Attend newcomer orientation sessions',
        'Join community groups',
        'Attend cultural events'
      ],
      links: [
        { text: 'Settlement Services', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/settle.html' }
      ],
      estimatedTime: 'Ongoing'
    },
    {
      id: 11,
      title: 'Understand Canadian Culture',
      category: 'Cultural Integration',
      priority: 'low',
      completed: false,
      description: 'Learn about Canadian customs, laws, and cultural norms.',
      requirements: [
        'None'
      ],
      steps: [
        'Read about Canadian culture and values',
        'Learn about Indigenous history and land',
        'Understand Canadian laws and rights',
        'Practice English/French if needed',
        'Attend cultural workshops'
      ],
      links: [
        { text: 'Discover Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html' }
      ],
      estimatedTime: 'Ongoing'
    }
  ];

  const [tasks, setTasks] = useState(() => {
    // Load saved progress on mount
    const savedProgress = getTaskProgress();
    
    if (savedProgress) {
      // Merge saved completion state with task data
      return allTasks.map(task => {
        const saved = savedProgress.find(p => p.id === task.id);
        return saved ? { ...task, completed: saved.completed } : task;
      });
    }
    
    return allTasks;
  });
  
  const [expandedTask, setExpandedTask] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  // Save progress whenever tasks change
  useEffect(() => {
    saveTaskProgress(tasks);
  }, [tasks]);

  const categories = ['all', 'Identification', 'Banking', 'Healthcare', 'Transportation', 'Housing', 'Communication', 'Community', 'Cultural Integration'];

  const toggleTask = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = filterCategory === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === filterCategory);

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="checklist-container">
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

      <Navigation currentPage="checklist" onNavigate={onNavigate} />

      <div className="checklist-content">
        <header className="checklist-header">
          <h1 className="checklist-title">Your Newcomer Checklist</h1>
          <p className="checklist-subtitle">
            Complete these essential tasks to settle in {location}, {province}
          </p>

          <div className="progress-overview">
            <div className="progress-text">
              <span className="progress-numbers">{completedCount} of {totalCount} Complete</span>
              <span className="progress-percentage">{progressPercentage}%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p className="auto-save-indicator">💾 Progress automatically saved</p>
          </div>
        </header>

        <div className="filter-section">
          <label className="filter-label">Filter by category:</label>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                onClick={() => setFilterCategory(category)}
              >
                {category === 'all' ? 'All Tasks' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="tasks-list">
          {filteredTasks.map(task => (
            <div 
              key={task.id} 
              className={`task-item ${task.completed ? 'completed' : ''} ${expandedTask === task.id ? 'expanded' : ''}`}
            >
              <div className="task-summary" onClick={() => toggleTask(task.id)}>
                <div className="task-check">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleComplete(task.id);
                    }}
                    className="task-checkbox"
                  />
                </div>
                <div className="task-info">
                  <h3 className="task-item-title">{task.title}</h3>
                  <div className="task-meta">
                    <span className="task-category-badge">{task.category}</span>
                    <span className={`task-priority priority-${task.priority}`}>
                      {task.priority === 'high' ? '🔴 High Priority' : task.priority === 'medium' ? '🟡 Medium' : '🟢 Low'}
                    </span>
                    <span className="task-time">⏱️ {task.estimatedTime}</span>
                  </div>
                </div>
                <button className="task-expand-btn">
                  {expandedTask === task.id ? '▼' : '▶'}
                </button>
              </div>

              {expandedTask === task.id && (
                <div className="task-details">
                  <p className="task-description">{task.description}</p>

                  <div className="task-section">
                    <h4 className="task-section-title">📋 What You Need:</h4>
                    <ul className="task-list">
                      {task.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="task-section">
                    <h4 className="task-section-title">✅ Steps to Complete:</h4>
                    <ol className="task-ordered-list">
                      {task.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="task-section">
                    <h4 className="task-section-title">🔗 Helpful Links:</h4>
                    <div className="task-links">
                      {task.links.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="task-link"
                        >
                          {link.text} →
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="task-actions">
                    <button 
                      className={`btn ${task.completed ? 'btn-secondary' : 'btn-primary'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(task.id);
                      }}
                    >
                      {task.completed ? '✓ Mark as Incomplete' : 'Mark as Complete'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="no-tasks">
            <p>No tasks found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checklist;