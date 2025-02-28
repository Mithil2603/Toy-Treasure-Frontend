import React, { useState,useEffect } from 'react';
import { ChevronDown, ChevronUp, X, Heart,ShoppingCart, Search,User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CreditCard, PayPal } from 'lucide-react';
import "./Addtocart.css";
import './payment.js';
import r1 from './Logo.jpg';
import r2 from './images/soft/snowdragon.jpg';
import r3 from './images/soft/mickeymouse.jpg';
import r4 from './images/soft/cat.jpg';
import r5 from './images/soft/doremon.jpg';
const CartPage = () => {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
   
    useEffect(() => {
      const handleScroll = () => {
        setIsHeaderSticky(window.scrollY > 40);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Snow Dragon - Gigantic",
      price: 1200.00,
      quantity: 1,
      image: r2,
      isFinalSale: true
    }
  ]);

  const [suggestedProducts] = useState([
    {
      id: 1,
      name: "Mickey Mouse",
      price: 450.00,
      brand: "Elefant",
      image: r3
    },
    {
      id: 2,
      name: "Orange Cat",
      price: 600.00,
      brand: "Shumee",
      image: r4
    },
    {
      id: 3,
      name: "Doremon",
      price: 980.00,
      brand: "Nesta Toys",
      image: r5
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="toytreasure-container">
      <div className="cart_container">
        <h1 className="text1">Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="border-b">
            <div className="flex">
              <img src={item.image} alt={item.name} className="w-32" />
              
              <div className="flex-1">
                <div className="flex">
                  <div>
                    <h3 className="text-xl">{item.name}</h3>
                    {item.isFinalSale && (
                      <p className="text-red-600">Final sale: not eligible for return</p>
                    )}
                  </div>
                  <span className="text-xl">Rs.{item.price.toFixed(2)}</span>
                </div>

                <div className="items">
                  <div className="button">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="minus"
                    >−</button>
                    <span className="px-3">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="plus"
                    >+</button>
                  </div>
                  <button className="remove">REMOVE</button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">ADD A GIFT MESSAGE</h4>
              <textarea 
                className="w-full"
                rows="3"
                placeholder="Enter your gift message here..."
              />
              <p className="gift">*GIFT WRAPPING IS CURRENTLY NOT AVAILABLE</p>
            </div>
          </div>
        ))}

        {/* Suggested Products */}
        <div className="my-12">
          <h2 className="text-2xl">You May Also Like</h2>
          <div className="grid">
            {suggestedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full"
                  />
                  <button className="absolute">
                    <Heart className="w-6" />
                  </button>
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm">{product.brand}</p>
                <p className="font-medium">Rs.{product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Section */}
        <div className="checkout-section">
          <div className="mx-auto">
            <div className="title">
              <span className="subtotal">SUBTOTAL</span>
              <span className="claculate">Rs.{calculateSubtotal().toFixed(2)}</span>
            </div>
            <p className="content">
              Shipping, taxes, and discount codes calculated at checkout.
            </p>
            <div className="space-y-3">
              <button className="cart_button">
                View Cart
              </button><br></br>
              <Link to="/payment">
              <button className="chech_button">
                Check Out
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
            </div>
    
  );
};

export default CartPage;