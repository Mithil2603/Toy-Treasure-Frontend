import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './delivery.css';
import mapIcon from './map.jpeg';
import paymentIcon from './payment.jpg';
import typeSelectionIcon from './selection.jpg';
import profileIcon from './profiledet.jpg';

function DeliveryPersonnelPage() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showPersonnel, setShowPersonnel] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const navigate = useNavigate();

  const deliveryPersonnel = ['Name : Uday Prajapati', 'Email : uday34@.com', 'Phone no : 9996725435'];
  const paymentDetails = [
    { customer: 'Nimrit Saksena', amount: 'Rs.2000', status: 'Paid' },
    { customer: 'Eric Liliana', amount: 'Rs.5000', status: 'Pending' },
    { customer: 'Akbar Shaikh', amount: 'Rs.1000', status: 'Paid' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGoogleMap = () => {
    window.open('https://www.google.com/maps', '_blank');
  };

  const togglePersonnelList = () => {
    setShowPersonnel(!showPersonnel);
  };

  const togglePaymentDetails = () => {
    setShowPayments(!showPayments);
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    navigate('/rolelogin');
  };

  return (
    <div className="delivery-container">
      <div className="section-container">
        {/* Map Connectivity Section */}
        <div className="section">
          <div className="logo-title">
            <img src={mapIcon} alt="Map Icon" className="section-logo" />
            <span className="bold-title">Map Connectivity</span>
          </div>
          <p>
            This section provides real-time map integration for efficient route planning and delivery tracking.It display key information such as driver location, order status, and estimated delivery times.
          </p>
          <div className="button-container">
            <button className="view-button2" onClick={openGoogleMap}>Map</button>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="section">
          <div className="logo-title">
            <img src={paymentIcon} alt="Payment Icon" className="section-logo" />
            <span className="bold-title">Payment Details</span>
          </div>
          <p>The dashboard shows the details of payment done by customers.</p>
          <div className="button-container">
            <button className="view-button1" onClick={togglePaymentDetails}>Payment Details</button>
          </div>
          {showPayments && (
            <ul className="payment-list">
              {paymentDetails.map((payment, index) => (
                <li key={index} className="payment-item">
                  {payment.customer} - {payment.amount} - {payment.status}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Type Selection Section */}
        <div className="section">
          <div className="logo-title">
            <img src={typeSelectionIcon} alt="Type Selection Icon" className="section-logo" />
            <span className="bold-title">Type Selection</span>
          </div>
          <p>This section allows you to select the type of delivery personnel for each order. This helps optimize delivery routes and ensures the most efficient delivery method is used.</p>
          <div className="button-container">
            <button className="view-button" onClick={togglePersonnelList}>Delivery Personnel</button>
          </div>
          {showPersonnel && (
            <ul className="personnel-list">
              {deliveryPersonnel.map((person, index) => (
                <li key={index} className="personnel-item">{person}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Profile Details Section */}
        <div className="section">
          <div className="logo-title">
            <img src={profileIcon} alt="Profile Icon" className="section-logo" />
            <span className="bold-title">Profile Details</span>
          </div>
          <p>This section displays your personal information and delivery performance metrics. You can view your delivery history, track your performance, and update your profile details here.</p>
          <div className="button-container">
            <Link to="/editprofile"><button className="view-button">Edit Profile</button></Link>
          </div>
        </div>
      </div>

      <div className="sign-out-wrapper">
        <button className="sign-out-d" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default DeliveryPersonnelPage;
