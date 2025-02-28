import React, { useState, useEffect } from 'react';
import { auth } from './firebase';

function OTPVerification() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(30); // Cooldown period in seconds

  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const requestOTP = () => {
    setLoading(true);
    setError('');
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
    });

    auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        alert('OTP sent!');
        setResendCooldown(30); // Reset cooldown
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
        setError('Failed to send OTP. Please check the phone number and try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const verifyOTP = () => {
    setLoading(true);
    setError('');
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);

    auth.signInWithCredential(credential)
      .then((result) => {
        alert('Phone number verified!');
      })
      .catch((error) => {
        console.error("Error during signInWithCredential", error);
        setError('Invalid OTP. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
        disabled={loading}
      />
      <button onClick={requestOTP} disabled={loading}>
        {loading ? 'Sending...' : 'Request OTP'}
      </button>

      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        disabled={loading}
      />
      <button onClick={verifyOTP} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify OTP'}
      </button>

      <button onClick={requestOTP} disabled={resendCooldown > 0 || loading}>
        {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP'}
      </button>

      <div id="recaptcha-container"></div>
    </div>
  );
}

export default OTPVerification;