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

  return (
    <div 
      className={['product-card', animationClass, isFlipped ? 'flipped' : ''].join(' ')}
      data-product={product.id}
      onClick={handleFlip}
    >
      <div className="card-face card-front">
        <div className="card-front-content">
          <div className="product-header">
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
            <h3>{product.title}</h3>
          </div>
          <div className="product-footer">
            <div className="price">{product.price}</div>
            <div className="card-actions">
              <button className="flip-button">View Details</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-face card-back">
        <h3>{product.title} Details</h3>
        <p className="product-description">{product.description}</p>
        <div className="ingredients-section">
          <h4>Key Ingredients</h4>
          <div className="ingredients-list">
            {product.ingredients.map((ingredient, index) => (
              <span key={index} className="ingredient-tag">{ingredient}</span>
            ))}
          </div>
        </div>
        <div className="benefits-section">
          <h4> Benefits</h4>
          <ul className="benefits-list">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <button className="flip-back-button" onClick={handleFlip}> Back to Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
