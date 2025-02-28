import React from 'react';
import { Link } from 'react-router-dom';
import r1 from './Logo.jpg';
import "./termsofsale.css";
import { ShoppingCart, Search, Heart, User } from 'lucide-react';

const TermsOfSale = () => {
  return (
    <div className="toytreasure-container">
      {/* Terms of Sale Content */}
      <div className="terms-content">
        <h1 className="terms-title">Terms of Sale</h1>
        <p className="terms-date">Date of Last Update: January 10, 2025</p>

        <div className="terms-section">
          <h2>ORDERING</h2>
          <p>These terms of sale apply to all orders accepted by Toy Treasure LLC. When you place an order, our third-party payment service provider will collect your credit card details and charge your credit card account in connection with the order. We do not view or store your credit card information.</p>
        </div>

        <div className="terms-section">
          <h2>ACCEPTANCE & FULFILLMENT</h2>
          <p>All orders are subject to acceptance. After you place an order, you will receive an email confirming that we have received it. Acceptance of your order will occur upon your receipt of another email containing a shipping confirmation, tracking number and carrier information.</p>
        </div>

        <div className="terms-section">
          <h2>PRICING</h2>
          <p>All prices are stated in local currency and do not include any shipping and handling charges or applicable taxes, unless otherwise stated. All shipping and handling charges and taxes will be communicated to you before you place an order.</p>
        </div>

        <div className="terms-section">
          <h2>SHIPPING & DELIVERY</h2>
          <p>Standard shipping times apply. Additional shipping fees may apply for oversized items or expedited shipping requests. Free shipping available on orders over specified amount.</p>
        </div>

        <div className="terms-section">
          <h2>RESALE</h2>
          <p>Purchases made through our website are intended for end users only, and are not authorized for resale.</p>
        </div>
      </div>

      
    </div>
  );
};

export default TermsOfSale;