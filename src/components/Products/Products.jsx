import React from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
//   const products = [
// {
//   "id": "facewash",
//   "icon": "🧴",
//   "title": "Acne Control Face Wash",
//   "description": "Experience clearer, healthier skin with our Acne Control Face Wash — a scientifically formulated cleansing gel designed to target acne at its root. Powered by Salicylic Acid and Mandelic Acid, it gently exfoliates dead skin cells, unclogs pores, and reduces breakouts without stripping away essential moisture. Tea Tree Oil fights pimple-causing bacteria, while Cica Extract soothes irritation and supports skin healing. With a pH-balanced (5.5) skin-friendly formula, it maintains your natural barrier and controls excess oil for a fresh, matte look. Suitable for all skin types and proven to deliver 3X more efficiency in clearing acne, reducing inflammation, and preventing future breakouts.",
//   "price": "220.00",
//   "ingredients": ["Salicylic Acid", "Mandelic Acid", "Tea Tree Oil", "Cica Extract"],
//   "benefits": [
//     "3X More Efficient",
//     "Fights Pimple-causing Bacteria",
//     "Clear Acne",
//     "Controls Excess Oil",
//     "Skin friendly formula pH 5.5"
//   ]
// },
// {
//   "id": "facewash1",
//   "icon": "🧴",
//   "title": "Skin Whitening Face Wash",
//   "description": "Reveal a radiant and even-toned complexion with our Skin Whitening Face Wash — a luxurious foaming cleanser formulated to brighten and revitalize dull skin. Enriched with L-glutathione and Kojic Acid, it helps reduce pigmentation, dark spots, and uneven skin tone while promoting a natural glow. Vitamin C provides powerful antioxidant protection and enhances luminosity, while Acid Dipalmitate supports skin brightening and smoothness. With regular use, your skin looks visibly fairer, clearer, and more luminous. Gentle yet effective, this face wash delivers 3X more efficiency for whitening and brightening, leaving your skin refreshed, soft, and glowing after every wash.",
//   "price": "220.00",
//   "ingredients": ["L-glutathione", "Kojic Acid", "Acid Dipalmitate", "Vitamin C"],
//   "benefits": [
//     "3X More Efficient",
//     "For Whitening & Brightening"
//   ]
// },
//     {
//   "id": "serum",
//   "icon": "✨",
//   "title": "Skin Renew Serum",
//   "description": "Revitalize your skin with our Skin Renew Serum — a potent blend of brightening and rejuvenating actives designed to reveal a smoother, more radiant complexion. Infused with Tranexamic Acid and Alpha Arbutin, it effectively targets dark spots, hyperpigmentation, and uneven skin tone for visibly clearer skin. Vitamin E provides antioxidant protection, helping to repair and strengthen the skin barrier, while Niacinamide enhances brightness and refines texture. This lightweight, fast-absorbing formula deeply nourishes and promotes an even, luminous glow, leaving your skin refreshed, youthful, and beautifully renewed.",
//   "price": "749.00",
//   "ingredients": ["Tranexamic Acid", "Alpha Arbutin", "Vitamin E", "Niacinamide"],
//   "benefits": [
//     "Reduce Dark Spots",
//     "Depigmentation",
//     "Even Skin Tone",
//     "Skin Brightening"
//   ]
// },
//    {
//   "id": "serum1",
//   "icon": "☀️",
//   "title": "Brightening Serum",
//   "description": "Illuminate your complexion with our Brightening Serum — a lightweight, fast-absorbing formula that delivers deep hydration and a radiant glow. Powered by Ferulic Acid and Vitamin C, it brightens dull skin, fades dark spots, and helps reduce signs of sun damage and hyperpigmentation. Hyaluronic Acid locks in moisture, keeping your skin plump and hydrated, while Vitamin E provides antioxidant protection against environmental stressors. With regular use, your skin appears visibly brighter, smoother, and more luminous — a true glow booster for everyday radiance.",
//   "price": "749.00",
//   "ingredients": ["Ferulic Acid", "Hyaluronic Acid", "Vitamin C", "Vitamin E"],
//   "benefits": [
//     "Brighten Skin Tone",
//     "Glow Booster",
//     "Fades Dark Spots & Hyperpigmentation"
//   ]
// },
//    {
//   "id": "brightening-cream",
//   "icon": "🌙",
//   "title": "ECO Bright Cream",
//   "description": "Wake up to luminous, even-toned skin with our ECO Bright Cream — a rich, nourishing night cream formulated to deeply repair and rejuvenate while you sleep. Infused with Kojic Acid and Dipalmitate, it helps reduce pigmentation and dark spots for a visibly brighter complexion. Tyrostat and L-Glutathione work synergistically to lighten discoloration and improve overall skin tone, while Vitamin C boosts radiance and supports collagen production. This powerful blend restores your skin’s natural glow, leaving it soft, smooth, and refreshed every morning.",
//   "price": "220.00",
//   "ingredients": ["Kojic Acid", "Dipalmitate", "Tyrostat", "L-Glutathione", "Vitamin C"],
//   "benefits": [
//     "Brightens and Evens Skin Tone",
//     "Reduces Pigmentation and Dark Spots",
//     "Enhances Radiance and Glow",
//     "Promotes Skin Repair and Renewal",
//     "Deeply Nourishes and Hydrates Overnight"
//   ]
// }

    
//   ];

const products = [
  {
    "id": "facewash",
    "icon": "🧴",
    "title": "Acne Control Face Wash",
    "description": "Experience clearer, healthier skin with our Acne Control Face Wash — a scientifically formulated cleansing gel designed to target acne at its root. Powered by Salicylic Acid and Mandelic Acid, it gently exfoliates dead skin cells, unclogs pores, and reduces breakouts without stripping away essential moisture. Tea Tree Oil fights pimple-causing bacteria, while Cica Extract soothes irritation and supports skin healing. With a pH-balanced (5.5) skin-friendly formula, it maintains your natural barrier and controls excess oil for a fresh, matte look. Suitable for all skin types and proven to deliver 3X more efficiency in clearing acne, reducing inflammation, and preventing future breakouts.",
    "price": "₹220.00",
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
    "description": "Reveal a radiant and even-toned complexion with our Skin Whitening Face Wash — a luxurious foaming cleanser formulated to brighten and revitalize dull skin. Enriched with L-glutathione and Kojic Acid, it helps reduce pigmentation, dark spots, and uneven skin tone while promoting a natural glow. Vitamin C provides powerful antioxidant protection and enhances luminosity, while Acid Dipalmitate supports skin brightening and smoothness. With regular use, your skin looks visibly fairer, clearer, and more luminous. Gentle yet effective, this face wash delivers 3X more efficiency for whitening and brightening, leaving your skin refreshed, soft, and glowing after every wash.",
    "price": "₹220.00",
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
    "description": "Revitalize your skin with our Skin Renew Serum — a potent blend of brightening and rejuvenating actives designed to reveal a smoother, more radiant complexion. Infused with Tranexamic Acid and Alpha Arbutin, it effectively targets dark spots, hyperpigmentation, and uneven skin tone for visibly clearer skin. Vitamin E provides antioxidant protection, helping to repair and strengthen the skin barrier, while Niacinamide enhances brightness and refines texture. This lightweight, fast-absorbing formula deeply nourishes and promotes an even, luminous glow, leaving your skin refreshed, youthful, and beautifully renewed.",
    "price": "₹749.00",
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
    "description": "Illuminate your complexion with our Brightening Serum — a lightweight, fast-absorbing formula that delivers deep hydration and a radiant glow. Powered by Ferulic Acid and Vitamin C, it brightens dull skin, fades dark spots, and helps reduce signs of sun damage and hyperpigmentation. Hyaluronic Acid locks in moisture, keeping your skin plump and hydrated, while Vitamin E provides antioxidant protection against environmental stressors. With regular use, your skin appears visibly brighter, smoother, and more luminous — a true glow booster for everyday radiance.",
    "price": "₹749.00",
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
    "description": "Wake up to luminous, even-toned skin with our ECO Bright Cream — a rich, nourishing night cream formulated to deeply repair and rejuvenate while you sleep. Infused with Kojic Acid and Dipalmitate, it helps reduce pigmentation and dark spots for a visibly brighter complexion. Tyrostat and L-Glutathione work synergistically to lighten discoloration and improve overall skin tone, while Vitamin C boosts radiance and supports collagen production. This powerful blend restores your skin’s natural glow, leaving it soft, smooth, and refreshed every morning.",
    "price": "₹220.00",
    "ingredients": ["Kojic Acid", "Dipalmitate", "Tyrostat", "L-Glutathione", "Vitamin C"],
    "benefits": [
      "Brightens and Evens Skin Tone",
      "Reduces Pigmentation and Dark Spots",
      "Enhances Radiance and Glow",
      "Promotes Skin Repair and Renewal",
      "Deeply Nourishes and Hydrates Overnight"
    ]
  }
];


  return (
    <section id="products" className="products">
      <h2 className="section-title">Our Premium Collection</h2>
      <p className="section-subtitle">
        Carefully crafted skincare essentials designed to enhance your natural beauty and nourish your skin
      </p>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
