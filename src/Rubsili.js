// Rubsili.js
import React, { useState,useEffect } from "react";
import "./storyteller.css";
import img1 from "./images/rubsili/page_54_img_1.png";
import img2 from "./images/rubsili/duck.jpg"; 
import img3 from "./images/rubsili/elephant.jpg";
import img4 from "./images/rubsili/puppy.jpg";
import img5 from "./images/rubsili/giraffe.jpg";
import img6 from "./images/rubsili/panda.jpg";
import img7 from "./images/rubsili/teddy.jpg";
import img8 from "./images/rubsili/lion.jpg";
import img9 from "./images/rubsili/rabbit.jpg";

const Rubsili = () => {
  const [sortBy, setSortBy] = useState("relevance");
  const [products, setProducts] = useState([]);
  const rubsiliProducts = [
    { id: 1, name: "Rubsili Playset", brand: "RUBSILI TOYS", price: 300.0, image: img1 },
    { id: 2, name: "Rubsili Duck", brand: "RUBSILI TOYS", price: 250.0, image: img2 },
    { id: 3, name: "Silicone Elephant", brand: "KIDS SOFT TOYS", price: 275.0, image: img3 },
    { id: 4, name: "Rubber Puppy", brand: "PLAYFUL TOYS", price: 290.0, image: img4 },
    { id: 5, name: "Soft Giraffe", brand: "RUBSILI TOYS", price: 320.0, image: img5 },
    { id: 6, name: "Squeaky Panda", brand: "FUNLAND TOYS", price: 310.0, image: img6 },
    { id: 7, name: "Rubber Teddy", brand: "PLAYFUL TOYS", price: 280.0, image: img7 },
    { id: 8, name: "Silicone Lion", brand: "KIDS SOFT TOYS", price: 300.0, image: img8 },
    { id: 9, name: "Rubsili Bunny", brand: "RUBSILI TOYS", price: 295.0, image: img9 },
  ];
  useEffect(() => {
    setProducts([...rubsiliProducts]); // Initialize products with babyProducts
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
      sortedProducts = [...rubsiliProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">Rubber & Silicon</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of Rubber & Silicon</p>
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
export default Rubsili;