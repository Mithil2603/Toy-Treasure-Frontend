// BabiesPage.js
import React, { useState,useEffect } from 'react';
import "./babiespage.css";
import a1 from './images/Age/puzzle.jpg';
import a2 from './images/Age/latto.jpg';
import a3 from './images/Age/reg.jpg';
import a4 from './images/Age/basketball.jpg';
import a5 from './images/Age/computer.jpg';
import a6 from './images/Age/robot.jpg';
import a7 from './images/Age/adventure_car.jpg';
import a8 from './images/Age/magneticdraw.jpg';
import a9 from './images/Age/travel.jpg';
import a10 from './images/Age/jumpingbird.jpg';
import a11 from './images/Age/Giometric.jpg';
import a12 from './images/Age/rocket.jpg';

const SecondYear = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const babyProducts = [
    {
      id: 1,
      name: "Alphabets Puzzle",
      brand: "EDUCATIONAL GIFT",
      price: 1299.00,
      image: a1,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: "Magic Lattoo With Music & Lights",
      brand: "KRIDHA TOYS",
      price: 168.00,
      image: a2,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 3,
      name: "Lord Shiva & Parvati Duo",
      brand: "TOYSHINE",
      price: 998.00,
      image: a3,
      rating: 4.5,
      reviews: 128
    },
    {
        id: 4,
        name: "Mini BasketBall Game",
        brand: "MINI",
        price: 158.00,
        image: a4,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 5,
        name: "Battery Operated Learning Laptop",
        brand: "Disney",
        price: 369.00,
        image: a5,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 6,
        name: "Storio Robot Rotating Gear Toy",
        brand: "HASBRO",
        price: 499.00,
        image: a6,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 7,
        name: "Adventure Car",
        brand: "ELEFANT",
        price: 299.00,
        image: a7,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 8,
        name: "Magnetic Draw Table",
        brand: "SHUMEE",
        price: 399.00,
        image: a8,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 9,
        name: "Travel Board",
        brand: "HASBRO",
        price: 699.00,
        image: a9,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 10,
        name: "Jumping Birds",
        brand: "NESTA TOYS",
        price: 299.00,
        image: a10,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 11,
        name: "Giometric",
        brand: "NESTA TOYS",
        price: 650.00,
        image: a11,
        rating: 4.5,
      reviews: 128
      },
      {
        id: 12,
        name: "Rocket",
        brand: "HASBRO",
        price: 499.00,
        image: a12,
        rating: 4.5,
      reviews: 128
      }
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
        <div className="babies-page-wrapper">
          <div className="babies-page-header-container">
            <h1 className="babies-page-header">3-4 Years</h1>
            <p className="babies-page-subheader">Discover our carefully curated selection of 3-4 Years Age toys</p>
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

export default SecondYear;
