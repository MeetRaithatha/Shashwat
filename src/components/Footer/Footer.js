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
            <img src="/logo2.png" alt="EcoDevelop Logo" />
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
        <div className='footer-middle'>
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              {SOCIAL_MEDIA_LINKS.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <a
                    key={index}
                    href={platform.url}
                    aria-label={platform.name}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={22} strokeWidth={1.8} />
                  </a>
                );
              })}
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
        </div>
        <div className="footer-bottom">
          <div className="legal">
            <p>&copy; {currentYear} EcoDevelop. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Accessibility</a>
              <a href="#">Site Map</a>
            </div>
          </div>
          
          <div className="certifications">
            <div className="cert-item">
              <p>LEED Certified</p>
            </div>
            <div className="cert-item">
              <p>B Corp Certified"</p>
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
