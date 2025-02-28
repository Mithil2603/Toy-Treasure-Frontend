import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Condition.css';

const TermsConditions = () => {
    const navigate = useNavigate();
    
    const handleAccept = () => {
        alert('You have accepted the Terms and Conditions!');
        navigate('/');
    };

    return (
        <div className="main-container">
            <div className="terms-container">

                <main className="terms-main">
                    <h2 className="terms-title">Terms and Conditions</h2>
                    <section className="terms-content">
                        <h3 className="terms-heading">1. Introduction</h3>
                        <p>Welcome to Toytreasure! These Terms and Conditions govern your use of our website and the services we offer.</p>

                        <h3 className="terms-heading">2. Acceptance of Terms</h3>
                        <p>By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our website.</p>

                        <h3 className="terms-heading">3. Product Information</h3>
                        <p>We strive to provide accurate information about our products. However, there may be minor discrepancies in product availability or details.</p>

                        <h3 className="terms-heading">4. Ordering and Payment</h3>
                        <p>All orders are subject to availability. Payments must be made securely through the available payment options.</p>

                        <h3 className="terms-heading">5. Privacy Policy</h3>
                        <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your data.</p>

                        <h3 className="terms-heading">6. Limitation of Liability</h3>
                        <p>We are not liable for any direct or indirect damages arising from the use of our website or products.</p>

                        <h3 className="terms-heading">7. Changes to the Terms</h3>
                        <p>We may update these terms at any time. You will be notified of any significant changes.</p>

                        <h3 className="terms-heading">8. Governing Law</h3>
                        <p>These Terms and Conditions are governed by the laws of the jurisdiction where Toytreasure operates.</p>
                    </section>

                    <button onClick={handleAccept} className="accept-btn">
                        Accept
                    </button>
                </main>

                <footer className="footer">
                    <p>&copy; 2025 Toytreasure. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default TermsConditions;
