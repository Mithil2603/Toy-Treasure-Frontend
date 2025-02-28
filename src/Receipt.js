import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Receipt.css';

const ReceiptPage = () => {
  const [transactionDetails, setTransactionDetails] = useState(null);

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('transactionDetails'));
    setTransactionDetails(details);
  }, []);

  if (!transactionDetails) return <div>Loading...</div>;

  // Add null checks for price and other potential undefined values
  const price = transactionDetails.price || 0;
  const quantity = transactionDetails.quantity || 1;
  const name = transactionDetails.name || 'Product';

  return (
    <div className="receipt-container">
      <div className="receipt-card">
        <div className="receipt-header">
          <h1>Payment Receipt</h1>
          <p className="order-date">Order Date: {new Date(transactionDetails.orderDate || Date.now()).toLocaleDateString()}</p>
          <p className="order-id">Order ID: {transactionDetails.orderId || 'N/A'}</p>
        </div>

        <div className="customer-details">
          <h2>Customer Information</h2>
          <p>{transactionDetails.firstName || ''} {transactionDetails.lastName || ''}</p>
          <p>{transactionDetails.email || ''}</p>
          <p>{transactionDetails.address || ''}</p>
          {transactionDetails.apartment && <p>{transactionDetails.apartment}</p>}
          <p>{transactionDetails.city || ''}, {transactionDetails.state || ''} {transactionDetails.zipCode || ''}</p>
          <p>{transactionDetails.phone || ''}</p>
        </div>

        <div className="order-details">
          <h2>Order Details</h2>
          <div className="product-row">
            <span className="product-name">{name}</span>
            <span className="product-quantity">x{quantity}</span>
            <span className="product-price">Rs.120{price.toFixed(2)}</span>
          </div>
        </div>

        <div className="payment-details">
          <h2>Payment Information</h2>
          <div className="payment-row">
            <span>Subtotal:</span>
            <span>Rs.1200.00{price.toFixed(2)}</span>
          </div>
          <div className="payment-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="payment-row total">
            <span>Total:</span>
            <span>Rs.1200.00{price.toFixed(2)}</span>
          </div>
        </div>

        <div className="receipt-footer">
          <p>Thank you for your purchase!</p>
          <Link to="/" className="home-button">Return to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;