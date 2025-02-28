import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import './payments.css';

const CheckoutPagepayment = () => {
  const navigate = useNavigate();
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [alert, setAlert] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    nameOnCard: '',
    upiId: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  // Enhanced Validation Functions
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Invalid email format';
    return '';
  };

  const validateName = (name, fieldName) => {
    if (!name) return `${fieldName} is required`;
    if (name.length < 2) return `${fieldName} must be at least 2 characters`;
    if (!/^[A-Za-z\s]+$/.test(name)) return `${fieldName} can only contain letters`;
    return '';
  };

  const validateAddress = (address) => {
    if (!address) return 'Address is required';
    if (address.length < 5) return 'Address must be at least 5 characters';
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone) return 'Phone number is required';
    if (!phoneRegex.test(phone)) return 'Invalid phone number (10 digits, starts with 6-9)';
    return '';
  };

  const validateZipCode = (zipCode) => {
    const zipRegex = /^\d{6}$/;
    if (!zipCode) return 'ZIP code is required';
    if (!zipRegex.test(zipCode)) return 'Invalid ZIP code (6 digits)';
    return '';
  };

  const validateCardNumber = (cardNumber) => {
    const cardRegex = /^\d{16}$/;
    if (!cardNumber) return 'Card number is required';
    if (!cardRegex.test(cardNumber)) return 'Invalid card number (16 digits)';
    return '';
  };

  const validateExpiryDate = (expiryDate) => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryDate) return 'Expiry date is required';
    if (!expiryRegex.test(expiryDate)) return 'Invalid expiry date (MM/YY format)';
    
    const [month, year] = expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (parseInt(year) < currentYear || 
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      return 'Card has expired';
    }
    
    return '';
  };

  const validateCVV = (cvv) => {
    const cvvRegex = /^\d{3,4}$/;
    if (!cvv) return 'CVV is required';
    if (!cvvRegex.test(cvv)) return 'Invalid CVV (3-4 digits)';
    return '';
  };

  const validateUpiId = (upiId) => {
    const upiRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+$/;
    if (!upiId) return 'UPI ID is required';
    if (!upiRegex.test(upiId)) return 'Invalid UPI ID format';
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    // Name validations
    const firstNameError = validateName(formData.firstName, 'First Name');
    if (firstNameError) newErrors.firstName = firstNameError;

    const lastNameError = validateName(formData.lastName, 'Last Name');
    if (lastNameError) newErrors.lastName = lastNameError;

    // Address validation
    const addressError = validateAddress(formData.address);
    if (addressError) newErrors.address = addressError;

    // City and State validations
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';

    // Phone and ZIP code validations
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const zipCodeError = validateZipCode(formData.zipCode);
    if (zipCodeError) newErrors.zipCode = zipCodeError;

    // Payment method specific validations
    if (paymentMethod === 'card') {
      const cardNumberError = validateCardNumber(formData.cardNumber);
      if (cardNumberError) newErrors.cardNumber = cardNumberError;

      const expiryError = validateExpiryDate(formData.expiryDate);
      if (expiryError) newErrors.expiryDate = expiryError;

      const cvvError = validateCVV(formData.securityCode);
      if (cvvError) newErrors.securityCode = cvvError;
    }

    if (paymentMethod === 'upi') {
      const upiError = validateUpiId(formData.upiId);
      if (upiError) newErrors.upiId = upiError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const [cartItem, setCartItem] = useState({
    name: "SoftTeddy Bear Plushie",
    price: 1999.99,
    quantity: 1
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const transactionDetails = {
        ...formData,
        orderDate: new Date().toISOString(),
        orderId: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase()
      };
      
      localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));
      
      setShowSuccess(true);
      setAlert(true);

      setTimeout(() => {
        navigate('/Receipt');
      }, 2000);
    }
  };

  return (
    <div className="toytreasure-container">
      <div className="left">
        <div className="contact">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div>
              <h2 className="contact-title">Contact Information</h2>
              
              <div className="form-group">
  <label htmlFor="email">Email Address *</label>
  <input
    id="email"
    type="email"
    name="email"
    placeholder="Enter your email"
    className={errors.email ? "error" : ""}
    value={formData.email}
    onChange={handleInputChange}
  />
  <span className="error-message">{errors.email || " "}</span> 
         </div>
         </div>
            <h2 className="delivery-title">Delivery Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? 'error' : ''}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={errors.city ? 'error' : ''}
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={errors.state ? 'error' : ''}
                />
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={errors.zipCode ? 'error' : ''}
                />
                {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="payment-section">
              <h2 className="form-title">Payment Method</h2>
              <div className="payment-options">
                <button
                  type="button"
                  className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  Credit/Debit Card
                </button>
                <button
                  type="button"
                  className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  UPI
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className={errors.cardNumber ? 'error' : ''}
                      />
                      {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry Date </label>
                      <input
                        id="expiryDate"
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className={errors.expiryDate ? 'error' : ''}
                      />
                      {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="securityCode">CVV </label>
                      <input
                        id="securityCode"
                        type="text"
                        name="securityCode"
                        placeholder="CVV"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        className={errors.securityCode ? 'error' : ''}
                      />
                      {errors.securityCode && <span className="error-message">{errors.securityCode}</span>}
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="upi-details">
                  <div className="form-group">
                    <label htmlFor="upiId">UPI ID </label>
                    <input
                      id="upiId"
                      type="text"
                      name="upiId"
                      placeholder="Enter UPI ID (example@bank)"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      className={errors.upiId ? 'error' : ''}
                    />
                    {errors.upiId && <span className="error-message">{errors.upiId}</span>}
                  </div>
                </div>
              )}
            </div>

            {showSuccess && (
              <div className="success-message">
                ✅ Payment processed successfully! Redirecting to receipt...
              </div>
            )}

            <button
              type="submit"
              className="complete"
              disabled={showSuccess}
            >
              Complete Purchase
            </button>

            {alert && (
              <button 
                type="button" 
                className="view-order-button" 
                onClick={() => window.location.href = '/vieworder'}
              >
                View Order
              </button>
            )}
          </form>
        </div>

        <div className="Order">
          <h2 className="order-title">Order Summary</h2>
          <div className="order-form">
            <div className="order-card">
              <div>
                <h3 className="cart-item">{cartItem.name}</h3>
                <p className="quantity">Quantity: {cartItem.quantity}</p>
              </div>
              <span className="cart-price">Rs.{cartItem.price.toFixed(2)}</span>
            </div>
          </div>

          <div className="subtotal">
            <div className="subtotal-form">
              <span>Subtotal</span>
              <span>Rs.{cartItem.price.toFixed(2)}</span>
            </div>
            <div className="shipping">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>Rs.{cartItem.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPagepayment;