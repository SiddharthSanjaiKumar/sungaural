import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Radiate Your Beauty</h1>
        <p>Discover premium skincare products crafted for your natural glow and confidence</p>
        <a href="#products" className="cta-button">
          ✨ Shop Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;