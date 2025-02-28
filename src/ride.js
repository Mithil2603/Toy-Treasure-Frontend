import React, { useState, useEffect,Link } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ride.css";
import { Religiondetails } from './Religiondetail.js';
import c1 from './images/religion/jesusmary.jpg';
import c2 from './images/religion/hanuman.jpg';
import c3 from './images/religion/ganpati.jpg';
import c4 from './images/religion/shiv.jpg';
import c5 from './images/religion/swami.jpg';
import c6 from './images/jesus.jpg';
import c7 from './images/Age/reg.jpg';
import c8 from './images/religion/Noah_Ark_Toys.jpg';
import c9 from './images/religion/buddha.jpg';
import c10 from './images/religion/muslimdoll.jpg';
import c11 from './images/religion/mosque.jpg';
import c12 from './images/religion/buddhabook.png';
import c13 from './images/religion/krishna.jpg';
import c14 from './images/religion/krishnabook.png';
import c15 from './images/religion/alphabet_kaba.jpg';
import c16 from './images/religion/hanuman1.jpg';
import c17 from './images/religion/hanumankalyan.jpg';
import c18 from './images/religion/biblechars.jpg';
import c19 from './images/religion/sikhim.jpg';
import c20 from './images/religion/talkingcloud.jpg';
import c21 from './images/religion/mosquetalking.jpg';
import c22 from './images/religion/ganesha.png';
import c23 from './images/religion/ganeshabook.png';

const RideOnsPage = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const initialProducts = [
    {
      id: 401,
      name: "Jesus Mary Toy",
      brand: "ELEFANT",
      price: 750.00,
      image: c1,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 402,
      name: "Hanuman",
      brand: "SHUME",
      price: 280.00,
      image: c2,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 403,
      name: "Ganpati",
      brand: "TENDER LEAF TOYS",
      price: 340.00,
      image: c3,
      rating: 4.7,
      reviews: 92
    },
    {
      id: 404,
      name: "Shiv",
      brand: "NESTA TOYS",
      price: 430.00,
      image: c4,
      rating: 4.9,
      reviews: 203
    },
    {
      id: 405,
      name: "Swami Statue",
      brand: "TENDER LEAF TOYS",
      price: 300.00,
      image: c5,
      rating: 4.6,
      reviews: 167
    },
    {
      id: 406,
      name: "Jesus",
      brand: "SHUFEE TOYS",
      price: 250.00,
      image: c6,
      rating: 4.4,
      reviews: 145
    },
    {
      id: 407,
      name: "Lord Shiva & Parvati Duo",
      brand: "TOYSHINE",
      price: 998.00,
      image: c7,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 408,
      name: "Noah's Ark",
      brand: "MODI TOYS",
      price: 998.00,
      image: c8,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 409,
      name: "Budha Toy",
      brand: "TOYSHINE",
      price: 998.00,
      image: c9,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 410,
      name: "Muslism Hijab Girl Doll",
      brand: "TOYSHINE",
      price: 998.00,
      image: c10,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 411,
      name: "Mosque",
      brand: "MODI TOYS",
      price: 998.00,
      image: c11,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 412,
      name: "Budha Book",
      brand: "SHUFEE",
      price: 998.00,
      image: c12,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 413,
      name: "Krishna",
      brand: "ELEFANT",
      price: 998.00,
      image: c13,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 414,
      name: "Krishna Book",
      brand: "NESTA TOYS",
      price: 998.00,
      image: c14,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 415,
      name: "Alphabet Kaba",
      brand: "TOYSHINE",
      price: 998.00,
      image: c15,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 416,
      name: "Hanuman",
      brand: "TENDER LEAF TOYS",
      price: 998.00,
      image: c16,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 417,
      name: "Hanuman Kalyan",
      brand: "TENDER LEAF TOYS",
      price: 998.00,
      image: c17,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 418,
      name: "Bible Characters",
      brand: "PLAY SHIFU",
      price: 998.00,
      image: c18,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 419,
      name: "Sikim",
      brand: "PLAY SHIFU",
      price: 998.00,
      image: c19,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 420,
      name: "Talking Cloud",
      brand: "NESTA TOYS",
      price: 998.00,
      image: c20,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 421,
      name: "Mosque Talking",
      brand: "TOYSHINE",
      price: 998.00,
      image: c21,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 422,
      name: "Ganesha",
      brand: "TOYSHINE",
      price: 290.00,
      image: c22,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 423,
      name: "Ganesha Book",
      brand: "SHUMEE",
      price: 590.00,
      image: c23,
      rating: 4.5,
      reviews: 128
    }
  ];

  const addToCart = (e, product) => {
    e.stopPropagation(); // Prevent navigation
    
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already exists in cart
    const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
      // If product exists, increase quantity
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Show feedback to user
    alert(`${product.name} added to cart!`);
  };
  const handleProductClick = (productId) => {
    navigate(`/Religiondetail/${productId}`); // Updated navigation path
  };
  useEffect(() => {
      setProducts([...initialProducts]); // Initialize products with babyProducts
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
        sortedProducts = [...initialProducts]; // Reset to default order for 'relevance'
      }
  
      setProducts(sortedProducts);
    }, [sortBy]);
  
    return (
      <div className="babies-page-wrapper">
        <div className="babies-page-header-container">
          <h1 className="babies-page-header">Religion Toys</h1>
          <p className="babies-page-subheader">Discover our carefully curated selection of Religion Toys</p>
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
              <div 
                key={`product-${product.id}`} 
                className="product-card"
                onClick={() => handleProductClick(product.id)}
                style={{ cursor: 'pointer' }}
              >
                <img src={product.image} alt={product.name} />
                {/* <div className="quick-view-overlay">
                  <button 
                    className="quick-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                  >
                    Quick View
                  </button>
                </div> */}
                      
                <div className="rides-product-info">
                  <h3>{product.name}</h3>
                  <p className="brand">{product.brand}</p>
                  <div className="rides-product-rating">
                    <span className="stars">{renderStars(product.rating)}</span>
                    <span className="review-count">({product.reviews})</span>
                  </div>
                  <p className="price">₹{product.price.toFixed(2)}</p>
                  <button 
                  className="add-to-cart-btn"
                  onClick={(e) => addToCart(e, product)}
                >
                  Add to Cart
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default RideOnsPage;