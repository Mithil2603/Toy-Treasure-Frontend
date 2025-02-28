import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./contact.css";
import r1 from './Logo.jpg';

const ContactPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (!/^[A-Za-z\s]{2,50}$/.test(value.trim())) {
          error = "Name should be 2-50 characters long and contain only letters and spaces";
        }
        break;
        
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        } else if (value.length > 100) {
          error = "Email should not exceed 100 characters";
        }
        break;
        
      case "phone":
        if (!value) {
          error = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(value)) {
          error = "Please enter a valid 10-digit phone number";
        }
        break;
        
      case "address":
        if (!value.trim()) {
          error = "Address is required";
        } else if (value.trim().length < 10) {
          error = "Address should be at least 10 characters long";
        } else if (value.trim().length > 200) {
          error = "Address should not exceed 200 characters";
        }
        break;
        
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(formData).forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
      setTouched(prev => ({ ...prev, [field]: true }));
    });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      // You can send the form data to a backend API here
      setFormData({ name: "", email: "", phone: "", address: "" });
      setTouched({ name: false, email: false, phone: false, address: false });
      setErrors({ name: "", email: "", phone: "", address: "" });
    }
  };

  return (
    <div className="toytreasure-container">
      <br />
      <div className="contact-container">
        <div className="contact-header">
          <div className="logo-text-container">
            <div className="company-details">
              <h1 className="company-names">TOY TREASURE</h1>
              <h2 className="contact-title">CONTACT US</h2>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> 96011-82299
          </p>
          <p>
            <strong>Email:</strong> ms.solutions@gmail.com
          </p>
          <p>
            <strong>Address:</strong> A-301, Panchshil Aagam, Nr. Mahalaxmi Cross Road, Paldi, Ahmedabad - 380006
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.name && errors.name ? "error-input" : ""}
              required
            />
            {touched.name && errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.email && errors.email ? "error-input" : ""}
              required
            />
            {touched.email && errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.phone && errors.phone ? "error-input" : ""}
              required
            />
            {touched.phone && errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.address && errors.address ? "error-input" : ""}
              required
            />
            {touched.address && errors.address && <p className="error-text">{errors.address}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;