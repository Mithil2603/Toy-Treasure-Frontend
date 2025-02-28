import React, { useState,useEffect } from 'react';
import "./storyteller.css";
import f1 from './images/fun/page_14_img_1.png';
import f2 from './images/fun/page_16_img_1.png';
import f3 from './images/fun/page_17_img_1.png';
import f4 from './images/fun/page_18_img_1.png';
import f5 from './images/fun/page_19_img_1.png';
import f6 from './images/fun/page_20_img_1.png';
import f7 from './images/fun/page_5_img_1.png';

const FunToys = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const funToysProducts = [
    { id: 1, name: "Bouncing Ball", brand: "PlayTime", price: 180.00, image: f1,rating: 4.5, },
    { id: 2, name: "Flying Disc", brand: "SportyFun", price: 220.00, image: f2 ,rating: 4.5, },
    { id: 3, name: "Bubble Maker", brand: "JoyBubbles", price: 150.00, image: f3,rating: 4.5, },
    { id: 4, name: "Yo-Yo Spinner", brand: "SpinMaster", price: 170.00, image: f4,rating: 4.5, },
    { id: 5, name: "Jump Rope", brand: "FitKids", price: 130.00, image: f5,rating: 4.5, },
    { id: 6, name: "Mini Kite", brand: "SkyHigh", price: 190.00, image: f6,rating: 4.5,},
    { id: 7, name: "Puzzle Cube", brand: "BrainTwist", price: 210.00, image: f7,rating: 4.5, }
  ];

  useEffect(() => {
    setProducts([...funToysProducts]); // Initialize products with babyProducts
  }, []);
  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };
  useEffect(() => {
    let sortedProducts = [...products];

    if (sortBy === 'price-low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = [...funToysProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">Fun Toys</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of Fun Toys</p>
      </div>
      
      <div className="babies-layout-container">
        <aside className="babies-sidebar">
          <div className="babies-filter-block">
            <h2 className="babies-filter-heading">Sort Options</h2>
            <select 
              className="babies-dropdown" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Sort By: Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        <div className="products">
          {products.map(product => (
            <div  key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              
                  
            <div className="rides-product-info">
              <h3>{product.name}</h3>
              <p className="brand">{product.brand}</p>
              <div className="rides-product-rating">
                      <span className="stars">{renderStars(product.rating)}</span>
                      <span className="review-count">({product.reviews})</span>
                </div>
              <p className="price">₹{product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FunToys;
