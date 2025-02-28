import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./aboutus.css";
import r2 from './experience.jpg';
import r3 from './diverse.jpg';
import r4 from './location.jpg';
import r5 from './commitment.jpg';
import r6 from './visitstore.jpg';
import r7 from './quality.jpg';
import r1 from './Logo.jpg';

const AboutUs = () => {
  return (
    < div className="toytreasure-container">
      <section className="max">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to TOY TREASURE</h1>
          <p className="hero-subtitle">
            Bringing joy and imagination to children's lives through high-quality toys since 2014
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <img src={r2} alt="Experience Icon" className="feature-icon" />
            <h3 className="feature-title">10 Years Experience</h3>
            <p className="feature-description">
              A decade of bringing smiles to children with our carefully curated toy collection
            </p>
          </div>

          <div className="feature-card">
            <img src={r3} alt="Diverse Icon" className="feature-icon" />
            <h3 className="feature-title">Diverse Collection</h3>
            <p className="feature-description">
              Specializing in soft toys, wooden toys, religious toys, and interactive toys like Talking Tom
            </p>
          </div>

          <div className="feature-card">
            <img src={r4} alt="LOcation Icon" className="feature-icon" />
            <h3 className="feature-title">Prime Location</h3>
            <p className="feature-description">
              Conveniently located in Paldi, Ahmedabad, serving customers across Gujarat
            </p>
          </div>
        </div>

        <div className="commitment-section">
        <img src={r5} alt="Commitment Icon" className="feature-icon1"/>
          <h2 className="commitment-title">Our Commitment</h2>
          <p className="commitment-text">
            At TOY TREASURE, we believe in providing safe, educational, and entertaining toys that spark creativity and joy. Our team of experienced professionals ensures that each product meets the highest quality standards and safety regulations.
          </p>
          <button className="primary-button">
        <Link to="/Productpage" className="link-text">
          Explore Our Collection
        </Link>
      </button>
        </div>

        <div className="store-grid">
          <div className="store-card">
            <img src={r6} alt="Toy Store Interior" className="store-image" />
            <h3 className="store-title">Visit Our Store</h3>
            <p className="store-description">
              Experience our extensive collection in person at our Paldi showroom. Our friendly staff is ready to help you find the perfect toy for every occasion.
            </p>
          </div>

          <div className="store-card">
            <img src={r7} alt="Quality Toys" className="store-image" />
            <h3 className="store-title">Quality Assurance</h3>
            <p className="store-description">
              Each toy in our collection undergoes rigorous quality checks to ensure durability, safety, and endless fun for your little ones.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;