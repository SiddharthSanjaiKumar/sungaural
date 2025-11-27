
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">✨ Premium Skincare Collection</div>
        <h1>
          <span className="hero-title-line">Radiate Your</span>
          <span className="hero-title-highlight">Beauty</span>
        </h1>
        <p>Discover premium skincare products crafted for your natural glow and confidence</p>
        <div className="hero-buttons">
          <a href="#products" className="cta-button cta-primary">
            <span>Explore Collection</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#about" className="cta-button cta-secondary">
            <span>Learn More</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Premium Products</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Natural Ingredients</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;