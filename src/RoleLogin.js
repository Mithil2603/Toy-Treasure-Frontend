import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import './Productpage.css';
import './ForgetPassword.css';
import './delivery.css';
import './SalesStaffPage.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [errors, setErrors] = useState({});
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear validation errors when input is valid
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.email) {
      formErrors.email = '* Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = '* Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = '* Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = '* Password must be at least 6 characters';
      isValid = false;
    } else if (!/[A-Z]/.test(formData.password)) {
      formErrors.password = '* Password must contain at least one uppercase letter';
      isValid = false;
    } else if (!/[0-9]/.test(formData.password)) {
      formErrors.password = '* Password must contain at least one number';
      isValid = false;
    }

    if (!formData.role) {
      formErrors.role = '* Please select a role';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('You have successfully logged in!');
      switch (formData.role) {
        case 'Customer':
          navigate('/Productpage');
          break;
        case 'Delivery Personnel':
          navigate('/delivery');
          break;
        case 'Admin':
          navigate('/AdminPage');
          break;
        case 'Sales Staff':
          navigate('/SalesStaffPage');
          break;
        default:
          alert('Invalid role selected');
      }
    }
  };

  return (
    <div className="toytreasure-container">
      <main className="login-main-content">
        <div className="login-form-container">
          <h2 className="login-title">Welcome!<br/>Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="email"
                className="form-input"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Login As</label>
              <select
                name="role"
                className="select"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Sales Staff">Sales Staff</option>
                <option value="Delivery Personnel">Delivery Personnel</option>
                <option value="Customer">Customer</option>
              </select>
              {errors.role && <span className="error">{errors.role}</span>}
            </div>

            <div className="form-actions">
              <Link to="/ForgetPassword" className="forgot-password">Forgot password?</Link><br/>
              <button type="submit" className="login-button">Sign In</button>
            </div>

            <div className="register-link">
              <label className="labl">Don't have an account?</label>
              <Link to="/register" className="a2">Register</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
