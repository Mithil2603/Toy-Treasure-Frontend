import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Religiondetail.css';

import w1 from './images/wooden/train.png';
import w2 from './images/wooden/car.png';
import w3 from './images/wooden/dog.png';
import w4 from './images/wooden/set.png';
import w5 from './images/wooden/accesories.png';
import w6 from './images/wooden/rockinghorse.png';
import w7 from './images/wooden/roll.png';
import w8 from './images/Age/woodenrattles.jpg';

const WoodenToysDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const products = [
    { id: 701, name: "Wooden Train", price: 450.00, image: w1, rating: 4.5, reviews: 128, description: "A classic wooden train for imaginative play.", details: { "Age": "3+ years", "Material": "Wood" } },
    { id: 702, name: "Wooden Car", price: 300.00, image: w2, rating: 4.5, reviews: 29, description: "A small wooden car, perfect for kids.", details: { "Age": "3+ years", "Material": "Wood" } },
    { id: 703, name: "Wooden Dog", price: 700.00, image: w3, rating: 4.5, reviews: 84, description: "A pull-along wooden dog toy.", details: { "Age": "3+ years", "Material": "Wood" } },
    { id: 704, name: "Furniture Set", price: 350.00, image: w4, rating: 4.5, reviews: 112, description: "A mini wooden furniture set for dollhouses.", details: { "Age": "3+ years", "Material": "Wood" } },
    { id: 705, name: "Wooden Accessories", price: 280.00, image: w5, rating: 4.5, reviews: 33, description: "Various wooden accessories for kids.", details: { "Age": "3+ years", "Material": "Wood" } },
    { id: 706, name: "Rocking Horse", brand: "HandmadeToys", price: 900.00, image: w6,rating: 4.5,
      reviews: 156 },
    { id: 707, name: "Wooden Roll", brand: "NESTAToys", price: 400.00, image: w7,rating: 4.5,
      reviews: 99 },
    { id: 708, name: "Wooden Roll", brand: "NESTAToys", price: 400.00, image: w8,rating: 4.5,
        reviews: 120 }
  ];

  useEffect(() => {
      if (id) {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          navigate('/WoodenToys');
        }
      }
    }, [id, navigate]);
  
    const addToCart = (product) => {
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex !== -1) {
        existingCart[existingProductIndex].quantity += 1;
      } else {
        existingCart.push({ ...product, quantity: 1 });
      }
  
      localStorage.setItem('cart', JSON.stringify(existingCart));
      alert(`${product.name} added to cart!`);
    };
  
    if (!product) {
      return <div className="loading-container">Loading...</div>;
    }
  
    return (
      <div className="product-detail-wrapper">
        <div className="product-detail-container">
          <div className="image-section">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
          <div className="info-section">
            <h1 className="title">{product.name}</h1>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={`star ${i < Math.floor(product.rating) ? 'active' : ''}`} />
              ))}
              <span className="review-count">({product.reviews} reviews)</span>
            </div>
            <p className="price">₹{product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>
            <div className="quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="qty-btn">-</button>
              <input type="number" value={quantity} min="1" readOnly className="qty-input" />
              <button onClick={() => setQuantity(quantity + 1)} className="qty-btn">+</button>
              <span className="quantity-label">Quantity</span>
            </div>
            <div className="actions">
              <button className="cart-btn">
                <ShoppingCart size={20} /> Add to Cart ({quantity})
              </button>
              <Link to="/payments">
                <button className="buy-btn">Buy Now</button>
              </Link>
              <button className="wish-btn">
                <Heart size={20} />
              </button>
            </div>
            <div className="product-details">
              <h3>Product Details</h3>
              <ul>
                {Object.entries(product.details).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default WoodenToysDetail;