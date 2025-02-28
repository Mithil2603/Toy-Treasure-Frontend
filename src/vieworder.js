import React from "react";
import "./payment.css";
import r2 from './images/soft/snowdragon.jpg';
function ViewOrder() {
  const orderDetails = {
    orderNumber: "#3911690705825",
    status: "Order placed",
    shippingMethod: "Value shipping",
    arrivalDate: "Tue, May 10",
    trackingStatus: "processing"
  };

  const shippingAddress = {
    name: "Ayush vadasmiya",
    street: "B-12 Green Palace",
    city: "Ahmedabad",
    state: "Gujarat",
    zip: "380008",
    email: "ayush1705@gmail.com"
  };

  return (
    <div className="screen">
      {/* <div className="header">
        <div className="header-content">
          <div className="header-main">
            <div className="logo-container">
              <img src="/api/placeholder/40/40" alt="Logo" className="logo" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="order-confirmation-container">
        <div className="order-confirmation-wrapper">
          <div className="order-header">
            <h1 className="thank-you-text">Thank you for your order {orderDetails.orderNumber}</h1>
            <button className="continue-shopping-btn" onClick={() => window.location.href = '/'}>
              Continue Shopping
            </button>
          </div>

          <div className="shipping-notification">
            <span className="truck-icon">🚚</span>
            <p>We'll send you an email with tracking information when your item ships.</p>
          </div>

          <div className="order-info-grid">
            <div className="order-details-section">
              <div className="info-block">
                <h3>Order placed</h3>
                <p>{orderDetails.status}</p>
                <p>{orderDetails.shippingMethod}</p>
                <p>Arrives by {orderDetails.arrivalDate}</p>
                <p>Sold by {orderDetails.soldBy}</p>
              </div>

              <div className="info-block">
                <h3>Shipping address</h3>
                <p>{shippingAddress.name}</p>
                <p>{shippingAddress.street}</p>
                <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}</p>
                <p>{shippingAddress.email}</p>
              </div>
            </div>

            <div className="tracking-status">
              <div className="status-line">
                <div className={`status-point ${orderDetails.trackingStatus === 'placed' ? 'active' : ''}`}></div>
                <div className={`status-point ${orderDetails.trackingStatus === 'processing' ? 'active' : ''}`}></div>
                <div className={`status-point ${orderDetails.trackingStatus === 'shipped' ? 'active' : ''}`}></div>
                <div className={`status-point ${orderDetails.trackingStatus === 'delivered' ? 'active' : ''}`}></div>
              </div>
              <div className="status-labels">
                <span>Order placed</span>
                <span>Processing</span>
                <span>Shipped</span>
                <span>Delivered</span>
              </div>
            </div>

            <div className="order-items">
              <div className="item-card">
                <img src={r2} alt="Product" className="item-image" />
                <div className="item-details">
                  <h4>Snow Dragon-Gigantic</h4>
                  <p>Quantity: 1</p>
                  <p>₹1200.00</p>
                </div>
              </div>
            </div>

            <div className="order-summary-section">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹1200.00</span>
              </div>
              <div className="summary-line">
                <span>Tax</span>
                <span>₹100.00</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span>₹1300.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ViewOrder;
