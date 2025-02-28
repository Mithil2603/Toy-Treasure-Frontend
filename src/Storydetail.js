import React from 'react';
import { Link } from 'react-router-dom';
import c1 from './images/storyteller_blue.jpg';
import c2 from './images/storyteller_robot.jpg';
import c3 from './images/storytellingbear.jpg';
import c4 from './images/religion/shiv.jpg';
import c5 from './images/religion/swami.jpg';
import c6 from './images/jesus.jpg';
import c7 from './images/storyteller/snailteller.jpg';

const StoryTeller = () => {
  const storyTellerData = [
    {
      id: 501,
      name: "Blue Storyteller",
      price: "Rs.75.00",
      img: c1,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 502,
      name: "Robot Storyteller",
      price: "Rs.80.00",
      img: c2,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 503,
      name: "Storytelling Bear",
      price: "Rs.140.00",
      img: c3,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 504,
      name: "Interactive Shiv",
      price: "Rs.430.00",
      img: c4,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 505,
      name: "Talking Swami",
      price: "Rs.300.00",
      img: c5,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 506,
      name: "Jesus Stories",
      price: "Rs.250.00",
      img: c6,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 507,
      name: "Snail Storyteller",
      price: "Rs.250.00",
      img: c7,
      rating: 4.8,
      reviews: 156
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Story Teller Toys</h1>
        <p>Interactive storytelling companions for children</p>
      </div>
      
      <div className="products-grid">
        {storyTellerData.map((product) => (
          <Link 
            to={`/product/${product.id}`} 
            className="product-card" 
            key={product.id}
          >
            <div className="product-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <div className="rating">
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span 
                      key={index} 
                      className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="review-count">({product.reviews} reviews)</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoryTeller;