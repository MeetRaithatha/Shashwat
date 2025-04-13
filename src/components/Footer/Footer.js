import React from 'react';
import { FOOTER_LINKS, SOCIAL_MEDIA_LINKS } from '../../utils/constants';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/api/placeholder/160/60" alt="EcoDevelop Logo" />
            <p className="tagline">Building with Nature</p>
          </div>
          
          <div className="footer-links-container">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index} className="footer-links-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="social-media">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              {SOCIAL_MEDIA_LINKS.map((platform, index) => (
                <a key={index} href={platform.url} aria-label={platform.name} className="social-icon">
                  <i className={`fab fa-${platform.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to receive news and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="legal">
            <p>&copy; {currentYear} EcoDevelop. All rights reserved.</p>
            <div className="legal-links">
              <a href="/terms">Terms of Use</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/accessibility">Accessibility</a>
              <a href="/sitemap">Site Map</a>
            </div>
          </div>
          
          <div className="certifications">
            <div className="cert-item">
              <img src="/api/placeholder/50/50" alt="LEED Certified" />
            </div>
            <div className="cert-item">
              <img src="/api/placeholder/50/50" alt="B Corp Certified" />
            </div>
          </div>
        </div>
        
        <div className="disclaimer">
          <p>Committed to sustainable development and environmental stewardship.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;