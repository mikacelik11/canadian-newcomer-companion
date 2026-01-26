import React, { useState } from 'react';
import Navigation from './Navigation';

function CommunityResources({ userProfile, onNavigate }) {
  const { province, location } = userProfile;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Resources data - customized based on province
  const getResources = () => {
    const baseResources = [
      // Settlement Services
      {
        id: 1,
        category: 'Settlement Services',
        name: 'ISSofBC (Immigrant Services Society of BC)',
        province: 'BC',
        description: 'Comprehensive settlement services including language classes, employment support, and community programs.',
        services: ['Language Training', 'Employment Support', 'Community Programs', 'Family Services'],
        phone: '604-684-2561',
        email: 'info@issbc.org',
        website: 'https://issbc.org/',
        address: '2610 Victoria Drive, Vancouver, BC'
      },
      {
        id: 2,
        category: 'Settlement Services',
        name: 'Victoria Immigrant & Refugee Centre Society (VIRCS)',
        province: 'BC',
        description: 'Supporting immigrants and refugees in the Greater Victoria area with settlement and integration services.',
        services: ['Settlement Support', 'Language Programs', 'Employment Counselling', 'Youth Programs'],
        phone: '250-361-9433',
        email: 'info@vircs.bc.ca',
        website: 'https://www.vircs.bc.ca/',
        address: '535 Yates Street, Victoria, BC'
      },
      {
        id: 3,
        category: 'Language Training',
        name: 'LINC (Language Instruction for Newcomers to Canada)',
        province: 'all',
        description: 'Free language classes for permanent residents and protected persons to learn English or French.',
        services: ['English Classes', 'French Classes', 'Online Learning', 'Childcare Support'],
        phone: '1-888-242-2100',
        website: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/improve-english-french.html',
        address: 'Multiple locations across Canada'
      },
      {
        id: 4,
        category: 'Language Training',
        name: 'Camosun College - English Language Development',
        province: 'BC',
        description: 'English language programs for international students and newcomers in Victoria.',
        services: ['ESL Classes', 'Academic English', 'Conversation Groups', 'IELTS Preparation'],
        phone: '250-370-3550',
        website: 'https://camosun.ca/international/english-language-development',
        address: 'Lansdowne Campus, 3100 Foul Bay Road, Victoria, BC'
      },
      // Employment Services
      {
        id: 5,
        category: 'Employment Services',
        name: 'WorkBC Employment Services',
        province: 'BC',
        description: 'Free employment services including job search support, skills training, and career counselling.',
        services: ['Job Search Help', 'Resume Writing', 'Interview Skills', 'Career Counselling'],
        phone: '1-877-952-6914',
        website: 'https://www.workbc.ca/',
        address: 'Multiple locations in BC'
      },
      {
        id: 6,
        category: 'Employment Services',
        name: 'Immigrant Employment Council of BC (IECBC)',
        province: 'BC',
        description: 'Helps skilled immigrants find work in their field through employer connections and credential support.',
        services: ['Professional Networking', 'Credential Recognition', 'Mentorship Programs'],
        phone: '604-682-6811',
        website: 'https://www.iecbc.ca/',
        address: '200-1215 W Broadway, Vancouver, BC'
      },
      // Housing Resources
      {
        id: 7,
        category: 'Housing',
        name: 'BC Housing',
        province: 'BC',
        description: 'Provincial agency providing housing assistance and information about tenant rights.',
        services: ['Housing Search', 'Tenant Rights', 'Subsidy Programs', 'Emergency Shelter'],
        phone: '604-433-2218',
        website: 'https://www.bchousing.org/',
        address: 'Multiple offices across BC'
      },
      {
        id: 8,
        category: 'Housing',
        name: 'Tenant Resource & Advisory Centre (TRAC)',
        province: 'BC',
        description: 'Free legal information and advice for residential tenants in BC.',
        services: ['Tenant Rights', 'Legal Advice', 'Dispute Resolution', 'Education Workshops'],
        phone: '604-255-0546',
        website: 'https://tenants.bc.ca/',
        address: '1001-207 W Hastings St, Vancouver, BC'
      },
      // Healthcare
      {
        id: 9,
        category: 'Healthcare',
        name: 'HealthLinkBC',
        province: 'BC',
        description: '24/7 health information and advice from nurses, dietitians, and pharmacists.',
        services: ['Health Advice', 'Translation Services', 'Find Health Services', 'Symptom Checker'],
        phone: '811',
        website: 'https://www.healthlinkbc.ca/',
        address: 'Phone and online services'
      },
      {
        id: 10,
        category: 'Healthcare',
        name: 'BC Walk-in Clinics',
        province: 'BC',
        description: 'Medical services without appointment for non-emergency health concerns.',
        services: ['Medical Care', 'Prescriptions', 'Referrals', 'No Appointment Needed'],
        website: 'https://www.healthlinkbc.ca/health-topics/walk-clinics',
        address: 'Multiple locations'
      },
      // Legal Services
      {
        id: 11,
        category: 'Legal Services',
        name: 'Access Pro Bono',
        province: 'BC',
        description: 'Free legal help for people who cannot afford a lawyer.',
        services: ['Legal Advice', 'Immigration Help', 'Family Law', 'Housing Issues'],
        phone: '604-878-7400',
        website: 'https://accessprobono.ca/',
        address: '300-845 Cambie Street, Vancouver, BC'
      },
      {
        id: 12,
        category: 'Legal Services',
        name: 'Legal Services Society (Legal Aid BC)',
        province: 'BC',
        description: 'Legal aid and public legal information for British Columbians.',
        services: ['Legal Representation', 'Legal Advice', 'Family Law', 'Immigration'],
        phone: '604-408-2172',
        website: 'https://legalaid.bc.ca/',
        address: 'Multiple offices across BC'
      },
      // Cultural & Community
      {
        id: 13,
        category: 'Cultural & Community',
        name: 'Intercultural Association of Greater Victoria',
        province: 'BC',
        description: 'Multicultural programs and services promoting diversity and inclusion.',
        services: ['Cultural Events', 'Community Programs', 'Volunteer Opportunities', 'Youth Programs'],
        phone: '250-388-4728',
        website: 'https://www.icavictoria.org/',
        address: '930 Balmoral Road, Victoria, BC'
      },
      {
        id: 14,
        category: 'Cultural & Community',
        name: 'SUCCESS',
        province: 'BC',
        description: 'Social service agency helping immigrants and diverse communities integrate and thrive.',
        services: ['Settlement Services', 'Language Training', 'Employment Programs', 'Senior Services'],
        phone: '604-408-7274',
        website: 'https://www.success.bc.ca/',
        address: 'Multiple locations in BC'
      },
      // Education & Training
      {
        id: 15,
        category: 'Education & Training',
        name: 'University of Victoria Continuing Studies',
        province: 'BC',
        description: 'Professional development and continuing education programs.',
        services: ['Professional Courses', 'Career Training', 'Certificate Programs', 'Online Learning'],
        phone: '250-472-4747',
        website: 'https://continuingstudies.uvic.ca/',
        address: '3800 Finnerty Road, Victoria, BC'
      },
      // Financial Services
      {
        id: 16,
        category: 'Financial Services',
        name: 'Financial Consumer Agency of Canada',
        province: 'all',
        description: 'Information about banking, credit, and financial products in Canada.',
        services: ['Banking Info', 'Credit Education', 'Consumer Rights', 'Financial Tools'],
        phone: '1-866-461-3222',
        website: 'https://www.canada.ca/en/financial-consumer-agency.html',
        address: 'Online and phone services'
      },

        // Ontario Resources
      {
        id: 17,
        category: 'Settlement Services',
        name: 'COSTI Immigrant Services',
        province: 'ON',
        description: 'Comprehensive settlement and integration services for newcomers in the Greater Toronto Area.',
        services: ['Settlement Support', 'Language Classes', 'Employment Help', 'Youth Programs'],
        phone: '416-658-1600',
        email: 'info@costi.org',
      website: 'https://www.costi.org/',
      address: '1710 Dufferin Street, Toronto, ON'
      },
      {
        id: 18,
        category: 'Settlement Services',
        name: 'Ottawa Community Immigrant Services Organization (OCISO)',
        province: 'ON',
        description: 'Settlement services, language training, and employment support in Ottawa.',
        services: ['Newcomer Services', 'Language Training', 'Job Search', 'Family Support'],
        phone: '613-725-5671',
        website: 'https://www.ociso.org/',
        address: '959 Wellington Street West, Ottawa, ON'
      },
      {
      id: 19,
      category: 'Employment Services',
      name: 'Ontario Employment Services',
      province: 'ON',
      description: 'Free employment services including job search, career planning, and skills training.',
      services: ['Job Search', 'Career Counselling', 'Skills Training', 'Resume Help'],
      phone: '1-800-387-5656',
      website: 'https://www.ontario.ca/page/employment-ontario',
      address: 'Multiple locations across Ontario'
    },
    {
      id: 20,
      category: 'Healthcare',
      name: 'Ontario Telehealth',
      province: 'ON',
      description: '24/7 health advice from registered nurses.',
      services: ['Health Advice', 'Symptom Guidance', 'Find Services'],
      phone: '1-866-797-0000',
      website: 'https://www.ontario.ca/page/get-medical-advice-telehealth-ontario',
      address: 'Phone and online services'
    },

    // Alberta Resources
    {
      id: 21,
      category: 'Settlement Services',
      name: 'Calgary Immigrant Women\'s Association (CIWA)',
      province: 'AB',
      description: 'Comprehensive services for immigrant women and families in Calgary.',
      services: ['Settlement Support', 'Language Programs', 'Employment Services', 'Childcare'],
      phone: '403-263-4414',
      website: 'https://www.ciwa-online.com/',
      address: '200-138 4th Avenue SE, Calgary, AB'
    },
    {
      id: 22,
      category: 'Settlement Services',
      name: 'Edmonton Mennonite Centre for Newcomers',
      province: 'AB',
      description: 'Settlement, language, and employment services for Edmonton newcomers.',
      services: ['Settlement Help', 'Language Classes', 'Job Preparation', 'Youth Programs'],
      phone: '780-424-7709',
      website: 'https://www.emcn.ab.ca/',
      address: '10010 107A Avenue, Edmonton, AB'
    },
    {
      id: 23,
      category: 'Healthcare',
      name: 'Alberta Health Link',
      province: 'AB',
      description: '24/7 health advice and information from nurses.',
      services: ['Health Advice', 'Find Services', 'Prescription Help'],
      phone: '811',
      website: 'https://www.albertahealthservices.ca/assets/healthinfo/link/index.html',
      address: 'Phone and online services'
    },

    // Quebec Resources
    {
      id: 24,
      category: 'Settlement Services',
      name: 'TCRI (Table de concertation des organismes au service des personnes réfugiées et immigrantes)',
      province: 'QC',
      description: 'Network of organizations serving refugees and immigrants in Montreal.',
      services: ['Settlement Services', 'French Classes', 'Employment Support', 'Community Programs'],
      phone: '514-272-2953',
      website: 'https://tcri.qc.ca/',
      address: '5350 Boulevard Saint-Laurent, Montreal, QC'
    },
    {
      id: 25,
      category: 'Language Training',
      name: 'Francisation Quebec',
      province: 'QC',
      description: 'Free French language courses for immigrants in Quebec.',
      services: ['French Classes', 'Online Learning', 'Childcare Support', 'Part-time & Full-time'],
      phone: '1-877-864-9191',
      website: 'https://www.quebec.ca/en/education/learn-french',
      address: 'Multiple locations across Quebec'
      },
      {
        id: 26,
        category: 'Employment Services',
        name: 'Emploi-Québec',
        province: 'QC',
        description: 'Employment services and job search support across Quebec.',
        services: ['Job Search', 'Career Counselling', 'Training Programs', 'Financial Support'],
        phone: '1-877-767-8773',
        website: 'https://www.quebec.ca/en/employment/employment-assistance-and-support-measures',
        address: 'Multiple Service Canada offices in Quebec'
      }
    ];

    // Filter by province
    return baseResources.filter(resource => 
      resource.province === 'all' || resource.province === province
    );
  };

  const resources = getResources();
  const categories = ['all', 'Settlement Services', 'Language Training', 'Employment Services', 'Housing', 'Healthcare', 'Legal Services', 'Cultural & Community', 'Education & Training', 'Financial Services'];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="resources-container">
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

      <Navigation currentPage="resources" onNavigate={onNavigate} />

      <div className="resources-content">
        {/* Header */}
        <header className="resources-header">
          <h1 className="resources-title">Community Resources</h1>
          <p className="resources-subtitle">
            Find local services and support in {location}, {province}
          </p>
        </header>

        {/* Search and Filter */}
        <section className="resources-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for services, organizations, or keywords..."
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
                {category === 'all' ? 'All Resources' : category}
              </button>
            ))}
          </div>
        </section>

        {/* Results Count */}
        <div className="results-info">
          <p>Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} in {province}</p>
        </div>

        {/* Resources Grid */}
        <section className="resources-grid">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <div key={resource.id} className="resource-item">
                <div className="resource-category-badge">{resource.category}</div>
                <h3 className="resource-name">{resource.name}</h3>
                <p className="resource-description">{resource.description}</p>

                <div className="resource-services">
                  <strong>Services:</strong>
                  <div className="service-tags">
                    {resource.services.map((service, index) => (
                      <span key={index} className="service-tag">{service}</span>
                    ))}
                  </div>
                </div>

                <div className="resource-contact">
                  {resource.phone && (
                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <a href={`tel:${resource.phone}`}>{resource.phone}</a>
                    </div>
                  )}
                  {resource.email && (
                    <div className="contact-item">
                      <span className="contact-icon">✉️</span>
                      <a href={`mailto:${resource.email}`}>{resource.email}</a>
                    </div>
                  )}
                  {resource.website && (
                    <div className="contact-item">
                      <span className="contact-icon">🌐</span>
                      <a href={resource.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </div>
                  )}
                  {resource.address && (
                    <div className="contact-item">
                      <span className="contact-icon">📍</span>
                      <span>{resource.address}</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No resources found matching your search. Try different keywords or browse all categories.</p>
            </div>
          )}
        </section>

        {/* Map Placeholder */}
        <section className="map-section">
          <h2 className="section-title">Find Resources Near You</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3>Interactive Map Coming Soon</h3>
              <p>We're working on an interactive map to help you find services near your location.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommunityResources;