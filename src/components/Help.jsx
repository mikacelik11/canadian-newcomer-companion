import React, { useState } from 'react';
import Navigation from './Navigation'; // help page
import CustomHeader from './CustomHeader';

function Help({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How do I get started with the Canadian Newcomer Companion?',
      answer: 'Simply complete the onboarding process by selecting your language, purpose of visit, and region. You\'ll then have access to a personalized checklist of tasks to help you settle in Canada.'
    },
    {
      id: 2,
      category: 'Getting Started',
      question: 'Is this app free to use?',
      answer: 'Yes! The Canadian Newcomer Companion is completely free to use. It\'s provided as a public service to help newcomers settle in Canada.'
    },
    {
      id: 3,
      category: 'Account',
      question: 'Do I need to create an account?',
      answer: 'No, you can use the app as a guest. However, your progress is saved locally in your browser. Creating an account (coming soon) will allow you to sync your progress across devices.'
    },
    {
      id: 4,
      category: 'Account',
      question: 'How is my data stored?',
      answer: 'Your preferences and checklist progress are stored locally in your browser using localStorage. Your data never leaves your device unless you choose to create an account in the future.'
    },
    {
      id: 5,
      category: 'Checklist',
      question: 'Can I customize my checklist?',
      answer: 'Currently, the checklist is automatically personalized based on your region and purpose of visit. You can mark tasks as complete, and your progress is saved automatically.'
    },
    {
      id: 6,
      category: 'Checklist',
      question: 'What if I accidentally mark a task as complete?',
      answer: 'No worries! Simply click on the task again and uncheck the checkbox. You can mark tasks as complete or incomplete at any time.'
    },
    {
      id: 7,
      category: 'Checklist',
      question: 'Why don\'t I see all tasks on my checklist?',
      answer: 'Your checklist is personalized based on your region and purpose of visit. Different provinces have different requirements, so you\'ll only see tasks relevant to your situation.'
    },
    {
      id: 8,
      category: 'Settings',
      question: 'Can I change my language or region?',
      answer: 'Yes! Go to Settings from the navigation menu. You can change your language, purpose of visit, and region at any time without losing your checklist progress.'
    },
    {
      id: 9,
      category: 'Settings',
      question: 'What happens if I reset my data?',
      answer: 'Resetting your data will clear all your preferences and checklist progress. You\'ll need to go through the onboarding process again. This action cannot be undone.'
    },
    {
      id: 10,
      category: 'Technical',
      question: 'Why isn\'t my progress saving?',
      answer: 'Make sure your browser allows localStorage. If you\'re using private/incognito mode, your progress won\'t be saved. Try using the app in a regular browser window.'
    },
    {
      id: 11,
      category: 'Technical',
      question: 'The app isn\'t loading correctly. What should I do?',
      answer: 'Try refreshing the page (F5 or Cmd+R). If that doesn\'t work, clear your browser cache and cookies, then reload the app. If issues persist, contact support.'
    },
    {
      id: 12,
      category: 'Technical',
      question: 'Is this app available on mobile?',
      answer: 'Yes! The app is fully responsive and works on mobile browsers. Simply visit the app URL on your phone or tablet. A dedicated mobile app may be available in the future.'
    },
    {
      id: 13,
      category: 'Resources',
      question: 'Where can I find official government information?',
      answer: 'All links in the app direct you to official government websites like Canada.ca, Service Canada, and provincial government sites. We only provide verified, official resources.'
    },
    {
      id: 14,
      category: 'Resources',
      question: 'Can I access the Indigenous Land Acknowledgement again?',
      answer: 'Yes! Click on "Land Acknowledgement" in the navigation menu at any time to review the information about the Indigenous territories you\'re on.'
    },
    {
      id: 15,
      category: 'General',
      question: 'What if my question isn\'t answered here?',
      answer: 'You can contact us using the form below, or reach out to local settlement services in your area. We\'re continuously updating our FAQ based on user feedback.'
    }
  ];

  const categories = ['all', 'Getting Started', 'Account', 'Checklist', 'Settings', 'Technical', 'Resources', 'General'];

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="help-container">
      <CustomHeader />

      <Navigation currentPage="help" onNavigate={onNavigate} />

      <div className="help-content">
        {/* Help Header */}
        <header className="help-header">
          <h1 className="help-title">Help & Support</h1>
          <p className="help-subtitle">
            Find answers to common questions and get help with using the Canadian Newcomer Companion
          </p>
        </header>

        {/* Quick Links */}
        <section className="quick-links-section">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-links-grid">
            <button className="quick-link-card" onClick={() => onNavigate('checklist')}>
              <span className="quick-link-icon">✓</span>
              <h3>View Checklist</h3>
              <p>See your personalized tasks</p>
            </button>
            <button className="quick-link-card" onClick={() => onNavigate('settings')}>
              <span className="quick-link-icon">⚙️</span>
              <h3>Settings</h3>
              <p>Update your preferences</p>
            </button>
            <button className="quick-link-card" onClick={() => onNavigate('land')}>
              <span className="quick-link-icon">🍁</span>
              <h3>Land Acknowledgement</h3>
              <p>Learn about Indigenous territories</p>
            </button>
            <button className="quick-link-card" onClick={() => window.open('https://www.canada.ca/en/immigration-refugees-citizenship.html', '_blank')}>
              <span className="quick-link-icon">🌐</span>
              <h3>IRCC Website</h3>
              <p>Official immigration info</p>
            </button>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="faq-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Topics' : category}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          {filteredFAQs.length > 0 ? (
            <div className="faq-list">
              {filteredFAQs.map(faq => (
                <div 
                  key={faq.id} 
                  className={`faq-item ${expandedFAQ === faq.id ? 'expanded' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span className="faq-category-tag">{faq.category}</span>
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-toggle">{expandedFAQ === faq.id ? '−' : '+'}</span>
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No FAQs match your search. Try different keywords or browse all topics.</p>
            </div>
          )}
        </section>

        {/* Emergency Contacts */}
        <section className="emergency-section">
          <h2 className="section-title">Important Contacts</h2>
          <div className="contact-grid">
            <div className="contact-card emergency">
              <h3>🚨 Emergency Services</h3>
              <p className="contact-number">911</p>
              <p className="contact-description">Police, Fire, Ambulance</p>
            </div>

            <div className="contact-card">
              <h3>📞 Service Canada</h3>
              <p className="contact-number">1-800-622-6232</p>
              <p className="contact-description">SIN, EI, CPP, OAS inquiries</p>
            </div>

            <div className="contact-card">
              <h3>🏥 HealthLink BC</h3>
              <p className="contact-number">811</p>
              <p className="contact-description">24/7 health information</p>
            </div>

            <div className="contact-card">
              <h3>🛂 IRCC</h3>
              <p className="contact-number">1-888-242-2100</p>
              <p className="contact-description">Immigration questions</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-section">
          <h2 className="section-title">Still Need Help?</h2>
          <div className="contact-form-container">
            <p className="contact-intro">
              Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
            </p>
            
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! This is a demo, so your message won\'t actually be sent.');
            }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" className="form-select" required>
                  <option value="">Select a topic</option>
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account Question</option>
                  <option value="checklist">Checklist Help</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="form-textarea" 
                  rows="5"
                  placeholder="Describe your issue or question..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="resources-section">
          <h2 className="section-title">Additional Resources</h2>
          <div className="resources-list">
            <a href="https://www.canada.ca/en.html" target="_blank" rel="noopener noreferrer" className="resource-link">
              <span className="resource-icon">🇨🇦</span>
              <div className="resource-info">
                <h4>Canada.ca</h4>
                <p>Official Government of Canada website</p>
              </div>
              <span className="resource-arrow">→</span>
            </a>

            <a href="https://www.cic.gc.ca/english/newcomers/services/index.asp" target="_blank" rel="noopener noreferrer" className="resource-link">
              <span className="resource-icon">🏘️</span>
              <div className="resource-info">
                <h4>Settlement Services</h4>
                <p>Find local support in your area</p>
              </div>
              <span className="resource-arrow">→</span>
            </a>

            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html" target="_blank" rel="noopener noreferrer" className="resource-link">
              <span className="resource-icon">📚</span>
              <div className="resource-info">
                <h4>New Immigrants Guide</h4>
                <p>Comprehensive guide for newcomers</p>
              </div>
              <span className="resource-arrow">→</span>
            </a>

            <a href="https://www.canada.ca/en/services/immigration-citizenship.html" target="_blank" rel="noopener noreferrer" className="resource-link">
              <span className="resource-icon">📋</span>
              <div className="resource-info">
                <h4>Immigration & Citizenship</h4>
                <p>Services and information</p>
              </div>
              <span className="resource-arrow">→</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Help;