import React, { useState,useEffect } from 'react';
import { Star, ShoppingCart, Search, Heart, User } from 'lucide-react';
import { useParams } from 'react-router-dom';
import './productdetailsecond.css';
import p1 from './images/teddy_brown.jpg';
import { Link } from 'react-router-dom';
import './payments.js';
import p2 from './images/drum_red.jpg';
import r1 from './Logo.jpg';
const ProductDetail2 = () => {
  const [quantity, setQuantity] = useState(1);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
   
    useEffect(() => {
      const handleScroll = () => {
        setIsHeaderSticky(window.scrollY > 40);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  const { id } = useParams();

  // For testing - if image fails to load, use a placeholder
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x600?text=Teddy+Bear";
  };

  const product = {
    id: 301,
    name: "MusicalToy Drum",
    basePrice: "Rs.295.50",
    img: p2,
    rating: 4.5,
    reviews: 128,
    description: "Red COlored Musical Drum for Fun MAde Of Wood",
    details: {
      "Age": "3+ years",
      "Material": "100% Polyester",
      "Dimensions": "11.75 x 23.5 x 37.75 inches",
      "Weight": "10.6 lbs",
      "Care": "Hand wash only"
    }
  };
  const calculateTotal = () => {
    return (product.basePrice * quantity).toFixed(2);
  };

  return (
    <div className="main-container">

    <div className="wrapper">
      <div className="container">
        <div className="image-section">
          <img 
            src={product.img} 
            alt={product.name} 
            className="main-image"
            onError={handleImageError}
          />
        </div>
        
        {/* Rest of your component code remains the same */}
        <div className="info-section">
          <h1 className="title">{product.name}</h1>
          
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={20}
                className={`star ${i < Math.floor(product.rating) ? 'active' : ''}`}
              />
            ))}
            <span className="review-count">({product.reviews} reviews)</span>
          </div>
          
          <div className="price-container">
              <p className="price">{product.basePrice}</p>
              {quantity > 1 && (
                <p className="total-price">
                  Total: Rs.{calculateTotal()}
                </p>
              )}
            </div>
          <p className="desc">{product.description}</p>
          
          <div className="quantity">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="qty-btn"
              disabled={quantity <= 1}
            >
              -
            </button>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="qty-input"
            />
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="qty-btn"
            >
              +
            </button>
            <span className="quantity-label">Quantity</span>
          </div>
          
          <div className="actions">
            <button className="cart-btn">
              <ShoppingCart size={20} />
              Add to Cart ({quantity})
            </button>
            <Link to="/payments"><button className="buy-btn">
              Buy Now - Rs.{calculateTotal()}
            </button></Link>
            <button className="wish-btn">
              <Heart size={20} />
            </button>
          </div>

          <div className="details">
            <h3 className="details-title">Product Details</h3>
            <ul className="details-list">
              {Object.entries(product.details).map(([key, value]) => (
                <li key={key} className="details-item">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail2;