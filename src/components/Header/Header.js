import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src="Logo.png" alt="Logo" />
          </a>
        </div>

        <div className="header-right">
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          {NAVIGATION_ITEMS.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                <span className="menu-icon">{item.icon}</span>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
