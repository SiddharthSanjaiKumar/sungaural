

import React, { useState, useMemo } from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const products = useMemo(() => [
    {
      "id": "facewash",
      "icon": "🧴",
      "title": "Acne Control Face Wash",
      "category": "Face Wash",
      "shortDesc": "Targets acne with Salicylic & Mandelic Acid",
      "description": "Experience clearer, healthier skin with our Acne Control Face Wash — a scientifically formulated cleansing gel designed to target acne at its root. Powered by Salicylic Acid and Mandelic Acid, it gently exfoliates dead skin cells, unclogs pores, and reduces breakouts without stripping away essential moisture. Tea Tree Oil fights pimple-causing bacteria, while Cica Extract soothes irritation and supports skin healing. With a pH-balanced (5.5) skin-friendly formula, it maintains your natural barrier and controls excess oil for a fresh, matte look. Suitable for all skin types and proven to deliver 3X more efficiency in clearing acne, reducing inflammation, and preventing future breakouts.",
      "price": "₹220.00",
      "originalPrice": "₹299.00",
      "rating": 5,
      "reviews": 245,
      "badge": "Bestseller",
      "ingredients": ["Salicylic Acid", "Mandelic Acid", "Tea Tree Oil", "Cica Extract"],
      "benefits": [
        "3X More Efficient",
        "Fights Pimple-causing Bacteria",
        "Clear Acne",
        "Controls Excess Oil",
        "Skin friendly formula pH 5.5"
      ]
    },
    {
      "id": "facewash1",
      "icon": "🧴",
      "title": "Skin Whitening Face Wash",
      "category": "Face Wash",
      "shortDesc": "Brightens with L-glutathione & Kojic Acid",
      "description": "Reveal a radiant and even-toned complexion with our Skin Whitening Face Wash — a luxurious foaming cleanser formulated to brighten and revitalize dull skin. Enriched with L-glutathione and Kojic Acid, it helps reduce pigmentation, dark spots, and uneven skin tone while promoting a natural glow. Vitamin C provides powerful antioxidant protection and enhances luminosity, while Acid Dipalmitate supports skin brightening and smoothness. With regular use, your skin looks visibly fairer, clearer, and more luminous. Gentle yet effective, this face wash delivers 3X more efficiency for whitening and brightening, leaving your skin refreshed, soft, and glowing after every wash.",
      "price": "₹220.00",
      "originalPrice": "₹299.00",
      "rating": 4,
      "reviews": 189,
      "badge": "New",
      "ingredients": ["L-glutathione", "Kojic Acid", "Acid Dipalmitate", "Vitamin C"],
      "benefits": [
        "3X More Efficient",
        "For Whitening & Brightening"
      ]
    },
    {
      "id": "serum",
      "icon": "✨",
      "title": "Skin Renew Serum",
      "category": "Serums",
      "shortDesc": "Reduces dark spots with Tranexamic Acid",
      "description": "Revitalize your skin with our Skin Renew Serum — a potent blend of brightening and rejuvenating actives designed to reveal a smoother, more radiant complexion. Infused with Tranexamic Acid and Alpha Arbutin, it effectively targets dark spots, hyperpigmentation, and uneven skin tone for visibly clearer skin. Vitamin E provides antioxidant protection, helping to repair and strengthen the skin barrier, while Niacinamide enhances brightness and refines texture. This lightweight, fast-absorbing formula deeply nourishes and promotes an even, luminous glow, leaving your skin refreshed, youthful, and beautifully renewed.",
      "price": "₹749.00",
      "originalPrice": "₹999.00",
      "rating": 5,
      "reviews": 312,
      "badge": "Bestseller",
      "discount": 25,
      "ingredients": ["Tranexamic Acid", "Alpha Arbutin", "Vitamin E", "Niacinamide"],
      "benefits": [
        "Reduce Dark Spots",
        "Depigmentation",
        "Even Skin Tone",
        "Skin Brightening"
      ]
    },
    {
      "id": "serum1",
      "icon": "☀️",
      "title": "Brightening Serum",
      "category": "Serums",
      "shortDesc": "Illuminates with Vitamin C & Hyaluronic Acid",
      "description": "Illuminate your complexion with our Brightening Serum — a lightweight, fast-absorbing formula that delivers deep hydration and a radiant glow. Powered by Ferulic Acid and Vitamin C, it brightens dull skin, fades dark spots, and helps reduce signs of sun damage and hyperpigmentation. Hyaluronic Acid locks in moisture, keeping your skin plump and hydrated, while Vitamin E provides antioxidant protection against environmental stressors. With regular use, your skin appears visibly brighter, smoother, and more luminous — a true glow booster for everyday radiance.",
      "price": "₹749.00",
      "originalPrice": "₹999.00",
      "rating": 5,
      "reviews": 278,
      "badge": "Popular",
      "discount": 25,
      "ingredients": ["Ferulic Acid", "Hyaluronic Acid", "Vitamin C", "Vitamin E"],
      "benefits": [
        "Brighten Skin Tone",
        "Glow Booster",
        "Fades Dark Spots & Hyperpigmentation"
      ]
    },
    {
      "id": "brightening-cream",
      "icon": "🌙",
      "title": "ECO Bright Cream",
      "category": "Creams",
      "shortDesc": "Night repair with Kojic Acid & L-Glutathione",
      "description": "Wake up to luminous, even-toned skin with our ECO Bright Cream — a rich, nourishing night cream formulated to deeply repair and rejuvenate while you sleep. Infused with Kojic Acid and Dipalmitate, it helps reduce pigmentation and dark spots for a visibly brighter complexion. Tyrostat and L-Glutathione work synergistically to lighten discoloration and improve overall skin tone, while Vitamin C boosts radiance and supports collagen production. This powerful blend restores your skin's natural glow, leaving it soft, smooth, and refreshed every morning.",
      "price": "₹220.00",
      "originalPrice": "₹349.00",
      "rating": 4,
      "reviews": 156,
      "badge": "New",
      "ingredients": ["Kojic Acid", "Dipalmitate", "Tyrostat", "L-Glutathione", "Vitamin C"],
      "benefits": [
        "Brightens and Evens Skin Tone",
        "Reduces Pigmentation and Dark Spots",
        "Enhances Radiance and Glow",
        "Promotes Skin Repair and Renewal",
        "Deeply Nourishes and Hydrates Overnight"
      ]
    }
  ], []);

  const categories = ['All', 'Face Wash', 'Serums', 'Creams'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="products-header">
          <div className="header-text">
            <h2 className="section-title">Our Premium Collection</h2>
            <p className="section-subtitle">
              Carefully crafted skincare essentials designed to enhance your natural beauty
            </p>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                animationClass={`fade-in-up delay-${index % 3}`}
              />
            ))
          ) : (
            <div className="no-products">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>No products found matching your criteria.</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Product Count */}
        {filteredProducts.length > 0 && (
          <div className="product-count">
            <span className="count-badge">{filteredProducts.length}</span>
            <span className="count-text">
              {filteredProducts.length === products.length 
                ? `Premium products in our collection` 
                : `of ${products.length} products`}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
