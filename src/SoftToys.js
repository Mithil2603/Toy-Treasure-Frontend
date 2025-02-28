import React, { useState,useEffect } from 'react';
import "./storyteller.css";
import sp1 from './images/soft/doremon.jpg';
import sp2 from './images/soft/tiger.jpg';
import sp3 from './images/soft/mickeymouse.jpg';
import sp4 from './images/soft/dinosaur.jpg';
import sp5 from './images/soft/snowdragon.jpg';
import sp6 from './images/soft/bluesoft.jpg';
import sp7 from './images/soft/cat.jpg';
import sp8 from './images/soft/page_43_img_1.png';
import sp9 from './images/soft/page_44_img_1.png';
import sp10 from './images/soft/page_45_img_1.png';
import sp11 from './images/soft/page_46_img_1.png';
import sp12 from './images/soft/page_47_img_1.png';

const SoftToys = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const softToysProducts = [
    { id: 1, name: "Doremon", brand: "KickMaster", price: 300.00, image: sp1,rating: 4.5,
      reviews: 100},
    { id: 2, name: "Tiger", brand: "HoopsKing", price: 350.00, image: sp2,rating: 4.5,
      reviews: 100 },
    { id: 3, name: "Mickey Mouse", brand: "AceStrike", price: 400.00, image: sp3,rating: 4.5,
      reviews: 100 },
    { id: 4, name: "Dinosaur", brand: "PowerHit", price: 500.00, image: sp4,rating: 4.5,
      reviews: 100 },
    { id: 5, name: "Snow Dragon", brand: "ShuttlePro", price: 450.00, image: sp5,rating: 4.5,
      reviews: 100 },
    { id: 6, name: "Blue Soft", brand: "PingPong", price: 380.00, image: sp6,rating: 4.5,
      reviews: 100 },
    { id: 7, name: "Cat", brand: "GoalMaster", price: 420.00, image: sp7,rating: 4.5,
      reviews: 100 },
    { id: 8, name: "Parrot", brand: "GoalMaster", price: 420.00, image: sp8,rating: 4.5,
    reviews: 100 },
    { id: 9, name: "Elephant", brand: "GoalMaster", price: 420.00, image: sp9,rating: 4.5,
     reviews: 100 },
    { id: 10, name: "Tom", brand: "GoalMaster", price: 420.00, image: sp10,rating: 4.5,
    reviews: 100 },
    { id: 11, name: "Unicron", brand: "GoalMaster", price: 420.00, image: sp11,rating: 4.5,
    reviews: 100 },
     { id: 12, name: "Cactus", brand: "GoalMaster", price: 420.00, image: sp12,rating: 4.5,
     reviews: 100 }
  ];

  useEffect(() => {
    setProducts([...softToysProducts]); // Initialize products with babyProducts
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
      sortedProducts = [...softToysProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">Soft Toys</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of Soft Toys</p>
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
export default SoftToys;
