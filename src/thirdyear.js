// BabiesPage.js
import React, { useState,useEffect } from 'react';
import "./babiespage.css";
import a1 from './images/Age/dinosaur.jpg';
import a2 from './images/Age/piano.jpg';
import a3 from './images/Age/scikit.jpg';
import a4 from './images/Age/foilfun.jpg';
import a5 from './images/Age/ecar.jpg';
import a6 from './images/Age/digcamera.jpg';
import a7 from './images/Age/scratchpad.jpg';
import a8 from './images/Age/kitchen.jpg';
import a9 from './images/Age/blockbuild.jpg';
import a10 from './images/Age/batball.jpg';
import a11 from './images/Age/airgun.jpg';

const ThirdYear = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const thirdProducts = [
    {
      id: 1,
      name: "Dinosaurs with Screwdrivers",
      brand: "UMADIYA",
      price: 598.00,
      image: a1
    },
    {
      id: 2,
      name: "Electronic Keyboard",
      brand: "VEBETO",
      price: 899.00,
      image: a2
    },
    {
      id: 3,
      name: "Science Kit For Girls & Boys",
      brand: "PW",
      price: 459.00,
      image: a3
    },
    {
        id: 4,
        name: "Fun Card Making Set",
        brand: "SKILLMATICS",
        price: 949.00,
        image: a4
      },
      {
        id: 5,
        name: "Battery Operated Learning Laptop",
        brand: "Disney",
        price: 369.00,
        image: a5
      },
      {
        id: 6,
        name: "Digital Camera",
        brand: "WEMBLEY",
        price: 3499.00,
        image: a6
      },
      {
        id: 7,
        name: "Magical Scratch Pad",
        brand: "WEMBLEY",
        price: 239.00,
        image: a7
      },
      {
        id: 8,
        name: "Kitchen Set Suitcase",
        brand: "REAVIAN",
        price: 599.00,
        image: a8
      },
      {
        id: 9,
        name: "Wooden City Building Blocks",
        brand: "NESTA",
        price: 2387.00,
        image: a9
      },
      {
        id: 10,
        name: "Cricket Kit",
        brand: "HIGHROOF",
        price: 299.00,
        image: a10
      },
      {
        id: 11,
        name: "Flying Airplane(Enjection Airplane)",
        brand: "PLUSPICKS",
        price: 435.00,
        image: a11
      },
  ];

  useEffect(() => {
    setProducts([...thirdProducts]); // Initialize products with babyProducts
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
      sortedProducts = [...thirdProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">5-7 Years</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of 5-7 Years Age toys</p>
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
              <div className="quick-view-overlay">
                      <button className="quick-view-btn">Quick View</button>
                    </div>
                  
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
export default ThirdYear;
