import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Footer.css";
import TermsConditions from '../Condition.js';
export default function Footer() {
    return (
        <div>
            {/* Footer*/}
            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-layout">
                        <div className="footer-block">
                            <h3 className="footer-heading">Visit Us</h3>
                            <p className="footer-text">Conveniently located in Paldi, Ahmedabad, serving customers across Gujarat</p>
                            <p className="footer-text">Monday - Sunday</p>
                            <p className="footer-text">10:00 AM - 8:00 PM</p>
                        </div>
                        <div className="footer-block">
                            <h3 className="footer-heading">Customer Care</h3>
                            <ul className="footer-list">
                                <li><Link to="/contact" className="footer-item">Contact Us</Link></li>
                                <li><Link to="aboutus" className="footer-item">About Us</Link></li>
                                <li><Link to="/shipping" className="footer-item">Shipping & Policy</Link></li>
                                <li><Link to="/FAQ" className="footer-item">FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="footer-block">
                            <h3 className="footer-heading">Legal</h3>
                            <ul className="footer-list">
                                {/* <li><Link to="/termsconditions" className="footer-item">Terms & Conditions</Link></li> */}
                                <li><Link to="/Condition" className="footer-item">Terms & Conditions</Link></li>
                                <li><Link to="/privacy" className="footer-item">Privacy Policy</Link></li>
                                <li><Link to="/termsofsale" className="footer-item">Terms of Sale</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
