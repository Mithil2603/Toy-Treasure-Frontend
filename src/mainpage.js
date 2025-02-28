import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronDown, ChevronRight, ShoppingCart, Search, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './contact.css';
import RoleLogin from './RoleLogin.js';
import './Addtocart.js';
import "./mainpage.css";
import "./aboutus.js";
import "./Register.js";
import "./Productpage.js";
import "./FAQ.js";
import "./termsofsale.js";
import "./newarrival.js";
import "./sale.js";
import "./privacy.js";
import "./shipping.js";
import "./AlertDescription.js";
import "./favourite.js";
import "./Condition.js";
import "./ride.js";
import "./babiespage.js";
import "./barbie.js";
import "./secondyear.js";
import "./fourthyear.js";
import "./fifthyear.js";
import "./sixthyear.js";
import r1 from './Logo.jpg';
import r2 from './images/soft/bluesoft.jpg';
import r3 from './images/jesus.jpg';
import r4 from './images/storyteller/unicron.jpg';
import r5 from './elefant.jpg';
import r6 from './playshifu.jpg';
import r7 from './nestatoy.jpg';
import r8 from './shumee.jpg';
import r9 from './tenderlogo.jpg';
import toyVideo from './toytreasure.mp4'; 
import n1 from './nestasoft.jpg';
import n2 from './images/education/indiascape.jpg';
import n3 from './images/storyteller/snailteller.jpg';

const MainPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const handleAddToCart = () => {
    setShowLogin(true);
  };

  const closeLoginPopup = () => {
    setShowLogin(false);
  };

  // Show welcome message on page load
  useEffect(() => {
    const hasShownWelcomeMessage = localStorage.getItem('welcomeMessageShown');
    if (!hasShownWelcomeMessage) {
      alert('Welcome to Toy Treasure!!!');
      localStorage.setItem('welcomeMessageShown', true);
      setShowWelcomeMessage(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ageGroups = [
    { age: "0-2", path: "/babiespage", color: "orange" },
    { age: "3-4", path: "/secondyear", color: "red" },
    { age: "5-7", path: "/thirdyear", color: "gold" },
    { age: "8-12", path: "/fourthyear", color: "blue" },
    { age: "12-14", path: "/fifthyear", color: "green" },
    { age: "14+", path: "/sixthyear", color: "purple" },
  ];

  const bestSellers = [
    {
      name: "Soft Toys",
      price: "Rs.999",
      rating: 4,
      reviews: 26,
      tag: "Best Seller",
      image1: r2,
      image2: r3,
      image3: r4,
    },
    {
      name: "Religion Toys",
      price: "Rs.780",
      rating: 5,
      reviews: 3,
      tag: "Best Seller",
      image1: r3,
      image2: r2,
      image3: r4,
    },
    {
      name: "Story Teller Toys",
      price: "Rs.599.00",
      rating: 4,
      reviews: 17,
      tag: "Best Seller",
      image1: r4,
      image2: r2,
      image3: r3,
    },
  ];
  
  const brandsLove = [
    {
      name: "NESTA TOYS",
      description: "NESTA TOYS, an IIM Alumni startup, crafts eco-friendly educational toys, from building blocks and wooden puzzles to pretend play toys, dolls, and Montessori items.",
      image: n1
    },
    {
      name: "SHUMEE",
      description: "Explore the latest kids' toys in India! shumee's eco-friendly toys, games, and kids' activities are fun, engaging, and sure to keep your child happily playing for hours.",
      image: n2
    },
    {
      name: "ELEFANT",
      description: "Online subscription-based rental platform offering toys for kids. The platform provides educational toys for the child imagination, creativity, and cognitive development.",
      image: n3
    }
  ]; 
  const popularBrands = [
    { name: "Brand1", img: require("./elefant.jpg") },
    { name: "Brand2", img: require("./playshifu.jpg") },
    { name: "Brand3", img: require("./nestatoy.jpg") },
    { name: "Brand4", img: require("./shumee.jpg") },
    { name: "Brand5", img: require("./tenderlogo.jpg") },
  ];
  
  const [customerFeedbacks, setCustomerFeedbacks] = useState([
    {
      rating: 5,
      text: "The delivery was prompt, and the products were of excellent quality! I was truly impressed. The soft toys are beautifully crafted, and my kids absolutely love them. Highly recommended for anyone looking for reliable toys!",
      author: "Valentina Das",
    },
    {
      rating: 4,
      text: "Fantastic selection of religious toys! I bought several items for my niece's birthday, and she loved every piece. The only downside was the shipping delay, which could be improved.",
      author: "Christina Gohil",
    },
    {
      rating: 5,
      text: "Excellent service and a wonderful selection of toys!",
      author: "Nirav Prajapati",
    },
    {
      rating: 4,
      text: "This is my go-to store for kids' gifts! The prices are reasonable, and the quality is exceptional. The staff was friendly and helped me pick the perfect toy for my son.",
      author: "Aakash Singh",
    },
  ]);

  const handleNavigation = () => {
    navigate('/Productpage'); // Navigate to Productpage
  };

  return (
    <div className="toytreasure-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/taAAAOSwFYddmjYn/$_86.JPG"
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-content">
          <h2 className="hero-title">Discover New Arrivals</h2>
          <button
            className="hero-button"
            onClick={handleNavigation}
          >
            Shop Now
          </button>
        </div>
      </div>

      <section className="shop-by-age">
  <h2>Shop by Age</h2>
  <div className="age-group-container">
    {ageGroups.map((group, index) => (
      <div key={index} className="age-group" style={{ backgroundColor: group.color }}>
        {/* Wrap all age groups with a Link */}
        <Link to={group.path} style={{ color: "inherit", textDecoration: "none" }}>
          {group.age} YEARS
        </Link>
      </div>
    ))}
  </div>
</section>

      {/* Best Sellers Section */}
      <section className="products-section py-10">
        <h2 className="best-sellers-title">Best Sellers</h2>
        <div className="section-container overflow-scroll">
          <div className="product-grid">
            {bestSellers.map((product, index) => (
              <div key={index} className="product-card">
                <span className="product-tag">{product.tag}</span>
                <img
                  src={product.image1}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="star-icon" size={16} fill="currentColor" />
                    ))}
                    <span className="review-count">({product.reviews} reviews)</span>
                  </div>
                  <p className="product-price">{product.price}</p>
                  <button 
                    onClick={handleAddToCart} 
                    className="view-more-btn"
                  >
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Login Popup */}
      {showLogin && (
        <div className="login-popup">
          <div className="login-content">
            <b>
              <p style={{ fontSize: '20px' }}>
                To View Product <br />
                You have to Login first. 
                <p style={{ color: 'red' }}>Please login to continue.</p>
              </p>
            </b>
            <Link to="/RoleLogin">
              <button>Login</button>
            </Link>
            <button onClick={closeLoginPopup}>Close</button>
          </div>
        </div>
      )}


      {/* Popular Brands */}
      <section className="py-13 overflow-scroll">
        <div className="container1">
          <h2 className="popular ">Popular Brands</h2>
          <div className="iconimage flex-container">
            {popularBrands.map((brand, index) => (
              <div className="images" key={index}>
                <div className="w-31 padding-left-10">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="circular-border"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brands-love-section">
  <h2 className="brands-love-title">Brands You'll Love</h2>
  <div className="brands-love-grid">
    {brandsLove.map((brand, index) => (
      <div key={index} className="brand-card">
        <img src={brand.image} alt={brand.name} className="brand-image" />
        <div className="brand-content">
          <h3 className="brand-name">{brand.name}</h3>
          <p className="brand-description">{brand.description}</p>
          <a href="#" className="brand-button">Shop Now</a>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="fao-story-section">
  <h2 className="story-title">The ToyTreasure Story</h2>
  <div className="story-content">
    <div className="story-text">
      <p>Since 2014, ToyTreasure has been a brand synonymous with quality and innovation, creating countless memories for generations of children. Our iconic store has been a symbol of wonder and imagination, bringing smiles to faces young and old.</p>
      <p>Today, we continue that legacy by offering carefully curated toys that combine learning with fun, tradition with innovation, and imagination with adventure. Every product in our collection is selected to uphold our long-standing commitment to quality and wonder.</p>
    </div>
    <div className="story-video-container">
      <video 
        className="story-video" 
        controls
        poster="path-to-video-thumbnail.jpg"
      >
        <source src={toyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

      {/* Customer Feedback Carousel */}
      <section className="customer-reviews-section">
        <div className="reviews-container">
          <h2 className="reviews-heading">Reviews From Our Customers</h2>
          <div className="reviews-wrapper">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? customerFeedbacks.length - 1 : prev - 1))}
              className="reviews-arrow reviews-arrow-left"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="reviews-content">
              <div className="reviews-slide">
                <div className="reviews-stars">
                  {[...Array(customerFeedbacks[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="star-icon" size={24} fill="currentColor" />
                  ))}
                </div>
                <p className="reviews-text">{customerFeedbacks[currentSlide].text}</p>
                <p className="reviews-author">{customerFeedbacks[currentSlide].author}</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === customerFeedbacks.length - 1 ? 0 : prev + 1))}
              className="reviews-arrow reviews-arrow-right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
