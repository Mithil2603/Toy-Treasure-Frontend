import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Heart, User, Share, Twitter, Facebook } from 'lucide-react';
import p1 from './images/teddy_brown.jpg';
import p2 from './images/drum_red.jpg';
import c1 from './images/Age/barbiered.jpg';
import p4 from './images/horse_brown.jpg';
import p5 from './images/storyteller_blue.jpg';
import p6 from './images/teddy_white.jpg';
import p7 from './images/drum_electronic.jpg';
import p8 from './images/ninja_warrior.jpg';
import p9 from './images/Pirate.jpg';
import p10 from './images/foam_dark_shooter.jpg';
import p11 from './images/unicorn.jpg';
import p12 from './images/remote_robot.jpg';
import p13 from './images/football_trainingset.jpg';
import p14 from './images/horse_classic.jpg';
import p15 from './images/mini_basketball.jpg';
import p16 from './images/bunny_pillow.jpg';
import p17 from './images/talking_dino.jpg';
import p18 from './images/miniature_kitchen.jpg';
import p19 from './images/buildingblock.jpg';
import p20 from './images/funny_talking_parrot.jpg';
import p21 from './images/panda.jpg';
import p22 from './images/learning_tablet.jpg';
import p23 from './images/bubble_gun.jpg';
import p24 from './images/radish_pullout_toy.jpg';
import p25 from './images/math_practice.jpg';
import p26 from './images/caterpillar.jpg';
import p27 from './images/trainset.jpg';
import p28 from './images/hanuman_prayer.jpg';
import p29 from './images/musical_drum.jpg';
import p30 from './images/STEM_building.jpg';
import p31 from './images/badminton_set.jpg';
import p32 from './images/alphabet_matching.jpg';
import p33 from './images/spiritual_board.jpg';
import p34 from './images/stacking_rings.jpg';
import p35 from './images/space_explorer_astronaut.jpg';
import p36 from './images/teddy_colorful.jpg';
import p37 from './images/hot_wheels.jpg';
import p38 from './images/spider_man.jpg';
import p39 from './images/DIY_playset.jpg';
import p40 from './images/bible_storycards.jpg';
import p41 from './images/bunny_night.jpg';
import p42 from './images/interactive_bunny.jpg';
import p43 from './images/avenger_figures.jpg';
import p44 from './images/Snakes_ladder.jpg';
import p45 from './images/storyteller_robot.jpg';
import p46 from './images/mickey_storyteller.jpg';
import p47 from './images/talking_fairy_book.jpg';
import p48 from './images/wolverine.jpg';
import p49 from './images/story_bear.jpg';
import p50 from './images/animal_bingo.jpg';
import p51 from './images/age.jpg';
import p52 from './Fun.jpg';
import p53 from './images/educational.jpg';
import p54 from './images/sports.jpg';
import p55 from './images/religion.jpg';
import a1 from './images/Age/BabyPopi.jpg';
import a2 from './images/Age/Jeep.jpg';
import a3 from './images/Age/teether.jpg';
import a4 from './images/Age/ring.jpg';
import a5 from './images/Age/whitedog.jpg';
import a6 from './images/Age/spinnig.jpg';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    '/path-to-main-image.jpg',
    '/path-to-alt-image-1.jpg',
    '/path-to-alt-image-2.jpg',
    '/path-to-alt-image-3.jpg'
  ];

  const relatedProducts = [
    {
      name: "Red Rody Horse Inflatable Bouncer",
      image: "/path-to-image.jpg",
      price: "$49.99"
    },
    {
      name: "Pink Doll",
      image: "/path-to-image.jpg",
      price: "$29.99"
    },
    {
      name: "White Teddy Bear",
      image: "/path-to-image.jpg",
      price: "$39.99"
    }
  ];

  return (
    <div className="main-container">
      <div className="top-banner">
        FREE SHIPPING ON ORDERS $100+*
      </div>

      {/* Header - reused from main page */}
      <header className="header">
        {/* ... Same header content as main page ... */}
      </header>

      {/* Product Detail Content */}
      <div className="product-detail-container">
        <div className="product-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / <span>Current Product</span>
        </div>

        <div className="product-main">
          <div className="product-gallery">
            <div className="main-image">
              <img src={productImages[selectedImage]} alt="Product" />
            </div>
            <div className="thumbnail-strip">
              {productImages.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-tag">New!</div>
            <h1 className="product-title">Bartholomew Bear Gigantic</h1>
            <div className="product-price">$1,000.00</div>

            <div className="product-quantity">
              <label>QUANTITY</label>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button className="add-to-cart-btn">Add to cart</button>
            <button className="buy-now-btn">Buy with ShopPay</button>
            <button className="more-payment-options">More payment options</button>

            <button className="add-to-wishlist">
              <Heart size={20} /> Add To Wishlist
            </button>

            <div className="product-description">
              <h2>DESCRIPTION</h2>
              <p>Tawny-tousled and full of softness, Bartholomew Bear is the perfect bedtime buddy. Read him a story, sing him a teddy bear lullaby, or maybe just rest on his fluffy fudge tummy - he's adorably podgy!</p>
              
              <ul className="product-features">
                <li>Suitable for age 3+</li>
                <li>Material: 100% Polyester</li>
                <li>Dimensions: (L x W x H) 11.75 x 23.5 x 37.75 inches</li>
                <li>Weight: 10.6 lbs</li>
                <li>Care instructions: Hand wash only; do not tumble dry, dry clean or iron</li>
              </ul>
            </div>

            <div className="social-share">
              <button><Facebook size={20} /> Share</button>
              <button><Twitter size={20} /> Tweet</button>
              <button><Share size={20} /> Pin it</button>
            </div>
          </div>
        </div>

        <div className="related-products">
          <h2>Frequently Bought Together</h2>
          <div className="related-products-grid">
            {relatedProducts.map((product, index) => (
              <div key={index} className="related-product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - reused from main page */}
            <footer className="footer">
              <div className="footer-content">
                <div className="footer-grid">
                  <div className="footer-section">
                    <h3 className="footer-title">Visit Us</h3>
                    <p>Conveniently located in Paldi, Ahmedabad</p>
                    <p>Monday - Sunday</p>
                    <p>10:00 AM - 8:00 PM</p>
                  </div>
                  <div className="footer-section">
                    <h3 className="footer-title">Customer Care</h3>
                    <ul className="footer-links">
                      <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                      <li><Link to="/aboutus" className="footer-link">About Us</Link></li>
                      <li><Link to="#" className="footer-link">Shipping & Policy</Link></li>
                      <li><Link to="#" className="footer-link">FAQs</Link></li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h3 className="footer-title">Legal</h3>
                    <ul className="footer-links">
                      <li><Link to="#" className="footer-link">Terms & Conditions</Link></li>
                      <li><Link to="/aboutus" className="footer-link">Privacy Policy</Link></li>
                      <li><Link to="#" className="footer-link">Terms Of Sale</Link></li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h3 className="footer-title">Newsletter</h3>
                    <div className="newsletter-form">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="newsletter-input"
                      />
                      <button className="newsletter-button">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  );
};

export default ProductDetail;