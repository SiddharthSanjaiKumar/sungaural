

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-subtitle">Our Story</span>
          <h2>About Sungaural Skincare</h2>
          <div className="header-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3>Our Philosophy</h3>
            <p>At Sungaural Skincare, we believe that everyone deserves to feel confident and beautiful in their own skin. Our carefully curated collection of premium skincare products is designed to enhance your natural beauty while nourishing and protecting your skin with science-backed ingredients.</p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Sustainability First</h3>
            <p>Each product is formulated with the finest natural ingredients, rigorously tested, and created with love for your skin. We're committed to sustainability, cruelty-free practices, and using eco-friendly packaging that reflects our care for both you and our planet.</p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3>Customer Care</h3>
            <p>Join thousands of satisfied customers who have made Sungaural Skincare part of their daily skincare ritual. Your journey to radiant, healthy skin starts here. Experience the difference today.</p>
          </div>
        </div>

        <div className="about-features">
          <div className="feature-item">
            <span className="feature-icon">🌿</span>
            <span className="feature-text">100% Natural</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🐰</span>
            <span className="feature-text">Cruelty-Free</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">♻️</span>
            <span className="feature-text">Eco-Friendly</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <span className="feature-text">Premium Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;