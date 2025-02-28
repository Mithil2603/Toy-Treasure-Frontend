import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const generateAndSendOtp = () => {
    const otpValue = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(otpValue.toString());
    alert(`Your OTP for reset password is: ${otpValue}`);
    setSuccessMessage('OTP has been sent to your email');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    generateAndSendOtp();
    setStep(2);
  };

  const handleResendOtp = () => {
    setError('');
    setOtp(''); // Clear the previously entered OTP
    generateAndSendOtp();
    setSuccessMessage('New OTP has been sent to your email');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!otp) {
      setError('Please enter OTP');
      return;
    }
    if (otp !== generatedOtp) {
      setError('Invalid OTP. Please try again.');
      return;
    }
    setSuccessMessage('');
    setStep(3);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setError('');
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    alert('Your password has been changed successfully.');
    setSuccessMessage('Your password has been changed successfully.');
    setStep(1);
    setEmail('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="forget-password-page">
      <main className="main-content-1">
        <div className="reset-container">
          <h1 className="reset-title">Reset Your Password</h1>
          <p className="reset-description">Follow the steps to reset your password.</p>
          
          {step === 1 && (
            <form onSubmit={handleEmailSubmit} className="reset-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                {error && <div className="error-message">{error}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleOtpSubmit} className="reset-form">
              <div className="form-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 4-digit OTP"
                  maxLength={4}
                />
                {error && <div className="error-message">{error}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
              </div>
              <button type="submit" className="submit-button">Verify OTP</button>
              <div className="resend-container">
                <button 
                  type="button" 
                  onClick={handleResendOtp} 
                  className="resend-button"
                >
                  Didn't receive OTP? Click to resend
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handlePasswordReset} className="reset-form">
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
                {error && <div className="error-message">{error}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
              </div>
              
              <button type="submit" className="submit-button">Reset Password</button>
            </form>
          )}

          <Link to="/RoleLogin" className="cancel-link">Cancel</Link>
        </div>
      </main>
    </div>
  );
};

export default ForgetPassword;