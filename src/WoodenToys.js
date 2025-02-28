import React, { useState,useEffect } from 'react';
import "./storyteller.css";
import w1 from './images/wooden/train.png';
import w2 from './images/wooden/car.png';
import w3 from './images/wooden/dog.png';
import w4 from './images/wooden/set.png';
import w5 from './images/wooden/accesories.png';
import w6 from './images/wooden/rockinghorse.png';
import w7 from './images/wooden/roll.png';
import w8 from './images/Age/woodenrattles.jpg';

const WoodenToys = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);
  const woodenToysProducts = [
    { id: 701, name: "Wooden Train", brand: "ClassicWood", price: 450.00, image: w1,rating: 4.5,
      reviews: 128 },
    { id: 702, name: "Wooden Car", brand: "TimberToys", price: 300.00, image: w2,rating: 4.5,
      reviews: 29 },
    { id: 703, name: "Wooden Dog", brand: "NaturalPlay", price: 700.00, image: w3 ,rating: 4.5,
      reviews: 84},
    { id: 704, name: "Furniture Set", brand: "EcoBlocks", price: 350.00, image: w4,rating: 4.5,
      reviews: 112 },
    { id: 705, name: "Wooden Set", brand: "PuzzleTree", price: 280.00, image: w5 ,rating: 4.5,
      reviews: 33},
    { id: 706, name: "Rocking Horse", brand: "HandmadeToys", price: 900.00, image: w6,rating: 4.5,
      reviews: 156 },
    { id: 707, name: "Wooden Roll", brand: "NESTAToys", price: 400.00, image: w7,rating: 4.5,
      reviews: 99 },
    { id: 708, name: "Wooden Roll", brand: "NESTAToys", price: 400.00, image: w8,rating: 4.5,
        reviews: 120 }
  ];
useEffect(() => {
      setProducts([...woodenToysProducts]); // Initialize products with babyProducts
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
        sortedProducts = [...woodenToysProducts]; // Reset to default order for 'relevance'
      }
  
      setProducts(sortedProducts);
    }, [sortBy]);
  
    return (
      <div className="babies-page-wrapper">
        <div className="babies-page-header-container">
          <h1 className="babies-page-header">Wooden Toys</h1>
          <p className="babies-page-subheader">Discover our carefully curated selection of Wooden Toys</p>
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
export default WoodenToys;
