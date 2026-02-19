import React, { useState } from 'react';
import Navigation from './Navigation';
import CustomHeader from './CustomHeader';

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
      },
      // Saskatchewan Resources
{
  id: 27,
  category: 'Settlement Services',
  name: 'Saskatchewan Intercultural Association',
  province: 'SK',
  description: 'Settlement services for newcomers in Regina and area.',
  services: ['Settlement Support', 'Language Programs', 'Employment Services', 'Community Programs'],
  phone: '306-757-8813',
  website: 'https://www.sianewcomers.sk.ca/',
  address: '2445 13th Avenue, Regina, SK'
},
{
  id: 28,
  category: 'Settlement Services',
  name: 'Saskatoon Open Door Society',
  province: 'SK',
  description: 'Immigrant and refugee services in Saskatoon.',
  services: ['Newcomer Services', 'Language Training', 'Job Search', 'Youth Programs'],
  phone: '306-653-4464',
  website: 'https://www.sods.sk.ca/',
  address: '416 - 20th Street West, Saskatoon, SK'
},
{
  id: 29,
  category: 'Healthcare',
  name: 'HealthLine Saskatchewan',
  province: 'SK',
  description: '24/7 health advice from nurses.',
  services: ['Health Advice', 'Symptom Assessment', 'Find Services'],
  phone: '811',
  website: 'https://www.healthlineonline.ca/',
  address: 'Phone and online services'
},

// Manitoba Resources
{
  id: 30,
  category: 'Settlement Services',
  name: 'Immigrant Centre Manitoba',
  province: 'MB',
  description: 'Settlement and integration services in Winnipeg.',
  services: ['Settlement Support', 'Language Classes', 'Employment Help', 'Family Programs'],
  phone: '204-943-9158',
  website: 'https://icmanitoba.com/',
  address: '200 - 100 Adelaide Street, Winnipeg, MB'
},
{
  id: 31,
  category: 'Settlement Services',
  name: 'Manitoba Start',
  province: 'MB',
  description: 'Employment and training programs for newcomers.',
  services: ['Job Search', 'Skills Training', 'Career Counselling', 'Language Training'],
  phone: '204-925-2139',
  website: 'https://manitobastart.com/',
  address: '294 Portage Avenue, Winnipeg, MB'
},
{
  id: 32,
  category: 'Healthcare',
  name: 'Health Links – Info Santé',
  province: 'MB',
  description: '24/7 health information from nurses.',
  services: ['Health Advice', 'Find Services', 'Prescription Information'],
  phone: '204-788-8200 or 1-888-315-9257',
  website: 'https://www.gov.mb.ca/health/familydoctorfinder/',
  address: 'Phone and online services'
},

// New Brunswick Resources
{
  id: 33,
  category: 'Settlement Services',
  name: 'Multicultural Association of Fredericton',
  province: 'NB',
  description: 'Settlement and integration services in Fredericton.',
  services: ['Newcomer Services', 'Language Programs', 'Employment Support', 'Community Programs'],
  phone: '506-457-3036',
  website: 'https://www.mcaf.nb.ca/',
  address: '123 York Street, Fredericton, NB'
},
{
  id: 34,
  category: 'Settlement Services',
  name: 'MAGMA (Multicultural Association of the Greater Moncton Area)',
  province: 'NB',
  description: 'Immigrant services in Moncton area.',
  services: ['Settlement Help', 'Language Classes', 'Job Preparation', 'Youth Services'],
  phone: '506-858-9659',
  website: 'https://www.magma-amgm.org/',
  address: '59 Temple Avenue, Moncton, NB'
},
{
  id: 35,
  category: 'Healthcare',
  name: 'Tele-Care 811',
  province: 'NB',
  description: '24/7 health information from nurses.',
  services: ['Health Advice', 'Find Services', 'Medication Questions'],
  phone: '811',
  website: 'https://www2.gnb.ca/content/gnb/en/departments/health/Tele-Care.html',
  address: 'Phone and online services'
},

// Nova Scotia Resources
{
  id: 36,
  category: 'Settlement Services',
  name: 'Immigrant Services Association of Nova Scotia (ISANS)',
  province: 'NS',
  description: 'Comprehensive settlement services across Nova Scotia.',
  services: ['Settlement Support', 'Language Training', 'Employment Services', 'Youth Programs'],
  phone: '902-423-3607',
  website: 'https://www.isans.ca/',
  address: '2650 Agricola Street, Halifax, NS'
},
{
  id: 37,
  category: 'Settlement Services',
  name: 'Cape Breton Association for Newcomers to Canada',
  province: 'NS',
  description: 'Newcomer services in Cape Breton.',
  services: ['Settlement Help', 'Language Programs', 'Job Search', 'Community Support'],
  phone: '902-539-5696',
  website: 'https://www.cbacneeds.ca/',
  address: '320 Esplanade, Sydney, NS'
},
{
  id: 38,
  category: 'Healthcare',
  name: '811 HealthLink Nova Scotia',
  province: 'NS',
  description: '24/7 health information and advice.',
  services: ['Health Advice', 'Find Services', 'Symptom Assessment'],
  phone: '811',
  website: 'https://811.novascotia.ca/',
  address: 'Phone and online services'
},

// Prince Edward Island Resources
{
  id: 39,
  category: 'Settlement Services',
  name: 'PEI Association for Newcomers to Canada',
  province: 'PE',
  description: 'Settlement and integration services in PEI.',
  services: ['Settlement Support', 'Language Classes', 'Employment Help', 'Community Programs'],
  phone: '902-628-6009',
  website: 'https://www.peianc.com/',
  address: '49 Water Street, Charlottetown, PE'
},
{
  id: 40,
  category: 'Employment Services',
  name: 'SkillsPEI',
  province: 'PE',
  description: 'Employment and training services.',
  services: ['Job Search', 'Skills Training', 'Career Counselling', 'Workshops'],
  phone: '902-368-6347',
  website: 'https://www.princeedwardisland.ca/en/topic/skillspei',
  address: 'Multiple locations in PEI'
},
{
  id: 41,
  category: 'Healthcare',
  name: 'HealthPEI',
  province: 'PE',
  description: 'Health information and services.',
  services: ['Health Advice', 'Find Services', 'Appointments'],
  phone: '1-888-236-2108',
  website: 'https://www.princeedwardisland.ca/en/topic/health-pei',
  address: 'Multiple health centers'
},

// Newfoundland and Labrador Resources
{
  id: 42,
  category: 'Settlement Services',
  name: 'Association for New Canadians (ANC)',
  province: 'NL',
  description: 'Settlement services for newcomers in Newfoundland and Labrador.',
  services: ['Settlement Support', 'Language Programs', 'Employment Services', 'Youth Programs'],
  phone: '709-722-9680',
  website: 'https://www.ancnl.ca/',
  address: '107 - 109 Duckworth Street, St. John\'s, NL'
},
{
  id: 43,
  category: 'Employment Services',
  name: 'NL Employment Services',
  province: 'NL',
  description: 'Job search and career support.',
  services: ['Job Search', 'Resume Help', 'Career Counselling', 'Training Programs'],
  phone: '1-877-729-7444',
  website: 'https://www.gov.nl.ca/aesl/employment/',
  address: 'Multiple locations in NL'
},
{
  id: 44,
  category: 'Healthcare',
  name: 'HealthLine NL',
  province: 'NL',
  description: '24/7 health advice from nurses.',
  services: ['Health Advice', 'Find Services', 'Medication Questions'],
  phone: '811',
  website: 'https://www.health.gov.nl.ca/health/',
  address: 'Phone and online services'
},

// Yukon Resources
{
  id: 45,
  category: 'Settlement Services',
  name: 'Yukon Association for Newcomers',
  province: 'YT',
  description: 'Settlement and integration support in Yukon.',
  services: ['Settlement Support', 'Language Classes', 'Job Search', 'Community Programs'],
  phone: '867-668-6133',
  website: 'https://www.immigrateyukon.com/',
  address: '203A - 307 Jarvis Street, Whitehorse, YT'
},
{
  id: 46,
  category: 'Employment Services',
  name: 'Yukon Employment Services',
  province: 'YT',
  description: 'Employment and training programs.',
  services: ['Job Search', 'Career Planning', 'Skills Training', 'Job Matching'],
  phone: '867-667-5944',
  website: 'https://yukon.ca/en/doing-business/employer-programs-and-services',
  address: 'Whitehorse and communities'
},

// Northwest Territories Resources
{
  id: 47,
  category: 'Settlement Services',
  name: 'NWT Nominee Program',
  province: 'NT',
  description: 'Immigration and settlement information for NWT.',
  services: ['Settlement Info', 'Immigration Support', 'Community Resources'],
  phone: '867-767-9062',
  website: 'https://www.iti.gov.nt.ca/en/services/nominee-program',
  address: 'Yellowknife and regional offices'
},
{
  id: 48,
  category: 'Employment Services',
  name: 'NWT Employment Services',
  province: 'NT',
  description: 'Job search and employment support.',
  services: ['Job Search', 'Career Counselling', 'Training Programs', 'Job Placement'],
  phone: '867-767-9190',
  website: 'https://www.ece.gov.nt.ca/en/services/employment',
  address: 'Multiple locations in NWT'
},

// Nunavut Resources
{
  id: 49,
  category: 'Settlement Services',
  name: 'Nunavut Immigration',
  province: 'NU',
  description: 'Immigration and settlement information for Nunavut.',
  services: ['Settlement Info', 'Immigration Support', 'Community Resources'],
  phone: '867-975-7800',
  website: 'https://www.gov.nu.ca/edt/information/immigration',
  address: 'Iqaluit and regional offices'
},
{
  id: 50,
  category: 'Employment Services',
  name: 'Nunavut Employment Services',
  province: 'NU',
  description: 'Job search and career support.',
  services: ['Job Search', 'Career Planning', 'Skills Training', 'Employment Programs'],
  phone: '867-975-5400',
  website: 'https://www.gov.nu.ca/family-services/information/career-development',
  address: 'Multiple communities in Nunavut'
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
      <CustomHeader />

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