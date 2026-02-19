import React from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-disclaimer">
          <p className="disclaimer-text">
            ⚠️ <strong>DISCLAIMER:</strong> This is an independent student project created for educational purposes. 
            This is <strong>NOT</strong> an official Government of Canada service.
          </p>
          <p className="disclaimer-text">
            For official immigration information, please visit{' '}
            <a href="https://www.canada.ca" target="_blank" rel="noopener noreferrer">
              canada.ca
            </a>
          </p>
        </div>
        <div className="footer-info">
          <p>&copy; 2026 Canadian Newcomer Companion | Student Project</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;