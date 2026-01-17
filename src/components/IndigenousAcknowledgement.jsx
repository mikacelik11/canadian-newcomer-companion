import React from 'react';

function IndigenousAcknowledgement({ province, location, onNext }) {
  // Map provinces to Indigenous territories (simplified - you can expand this)
  const territoryInfo = {
    BC: {
      name: 'British Columbia',
      territories: 'the traditional territories of the Lekwungen-speaking Peoples, known today as the Songhees and Esquimalt Nations',
      specificInfo: {
        'University of Victoria': 'the Lək̓ʷəŋən peoples (Songhees and Esquimalt Nations)',
        'Vancouver': 'the Musqueam, Squamish, and Tsleil-Waututh Nations',
        'default': 'the many diverse Indigenous peoples'
      }
    },
    ON: {
      name: 'Ontario',
      territories: 'the traditional territory of many nations including the Mississaugas of the Credit, the Anishnabeg, the Chippewa, the Haudenosaunee and the Wendat peoples',
      specificInfo: {
        'Toronto': 'the traditional territory of many nations including the Mississaugas of the Credit, the Anishnabeg, the Chippewa, the Haudenosaunee and the Wendat peoples',
        'Ottawa': 'the traditional unceded territory of the Algonquin Anishinaabe people',
        'default': 'the traditional territories of Indigenous peoples'
      }
    },
    AB: {
      name: 'Alberta',
      territories: 'Treaty 6, Treaty 7, and Treaty 8 territory and the ancestral and traditional territory of the Blackfoot Confederacy: Kainai, Piikani and Siksika as well as the Tsuu T\'ina Nation and Stoney Nakoda First Nation',
      specificInfo: {
        'default': 'Treaty territories and the Métis people'
      }
    },
    // Add more provinces as needed - keeping it simple for now
  };

  const info = territoryInfo[province] || {
    name: 'Canada',
    territories: 'the traditional territories of Indigenous peoples across Canada',
    specificInfo: { 'default': 'Indigenous peoples across this land' }
  };

  const specificTerritory = info.specificInfo[location] || info.specificInfo['default'];

  const resources = [
    {
      title: 'Native-Land.ca — Explore the Map',
      description: 'Use this interactive map to learn about the Indigenous territories, languages, and treaties across Canada and beyond. Type your address or region to see who traditionally inhabits the land where you live.',
      link: 'https://native-land.ca/',
      linkText: 'Open Native-Land.ca'
    },
    {
      title: 'Government of Canada — Indigenous Peoples and Communities',
      description: 'Access official programs, funding opportunities, and information about reconciliation initiatives, treaties, and Indigenous services across Canada.',
      link: 'https://www.rcaanc-cirnac.gc.ca/eng/1100100013785/1529102490303',
      linkText: 'Visit Canada.ca/Indigenous'
    }
  ];

  // Add location-specific resources for Victoria
  if (location === 'University of Victoria' || province === 'BC') {
    resources.push(
      {
        title: 'Victoria Native Friendship Centre',
        description: 'The VNFC supports urban Indigenous peoples through community programs, cultural workshops, youth and elder initiatives, and social services.',
        link: 'https://vnfc.ca/',
        linkText: 'Learn more'
      },
      {
        title: 'Songhees Nation',
        description: 'Learn about the Songhees Nation\'s history, governance, and ongoing contributions to the region.',
        link: 'https://www.songheesnation.ca/',
        linkText: 'Visit Canada.ca/Indigenous'
      },
      {
        title: 'Esquimalt Nation',
        description: 'Explore the Esquimalt Nation\'s community initiatives, history, and cultural programs.',
        link: 'https://www.esquimaltnation.ca/',
        linkText: 'Visit esquimaltnation.ca'
      }
    );
  }

  return (
    <div className="indigenous-container">
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

      <div className="indigenous-content">
        <div className="indigenous-header-section">
          <h1 className="indigenous-title">Learn About the Land You're On</h1>
          <p className="indigenous-intro">
            We acknowledge the Indigenous Peoples who have lived and cared for this land since time immemorial.
            Understanding whose land you are on is an important step toward respect and reconciliation.
          </p>
        </div>

        <div className="territory-info-box">
          <h2 className="territory-heading">{location || info.name}</h2>
          <p className="territory-description">
            You're currently viewing resources for <strong>{location || info.name}</strong>, located on {specificTerritory}.
          </p>
        </div>

        <div className="resources-section">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
              <a 
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                {resource.linkText}
              </a>
            </div>
          ))}
        </div>

        <div className="indigenous-footer-note">
          <p>
            This section is a starting point for learning and connection. We encourage you to continue exploring,
            attending community events, and engaging respectfully with Indigenous Peoples and organizations in your area.
          </p>
        </div>

        <div className="navigation-buttons">
          <button 
            className="btn btn-primary" 
            onClick={onNext}
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndigenousAcknowledgement;