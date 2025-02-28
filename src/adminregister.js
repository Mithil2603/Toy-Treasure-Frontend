import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminregistor.css';

export default function AdminRegister() {
  const navigate = useNavigate();

  // State for form data
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
    role: ''
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the form fields
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // First Name Validation
    if (!formData.firstName.trim()) {
      formErrors.firstName = "First name is required";
      isValid = false;
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      formErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Email Validation
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Email is invalid";
      isValid = false;
    }

    // Phone Number Validation
    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    // Password Validation
    if (!formData.password.trim()) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    // Confirm Password Validation
    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Address Validation
    if (!formData.address.trim()) {
      formErrors.address = "Address is required";
      isValid = false;
    }

    // Pincode Validation
    if (!formData.pincode.trim()) {
      formErrors.pincode = "Pincode is required";
      isValid = false;
    } else if (!/^[1-9][0-9]{5}$/.test(formData.pincode)) {
      formErrors.pincode = "Pincode must be 6 digits and cannot start with 0";
      isValid = false;
    }

    // Date of Birth Validation
    if (!formData.dob.trim()) {
      formErrors.dob = "Date of birth is required";
      isValid = false;
    }

    // Gender Validation
    if (!formData.gender.trim()) {
      formErrors.gender = "Gender is required";
      isValid = false;
    }

    // Role Validation
    if (!formData.role.trim()) {
      formErrors.role = "Role is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData); // Log form data to the console
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  // Navigate back to dashboard
  const handleBackToDashboard = () => {
    navigate("/adminpage");
  };

  return (
    <div className="registration-main">
      <div className="registration-container">
        <form onSubmit={handleSubmit}>
          <div className="registration-content">
            <h1 className="registration-title">ToyTreasure</h1>
            <h3 className="registration-subtitle">Register</h3>

            {/* First Name and Last Name */}
            <div className="registration-row">
              <div className="registration-form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={`registration-input ${errors.firstName ? 'registration-input-error' : ''}`}
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <span className="registration-error-text">{errors.firstName}</span>}
              </div>
              <div className="registration-form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`registration-input ${errors.lastName ? 'registration-input-error' : ''}`}
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <span className="registration-error-text">{errors.lastName}</span>}
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="registration-row">
              <div className="registration-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className={`registration-input ${errors.email ? 'registration-input-error' : ''}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="registration-error-text">{errors.email}</span>}
              </div>
              <div className="registration-form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className={`registration-input ${errors.phoneNumber ? 'registration-input-error' : ''}`}
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <span className="registration-error-text">{errors.phoneNumber}</span>}
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="registration-row">
              <div className="registration-form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className={`registration-input ${errors.password ? 'registration-input-error' : ''}`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <span className="registration-error-text">{errors.password}</span>}
              </div>
              <div className="registration-form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={`registration-input ${errors.confirmPassword ? 'registration-input-error' : ''}`}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <span className="registration-error-text">{errors.confirmPassword}</span>}
              </div>
            </div>

            {/* Address */}
            <div className="registration-form-group">
              <label>Address</label>
              <textarea
                name="address"
                className={`registration-textarea ${errors.address ? 'registration-input-error' : ''}`}
                placeholder="Enter the Address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <span className="registration-error-text">{errors.address}</span>}
            </div>

            {/* Pincode and DOB */}
            <div className="registration-row">
              <div className="registration-form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  className={`registration-input ${errors.pincode ? 'registration-input-error' : ''}`}
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
                {errors.pincode && <span className="registration-error-text">{errors.pincode}</span>}
              </div>
              <div className="registration-form-group">
                <label>DOB</label>
                <input
                  type="date"
                  name="dob"
                  className={`registration-input ${errors.dob ? 'registration-input-error' : ''}`}
                  value={formData.dob}
                  onChange={handleInputChange}
                  min="1960-01-01"
                  max="2005-12-31"
                />
                {errors.dob && <span className="registration-error-text">{errors.dob}</span>}
              </div>
            </div>

            {/* Gender and Role */}
            <div className="registration-row">
              <div className="registration-form-group">
                <label>Gender</label>
                <div className="gender-options">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleInputChange}
                    />{' '}
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleInputChange}
                    />{' '}
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleInputChange}
                    />{' '}
                    Other
                  </label>
                </div>
                {errors.gender && <span className="registration-error-text">{errors.gender}</span>}
              </div>
              <div className="registration-form-group">
                <label>Select Role</label>
                <select
                  name="role"
                  className={`registration-input ${errors.role ? 'registration-input-error' : ''}`}
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="Sales Staff">Sales Staff</option>
                  <option value="Delivery Personnel">Delivery Personnel</option>
                </select>
                {errors.role && <span className="registration-error-text">{errors.role}</span>}
              </div>
            </div>

            {/* Buttons */}
            <button type="submit" className="registration-button">
              Register
            </button>
            <button
              type="button"
              className="registration-button back-to-dashboard"
              onClick={handleBackToDashboard}
            >
              Back to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}