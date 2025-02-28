import React, { useState,useEffect } from 'react';
import "./storyteller.css";
import sp1 from './images/sports/4.jpg';
import sp2 from './images/sports/5.jpg';
import sp3 from './images/sports/1.jpg';
import sp4 from './images/sports/ball.jpg';
import sp5 from './images/sports/page_13_img_1.png';
import sp6 from './images/sports/2.jpg';
import sp7 from './images/sports/3.jpg';

const SportsToys = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const sportsToysProducts = [
    { id: 1, name: "Football", brand: "KickMaster", price: 150.00, image: sp1,rating: 4.5,
      reviews: 100},
    { id: 2, name: "Basketball", brand: "HoopsKing", price: 190.00, image: sp2,rating: 4.5,
      reviews: 100 },
    { id: 3, name: "Bowling", brand: "AceStrike", price: 250.00, image: sp3,rating: 4.5,
      reviews: 100 },
    { id: 4, name: "Football Musical", brand: "PowerHit", price: 500.00, image: sp4,rating: 4.5,
      reviews: 100 },
    { id: 5, name: "Badminton Racket", brand: "ShuttlePro", price: 450.00, image: sp5,rating: 4.5,
      reviews: 100 },
    { id: 6, name: "Table Tennis Kit", brand: "PingPong", price: 380.00, image: sp6,rating: 4.5,
      reviews: 100 },
    { id: 7, name: "Hockey Stick", brand: "GoalMaster", price: 420.00, image: sp7,rating: 4.5,
      reviews: 100 }
  ];

  useEffect(() => {
    setProducts([...sportsToysProducts]); // Initialize products with babyProducts
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
      sortedProducts = [...sportsToysProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">Sports Toys</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of Sports Toys</p>
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
export default SportsToys;
