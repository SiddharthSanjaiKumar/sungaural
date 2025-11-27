

import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <img src={Logo} alt="Sungaural Logo" className="logo-image" />
          <div className="brand-text">
            <span className="brand-name">Sungaural</span>
            <span className="brand-tagline">Skincare</span>
          </div>
        </div>
        <nav className="nav-menu">
          <a href="#hero" className="nav-link">
            <span>Home</span>
          </a>
          <a href="#products" className="nav-link">
            <span>Products</span>
          </a>
          <a href="#about" className="nav-link">
            <span>About</span>
          </a>
          <a href="#contact" className="nav-link">
            <span>Contact</span>
          </a>
        </nav>
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle navigation"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        {menuOpen && (
          <div className="mobile-nav-menu">
            <a href="#hero" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#products" className="nav-link" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;