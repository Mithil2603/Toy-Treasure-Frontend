import React from 'react';
import './deliverypayment.css';
import { Star, ChevronLeft,ChevronDown, ChevronRight, ShoppingCart, Search, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import r1 from './Logo.jpg';

const PaymentForm = () => {
  return (
    <div className="toytreasure-container">
    {/* Top Banner */}
    <div className="promo-banner">
      FREE SHIPPING ON ORDERS Rs.1500+
    </div>
  
    {/* Header */}
    <div className="toytreasure-header">
      <div className="header-top">
        <div className="logo-section">
          <Link to="/">
            <img src={r1} alt="Logo" className="site-logo" />
          </Link>
          <h1 className="site-title">TOY TREASURE</h1>
        </div>
        <div className="search-icons-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-field"
            />
            <Search className="search-icon" size={20} />
          </div>
          <div className="icon-group">
            <Link to="/favourite"><Heart className="icon-btn" size={24} />
            </Link>
            <Link to="/RoleLogin">
              <User className="icon-btn" size={24} />
            </Link>
            <Link to="/Addtocart">
              <ShoppingCart className="icon-btn" size={24} />
            </Link>
          </div>
        </div>
      </div>
  </div>
  <center>
      <div className="form-container">
        <h2>Payment Details</h2>
        <form>
          <div className="form-group">
            <label>Payment ID</label>
            <input type="text" placeholder="Payment ID" required />
          </div>
          <div className="form-group">
            <label>Order ID</label>
            <input type="text" placeholder="Order ID" required />
          </div>
          <div className="form-group">
            <label>Customer ID</label>
            <input type="text" placeholder="Customer ID" required />
          </div>
          <div className="form-group">
            <label>Payment Mode</label>
            <input type="text" placeholder="Payment Mode" required />
          </div>
          <div className="form-group">
            <label>Payment Status</label>
            <input type="text" placeholder="Payment Status" required />
          </div>
          <div className="form-group">
            <label>Payment Date</label>
            <input type="date" placeholder="Payment Date" required />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input type="number" placeholder="Amount" required />
          </div>
          <button type="submit" className="pay-now">Pay Now</button>
        </form>
      </div>
      </center>
    </div>
    
  );
};

export default PaymentForm;