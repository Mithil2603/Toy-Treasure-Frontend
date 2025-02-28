// BarbiePage.js
import React, { useState } from 'react';
import "./barbie.css";
import c1 from './images/Age/barbiered.jpg';
import c2 from './images/Age/barbiecam.jpg';
import c3 from './images/Age/unobarbie.jpg';
const BarbiePage = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [itemsPerPage, setItemsPerPage] = useState(36);

  const barbieProducts = [
    {
      id: 1,
      name: "2024 Barbie Holiday Doll",
      brand: "BARBIE",
      price: 42.50,
      originalPrice: 59.00,
      sale: true,
      image: c1
    },
    {
      id: 2,
      name: "Barbie Dream Camper Vehicle Playset",
      brand: "BARBIE",
      price: 105.00,
      image: c2
    },
    {
      id: 3,
      name: "Barbie Uno Cards",
      brand: "KIPLING",
      price: 103.95,
      originalPrice: 149.00,
      sale: true,
      image: c3
    }
  ];

  return (
    <div className="doll-collection-main">
      <nav className="doll-navigation">
        <span>Home</span><span>Collections</span><span>Barbie</span>
      </nav>
      
      <h1 className="doll-page-title">Barbie</h1>
      
      <div className="doll-content-grid">
        <aside className="doll-filters">
          <div className="doll-filter-category">
          </div>

          <div className="doll-filter-category">
            <h2 className="doll-category-name">PRICE</h2>
            <div className="doll-price-filter">
              <input type="range" min="10" max="148" />
              <div className="doll-price-bounds">
                <span>Rs.100</span>
                <span>Rs.8000</span>
              </div>
            </div>
          </div>
        </aside>

        <main>
          <div className="doll-top-controls">
            <div>52 Results found for 'Barbie'</div>
            <div className="doll-view-controls">
              <select className="doll-select-box" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="relevance">Sort By: Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <select className="doll-select-box" value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}>
                <option value="36">36 Items Per Page</option>
                <option value="48">48 Items Per Page</option>
              </select>
            </div>
          </div>

          <div className="doll-product-layout">
            {barbieProducts.map(product => (
              <div key={product.id} className="doll-item-card">
                {product.sale && <span className="doll-sale-tag">Sale</span>}
                <img className="doll-item-image" src={product.image} alt={product.name} />
                <h3 className="doll-item-name">{product.name}</h3>
                <p className="doll-item-brand">{product.brand}</p>
                <div className="doll-price-display">
                  {product.sale && <span className="doll-original-price">${product.originalPrice.toFixed(2)}</span>}
                  <span className="doll-current-price">${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};


export default BarbiePage;