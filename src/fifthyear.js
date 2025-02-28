// BabiesPage.js
import React, { useState,useEffect } from 'react';
import "./fifthyear.css";
import a1 from './images/Age/rocket.jpg';
import a2 from './images/Age/avg.jpg';
import a3 from './images/Age/machand.jpg';
import a4 from './images/Age/eplay.jpg';
import a5 from './images/Age/telescope.jpg';
import a6 from './images/Age/pinball.jpg';
import a7 from './images/Age/bmw.jpg';
import a8 from './images/Age/difcube.jpg';
import a9 from './images/Age/calender.jpg';
import a10 from './images/Age/solar.jpg';
import a11 from './images/Age/arange.jpg';
import a12 from './images/Age/arrow.jpg';
import a13 from './images/Age/track.jpg';
import a14 from './images/Age/sportkit.jpg';
import a15 from './images/Age/foosball.jpg';
import a16 from './images/Age/explorer.jpg';
import a17 from './images/Age/pagecraft.jpg';
import a18 from './images/Age/ewatch.jpg';
import a19 from './images/Age/fboard.jpg';
import a20 from './images/Age/dipuzz.jpg';
import a21 from './images/Age/cube.jpg';

const FifthYear = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const babyProducts = [
    {
      id: 1,
      name: "Rocket Launcher Kit",
      brand: "SMARTIVITY",
      price: 679.00,
      image: a1,
      rating: 4.5,
      reviews: 28
    },
    {
      id: 2,
      name: "Marvel Avengers Puzzles",
      brand: "FRANK",
      price: 660.00,
      image: a2,
      rating: 4.5,
      reviews: 28
    },
    {
      id: 3,
      name: "Robotic Machenical Hand",
      brand: "SMARTIVITY",
      price: 1039.00,
      image: a3,
      rating: 4.5,
      reviews: 28
    },
    {
        id: 4,
        name: "Electricity Kit",
        brand: "SMARTIVITY",
        price: 1169.00,
        image: a4,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 5,
        name: "Telescope",
        brand: "TOYSHINE",
        price: 699.00,
        image: a5,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 6,
        name: "Pinball Machine",
        brand: "DEOXY",
        price: 1349.00,
        image: a6,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 7,
        name: "Mercedes-AMG",
        brand: "LEGO",
        price: 2799.00,
        image: a7,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 8,
        name: "Cube Combo Set Of 2*2,3*3,Pyramid",
        brand: "D-ITERNAL",
        price: 529.00,
        image: a8,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 9,
        name: "Wooden Calender(VelcroActivity Wall Game",
        brand: "WISSEN",
        price: 625.00,
        image: a9,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 10,
        name: "Wooden Solar System",
        brand: "TREASUREBOX",
        price: 199.00,
        image: a10,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 11,
        name: "Sort Spellings",
        brand: "THE-PUZZLES-CO",
        price: 799.00,
        image: a11,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 12,
        name: "Shiv Bow & Arrow Set With Trishul & 3 Section Cup",
        brand: "RATNA'S",
        price: 269.00,
        image: a12,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 13,
        name: "Hydraulic Forkit ToyCar",
        brand: "SMARTIVITY",
        price: 669.00,
        image: a13,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 14,
        name: "Multi Sports Kit",
        brand: "SMARTIVITY",
        price: 879.00,
        image: a14,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 15,
        name: "Foosball Table",
        brand: "SMARTIVITY",
        price: 1089.00,
        image: a15,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 16,
        name: "Global Explorer(Animals,Mountains,Places,More)",
        brand: "SMARTIVITY",
        price: 1449.00,
        image: a16,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 17,
        name: "Ballista Launcher Educational Toy",
        brand: "GENIUSBOX",
        price: 1299.00,
        image: a17,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 18,
        name: "Keenkind Remote Control Watch-Car RC ",
        brand: "GENERIC",
        price: 599.00,
        image: a18,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 19,
        name: "Mini Footbal TbaleTop Game",
        brand: "KIDOLOGY",
        price: 899.00,
        image: a19,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 20,
        name: "Jigsaw Puzzles Of Dinosaurs",
        brand: "BRIJBASI",
        price: 785.00,
        image: a20,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 21,
        name: "5*5 Cube Color-Matching Puzzle",
        brand: "RUBIK'S",
        price: 199.00,
        image: a21,
        rating: 4.5,
      reviews: 28
      },
  ];

  useEffect(() => {
    setProducts([...babyProducts]); // Initialize products with babyProducts
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
      sortedProducts = [...babyProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="fifth-page-wrapper">
      <div className="fifth-page-header-container">
        <h1 className="fifth-page-header">12-14 Years</h1>
        <p className="fifth-page-subheader">Discover our carefully curated selection 12-14 Years Age toys</p>
      </div>
      
      <div className="fifth-layout-container">
        <aside className="fifth-sidebar">
          <div className="fifth-filter-block">
            <h2 className="fifth-filter-heading">Sort Options</h2>
            <select 
              className="fifth-dropdown" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Sort By: Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        <div className="fifth-products">
          {products.map(product => (
            <div  key={product.id} className="fifth-product-card">
              <img src={product.image} alt={product.name} />
              
                  
            <div className="fifth-product-info">
              <h3>{product.name}</h3>
              <p className="fifth-brand">{product.brand}</p>
              <div className="fifth-product-rating">
                      <span className="stars">{renderStars(product.rating)}</span>
                      <span className="review-count">({product.reviews})</span>
                </div>
              <p className="price">₹{product.price.toFixed(2)}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthYear;
