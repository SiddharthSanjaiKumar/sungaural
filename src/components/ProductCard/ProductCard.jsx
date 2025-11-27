import React, { useState } from 'react';
import './ProductCard.css';
import facewashImage from '../../assets/Images/facewash.png';
import facewash1Image from '../../assets/Images/facewash1.png';
import serumImage from '../../assets/Images/serum.png';
import serum1Image from '../../assets/Images/serum1.png';
import brightCreamImage from '../../assets/Images/brightening-cream.png';

const ProductCard = ({ product, animationClass }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <div 
      className={['product-card', animationClass, isFlipped ? 'flipped' : ''].join(' ')}
      data-product={product.id}
    >
      <div className="card-face card-front">
        {/* Elegant Badges */}
        <div className="product-badges">
          {product.badge && (
            <span className={`badge badge-${product.badge.toLowerCase()}`}>
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="badge badge-discount">{product.discount}% OFF</span>
          )}
        </div>

        {/* Decorative Element */}
        <div className="card-shimmer"></div>

        <div className="card-front-content">
          <div className="product-header">
            <div className="product-image-container">
              <div className="image-glow"></div>
              <div className="product-image">
                <img
                  src={
                    {
                      'facewash': facewashImage,
                      'facewash1': facewash1Image,
                      'serum': serumImage,
                      'serum1': serum1Image,
                      'brightening-cream': brightCreamImage
                    }[product.id]
                  }
                  alt={product.title}
                />
              </div>
            </div>
            
            <h3>{product.title}</h3>
            
            {/* Elegant Rating */}
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating || 5)}
              </div>
              <span className="rating-count">({product.reviews || 128} reviews)</span>
            </div>
          </div>

          <div className="product-footer">
            <div className="price-section">
              {product.originalPrice && (
                <span className="original-price">{product.originalPrice}</span>
              )}
              <div className="price">{product.price}</div>
            </div>
            
            {/* Elegant short description */}
            <p className="short-description">{product.shortDesc || 'Premium skincare formula'}</p>

            <button className="view-details-btn" onClick={handleFlip}>
              <span>View Details</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="card-face card-back">
        <div className="back-header">
          <h3>{product.title}</h3>
          <div className="back-rating">
            <div className="stars">
              {renderStars(product.rating || 5)}
            </div>
            <span className="review-text">({product.reviews || 128} reviews)</span>
          </div>
        </div>
        
        <div className="back-content">
          <p className="product-description">{product.description}</p>
          
          <div className="ingredients-section">
            <h4><span className="section-icon">🌿</span> Key Ingredients</h4>
            <div className="ingredients-list">
              {product.ingredients.map((ingredient, index) => (
                <span key={index} className="ingredient-tag">{ingredient}</span>
              ))}
            </div>
          </div>
          
          <div className="benefits-section">
            <h4><span className="section-icon">✨</span> Benefits</h4>
            <ul className="benefits-list">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <button className="flip-back-button" onClick={handleFlip}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Product</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;







