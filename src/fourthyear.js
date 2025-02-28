// BabiesPage.js
import React, { useState,useEffect } from 'react';
import "./babiespage.css";
import a1 from './images/Age/talkie.jpg';
import a2 from './images/Age/digun.jpg';
import a3 from './images/Age/ak.jpg';
import a4 from './images/Age/circlepuz.jpg';
import a5 from './images/Age/sqpuzz.jpg';
import a6 from './images/Age/spihand.jpg';
import a7 from './images/Age/zigzag.jpg';
import a8 from './images/Age/rapid.jpg';
import a9 from './images/Age/chem.jpg';
import a10 from './images/Age/fingergame.jpg';
import a11 from './images/Age/football.jpg';
import a12 from './images/Age/dotrocks.jpg';
import a13 from './images/Age/indiapuz.jpg';
import a14 from './images/Age/worldpuz.jpg';
import a15 from './images/Age/golf.jpg';
import a16 from './images/Age/mars.jpg';
import a17 from './images/Age/paint.jpg';

const FourthYear = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const FourthProducts = [
    {
      id: 1,
      name: "Walkie-Talkie",
      brand: "GOOYO",
      price: 399.00,
      image: a1
    },
    {
      id: 2,
      name: "Dinosaur Roar Blasting",
      brand: "TOYARSTY",
      price: 569.00,
      image: a2
    },
    {
      id: 3,
      name: "Musical Army Style Gun",
      brand: "TOYSHINE",
      price: 549.00,
      image: a3
    },
    {
        id: 4,
        name: "Cylindrical Shape Brainstorming Puzzle",
        brand: "TOYSHINE",
        price: 759.00,
        image: a4
      },
      {
        id: 5,
        name: "Magnetic Magic Ball",
        brand: "TOYSHINE",
        price: 289.00,
        image: a5
      },
      {
        id: 6,
        name: "Spider Web Shooter",
        brand: "DEOXY",
        price: 1178.00,
        image: a6
      },
      {
        id: 7,
        name: "Fidget Worm Toy",
        brand: "MDM HUB",
        price: 239.00,
        image: a7
      },
      {
        id: 8,
        name: "Rapid Rumble",
        brand: "SKILLMATICS",
        price: 284.00,
        image: a8
      },
      {
        id: 9,
        name: "Elemental Chemistry Game",
        brand: "CHALK & CHUCKLES",
        price: 999.00,
        image: a9
      },
      {
        id: 10,
        name: "Rotating Magic Bean",
        brand: "CHOCOZONE",
        price: 520.00,
        image: a10
      },
      {
        id: 11,
        name: "Air Football Smart",
        brand: "MIRANA",
        price: 549.00,
        image: a11
      },
      {
        id: 12,
        name: "Mandalas Painting Kit",
        brand: "TOYKRAFTT",
        price: 715.00,
        image: a12
      },
      {
        id: 13,
        name: "India Map Puzzle",
        brand: "SKILLMATICS",
        price: 599.00,
        image: a13
      },
      {
        id: 14,
        name: "Imagimake Mapology Physical Feature",
        brand: "FLOOR PUZZLES",
        price: 664.00,
        image: a14
      },
      {
        id: 15,
        name: "Wooden Constuction",
        brand: "GOLF TOYS",
        price: 699.00,
        image: a15
      },
      {
        id: 16,
        name: "Archaelogical DIY Assembly Model(MARS)",
        brand: "OLIGITDI",
        price: 399.00,
        image: a16
      },
      {
        id: 17,
        name: "Design Ocean Odyssey",
        brand: "KIPKEE YARN",
        price: 699.00,
        image: a17
      },
  ];

  useEffect(() => {
    setProducts([...FourthProducts]); // Initialize products with babyProducts
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
      sortedProducts = [...FourthProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">8-12 Years</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of 8-12 Years Age toys</p>
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

export default FourthYear;
