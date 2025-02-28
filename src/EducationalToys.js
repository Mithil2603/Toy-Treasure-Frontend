import React, { useState,useEffect } from 'react';
import "./storyteller.css";
import e1 from './images/education/abacus.png';
import e2 from './images/education/puzzle.png';
import e3 from './images/education/blocks.png';
import e4 from './images/education/globe.png';
import e5 from './images/education/flashcards.png';
import e6 from './images/education/magnetics.png';
import e7 from './images/education/clock.png';
import e8 from './images/education/maths.png';
import e9 from './images/education/ring.png';
import e10 from './images/education/digits.png';

const EducationalToys = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const educationalToysProducts = [
    { id: 1, name: "Abacus", brand: "MathGenius", price: 250.00, image: e1,rating: 4.5,
      reviews: 100 },
    { id: 2, name: "Puzzle Set", brand: "BrainyKids", price: 300.00, image: e2,rating: 4.5,
      reviews: 100 },
    { id: 3, name: "Building Blocks", brand: "CreatiBuild", price: 350.00, image: e3,rating: 4.5,
      reviews: 100 },
    { id: 4, name: "World Globe", brand: "EduGlobe", price: 500.00, image: e4,rating: 4.5,
      reviews: 100 },
    { id: 5, name: "Flashcards", brand: "SmartLearners", price: 200.00, image: e5,rating: 4.5,
      reviews: 100 },
    { id: 6, name: "Magnetic Letters", brand: "AlphaKids", price: 280.00, image:e6,rating: 4.5,
      reviews: 100 },
    { id: 7, name: "Clock Learning", brand: "ELEFANT", price: 400.00, image:e7,rating: 4.5,
        reviews: 100 },
    { id: 8, name: "Maths Learning", brand: "NATUTAL TOYS", price: 390.00, image:e8,rating: 4.5,
            reviews: 100 },
    { id: 9, name: "Ring Throwing ", brand: "SHUMAEE", price: 270.00, image:e9,rating: 4.5,
                reviews: 100 },
    { id: 10, name: "Animal Words Learning", brand: "PLAY SHUFEE", price: 599.00, image:e10,rating: 4.5,
                    reviews: 100 }
  ];

  useEffect(() => {
    setProducts([...educationalToysProducts]); // Initialize products with babyProducts
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
      sortedProducts = [...educationalToysProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">Education Toys</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of Educational Toys</p>
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
export default EducationalToys;
