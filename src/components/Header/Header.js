import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import './Header.css';
import logo from './Logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
          <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        <div className="header-right">
          <div className="utility-nav">
            
            <nav className="quick-links">
              <ul>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/carbon-calculator">Carbon Calculator</a></li>
                <li>
                  <button className="menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="menu-icon">☰</span>
                  </button>
<nav className={`dropdown-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                      <li><a href="/sustainability">Sustainability</a></li>
                      <li><a href="/case-studies">Case Studies</a></li>
                      <li><a href="/blogs">Blogs</a></li>
                      <li><a href="/about-us">About Us</a></li>
                    </ul>
                  </nav>
                </li>
              </ul>
            </nav>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

<nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              {NAVIGATION_ITEMS.map((item, index) => (
                <li key={index} className={item.subItems ? 'dropdown' : ''}>
                  <a href={item.link}>{item.title}</a>
                  {item.subItems && (
                    <div className="dropdown-content">
                      {item.subItems.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.link}>
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 


