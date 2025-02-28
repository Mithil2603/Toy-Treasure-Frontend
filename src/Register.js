// Updated Register.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './registor.css';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    address: '',
    pincode: '',
    dob: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      formErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName) {
      formErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      formErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Phone number must be 10 digits';
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!formData.pincode) {
      formErrors.pincode = 'Pincode is required';
      isValid = false;
    } else if (!/^[1-9][0-9]{5}$/.test(formData.pincode)) {
      formErrors.pincode = 'Pincode must be 6 digits';
      isValid = false;
    }

    if (!formData.dob) {
      formErrors.dob = 'Date of birth is required';
      isValid = false;
    }

    if (!formData.gender) {
      formErrors.gender = 'Gender is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Register.js - update the fetch URL to match your .NET API endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const apiData = {
        ...formData,
        dob: new Date(formData.dob).toISOString()
      };
      
      try {
        const response = await fetch('https://localhost:44360/api/register', { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(apiData)
      });
  
        const result = await response.text();
  
        if (response.ok) {
          alert('You have successfully registered!');
          navigate('/login');
        } else {
          alert(result);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };
  

  return (
    <div className="register-main">
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <div className="register-content">
            <h1 className="register-title">ToyTreasure</h1>
            <h3 className="register-subtitle">Register</h3>

            <div className="register-row">
              <div className="register-group">
              <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={`register-input ${errors.firstName ? 'input-error' : ''}`}
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>

              <div className="register-group">
              <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`register-input ${errors.lastName ? 'input-error' : ''}`}
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>
            </div>

            <div className="register-row">
              <div className="register-group">
              <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className={`register-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="register-group">
              <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className={`register-input ${errors.phoneNumber ? 'input-error' : ''}`}
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
              </div>
            </div>

            <div className="register-row">
              <div className="register-group">
              <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className={`register-input ${errors.password ? 'input-error' : ''}`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="register-group">
              <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={`register-input ${errors.confirmPassword ? 'input-error' : ''}`}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>
            </div>

            <div className="register-group">
            <label>Address</label>
              <textarea
                name="address"
                className={`register-textarea ${errors.address ? 'input-error' : ''}`}
                placeholder="Enter the Address (Optional)"
                value={formData.address}
                onChange={handleInputChange}
              />
              {/* No validation error for address */}
            </div>

            <div className="register-row">
              <div className="register-group">
              <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  className={`register-input ${errors.pincode ? 'input-error' : ''}`}
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
                {errors.pincode && <span className="error-text">{errors.pincode}</span>}
              </div>

              <div className="register-group">
              <label>DOB</label>
                <input
                  type="date"
                  name="dob"
                  className={`register-input ${errors.dob ? 'input-error' : ''}`}
                  value={formData.dob}
                  onChange={handleInputChange}
                  min="1960-01-01"
                  max="2005-12-31"
                />
                {errors.dob && <span className="error-text">{errors.dob}</span>}
              </div>
            </div>

            <div className="register-row">
              <div className="register-group">
              <label>Gender</label>
                <div className="gender-options">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                  /> Male
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                  /> Female
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                  /> Other
                </div>
                {errors.gender && <span className="error-text">{errors.gender}</span>}
              </div>
              </div>

            <button type="submit" className="register-button">Register</button>

            <div className="login-section">
              <span className="login-text">If You have already Registered then,</span>
              <a className="login-link" onClick={() => navigate('/RoleLogin')}>Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
