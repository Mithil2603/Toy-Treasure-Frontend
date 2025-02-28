import React, { useState, useEffect } from 'react';
import r1 from './Logo.jpg';
import './feedbackadmin.css';
import { Link } from 'react-router-dom';
import { Star, Share2, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart,User } from 'lucide-react';
import person1 from './f1.jpg';
import person2 from './f2.jpg';
import person3 from './f3.jpeg';
import person4 from './f4.jpg';
import person5 from './f5.jpg';
import person6 from './f6.jpeg';
import person7 from './f7.jpg';
import person8 from './f8.jpg';
import person9 from './f9.jpg';
const FeedbackDashboard = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
      const [isHeaderSticky, setIsHeaderSticky] = useState(false);
     
      useEffect(() => {
        const handleScroll = () => {
          setIsHeaderSticky(window.scrollY > 40);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  // Sample feedback data
  const profileImages = {
    profile1: person1,
    profile2: person2,
    profile3: person3,
    profile4: person4,
    profile5: person5,
    profile6: person6,
    profile7: person7,
    profile8: person8,
    profile9: person9
  };
  const [feedbacks] = useState([
    {
      id: 1,
      name: "Emma Thompson",
      date: "10 Jan 2025",
      rating: 5,
      profileImage: profileImages.person1,
      comment: "Exceptional service! The new dashboard interface is incredibly intuitive and has streamlined our workflow significantly. The recent updates have made a tremendous difference in our daily operations.",
      replies: 8
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "31 Dec 2024",
      rating: 5,
      profileImage: profileImages.person2,
      comment: "The latest features have exceeded our expectations. The integration capabilities are remarkable, and the support team has been outstanding in helping us maximize the platform's potential.",
      replies: 6
    },
    {
      id: 3,
      name: "Sarah Williams",
      date: "04 Dec 2024",
      rating: 4,
      profileImage: profileImages.person3,
      comment: "Very satisfied with the overall performance. A few minor improvements could be made to the reporting section, but otherwise, it's an excellent system that meets our needs perfectly.",
      replies: 4
    },
    {
      id: 4,
      name: "David Martinez",
      date: "12 Jan 2025",
      rating: 3,
      profileImage: profileImages.person4,
      comment: "The core functionality is solid, but there's room for improvement in the user interface. Would appreciate more customization options and better mobile responsiveness.",
      replies: 2
    },
    {
      id: 5,
      name: "Lisa Johnson",
      date: "27 Jun 2024",
      rating: 5,
      profileImage: profileImages.person5,
      comment: "Implementing this solution has transformed our business processes. The efficiency gains are remarkable, and the learning curve was minimal. Highly recommended!",
      replies: 5
    },
    {
        id:6,
        name: "Valentina Das",
        date: "19 Nov 2024",
       rating: 5,
       profileImage: profileImages.person6,
      comment: "The delivery was prompt, and the products were of excellent quality! I was truly impressed. The soft toys are beautifully crafted, and my kids absolutely love them. Highly recommended for anyone looking for reliable toys!",
      replies:3
    },
    {
        id:7,
        name: "Christina Gohil",
        date: "22 Aug 2023",
        rating: 4,
        profileImage: profileImages.person7,
      comment: "Fantastic selection of religious toys! I bought several items for my niece's birthday, and she loved every piece. The only downside was the shipping delay, which could be improved",
      replies: 5
    },
    {
        id:8,
        name: "Nirav Prajapati",
        date: "29 Oct 2023",
        rating: 6,
        profileImage: profileImages.person8,
        comment: "Excellent service and a wonderful selection of toys!",
        replies: 1
    },
    {
        id:9,
        name: "Aakash Singh",
        date: "03 Feb 2023",
        rating: 3,
        profileImage: profileImages.person9,
        comment: "This is my go-to store for kids' gifts! The prices are reasonable, and the quality is exceptional. The staff was friendly and helped me pick the perfect toy for my son.",
        replies: 6
    }
  ]);

  return (
    <div className="main-container">
      {/* Top Banner */}
      <div className="top-banner">
        FREE SHIPPING ON ORDERS Rs.1500+
      </div>

      {/* Header */}
      <header className={`header ${isHeaderSticky ? 'sticky' : ''}`}>
        <div className="header-content">
          <div className="header-main">
            <div className="logo-container">
              <Link to="/">
                <img src={r1} alt="Logo" className="logo" />
              </Link>
              <h1 className="brand-title">TOY TREASURE</h1>
            </div>
            
            <div className="header-actions">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className="search-input"
                />
                <Search className="search-icon" size={20} />
              </div>
              <div className="icon-group">
                <Heart className="icon-button" size={24} />
                <Link to="/RoleLogin">
                  <User className="icon-button" size={24} />
                </Link>
                <Link to="/Addtocart">
                  <ShoppingCart className="icon-button" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </header>
         {/* Feedback section  */}
    <div className="feedback-container">
      <div className="feedback-header">
        <div className="feedback-breadcrumb">
        <h1 className="rating-title">Review and Rating</h1>
          <div className="rating-search">
          <input
            type="search"
            placeholder="Search reviews..."
            className="search-bar"
          />
        </div>
        </div>
      </div>

      <div className="feedback-list">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <div className="feedback-card-header">
              <div className="user-info">
                <div className="user-avatar">
                <img
      src={feedback.profileImage}
      alt={feedback.name}
      className="avatar-image"
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/40"; // Fallback image if the profile image fails to load
      }}
    />
                </div>
                <div className="user-details">
                  <h3 className="user-name">{feedback.name}</h3>
                  <p className="feedback-date">{feedback.date}</p>
                </div>
              </div>
              
              <div className="rating-container">
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={`star-icon ${index < feedback.rating ? 'star-filled' : 'star-empty'}`}
                    />
                  ))}
                </div>
                <div className="verification-badge">
                  <span className="check-mark">✓</span>
                </div>
              </div>
            </div>

            <div className="feedback-content">
              <p className="feedback-text">{feedback.comment}</p>
            </div>

            <div className="feedback-actions">
              <div className="reply-count">
                <MessageCircle size={16} className="reply-icon" />
                <span className="reply-number">{feedback.replies}</span>
              </div>

              <div className="action-buttons">
                <button className="btn-respond">
                  Respond
                </button>
                <button className="btn-share">
                  <Share2 size={16} />
                  Share Review
                </button>
                <button className="btn-download">
                  Download
                </button>
                <button className="btn-delete">
                  Delete Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeedbackDashboard;