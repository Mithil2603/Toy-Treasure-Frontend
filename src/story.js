
import React, { useState,useEffect } from 'react';
import "./story.css";
import c1 from './images/storyteller_blue.jpg';
import c2 from './images/storyteller_robot.jpg';
import c3 from './images/storytellingbear.jpg';
import c4 from './images/religion/shiv.jpg';
import c5 from './images/religion/swami.jpg';
import c6 from './images/jesus.jpg';
import c7 from './images/storyteller/snailteller.jpg';
const StoryTell = () => {
  const [sortBy, setSortBy] = useState('relevance');
 const [products, setProducts] = useState([]);

  const rideOnProducts = [
    {
      id: 1,
      name: "Jesus Mary Toy",
      brand: "ELEFANT",
      price: 75.00,
      image: c1,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Hanuman",
      brand: "SHUME",
      price: 80.00,
      image: c2,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 3,
      name: "Ganpati",
      brand: "TENDER LEAF TOYS",
      price: 140.00,
      image: c3,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 4,
      name: "Shiv",
      brand: "NESTA TOYS",
      price: 430.00,
      image: c4,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 5,
      name: "Swami Statue",
      brand: "TENDER LEAF TOYS",
      price: 300.00,
      image: c5,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 6,
      name: "Jesus",
      brand: "SHUFEE TOYS",
      price: 250.00,
      image: c6,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 7,
      name: "Snail",
      brand: "TENDER LEAF TOYS",
      price: 250.00,
      image: c7,
      rating: 4.8,
      reviews: 156
    }
  ];

  useEffect(() => {
      setProducts([...rideOnProducts]); // Initialize products with babyProducts
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
        sortedProducts = [...rideOnProducts]; // Reset to default order for 'relevance'
      }
  
      setProducts(sortedProducts);
    }, [sortBy]);
  
    return (
      <div className="babies-page-wrapper">
        <div className="babies-page-header-container">
          <h1 className="babies-page-header">Story Teller Toys</h1>
          <p className="babies-page-subheader">Discover our carefully curated selection of Story Teller toys</p>
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
export default StoryTell;