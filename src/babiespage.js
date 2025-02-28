import React, { useState, useEffect } from 'react';
import "./babiespage.css";
import a1 from './images/Age/BabyPopi.jpg';
import a2 from './images/Age/Jeep.jpg';
import a3 from './images/Age/teether.jpg';
import a4 from './images/Age/ring.jpg';
import a5 from './images/Age/whitedog.jpg';
import a6 from './images/Age/spinnig.jpg';
import a7 from './images/Age/Giometric.jpg';
import a8 from './images/Age/ducktrack.jpg';
import a9 from './images/Age/texicar.jpg';
import a10 from './images/Age/learningcube.jpg';
import a11 from './images/Age/swingcar.jpg';
import a12 from './images/Age/doublesidedcard.jpg';
import a13 from './images/Age/monstertruck.jpg';
import a14 from './images/Age/swirlingroll.jpg';
import a15 from './images/Age/robotpioneer.jpg';
import a16 from './images/Age/jumpingbird.jpg';
import a17 from './images/Age/woodenrattles.jpg';
import a18 from './images/Age/magneticdraw.jpg';
import a19 from './images/Age/plushhandyellow.jpg';
import a20 from './images/Age/plushorange.jpg';

const BabiesPage = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const babyProducts = [
    { id: 1, name: "BabyPopi Infant Toy", brand: "JELLYCAT, INC.", price: 1000.00, image: a1 ,rating: 4.5,
      reviews: 100},
    { id: 2, name: "Jeep Rubicon Foot to Floor Ride On - Red", brand: "NESTA TOYS", price: 820.00, image: a2 ,rating: 4.5,
      reviews: 28},
    { id: 3, name: "Baby Teether", brand: "SHUMEE", price: 1350.00, image: a3,rating: 3,
      reviews: 140 },
    { id: 4, name: "ColourFul Ring", brand: "PLAY SHIFU", price: 200.00, image: a4,rating: 4.2,
      reviews: 57 },
    { id: 5, name: "White Dog", brand: "SHUMEE", price: 450.00, image: a5,rating: 4,
      reviews: 60 },
    { id: 6, name: "Spinning Animal Toy", brand: "NESTA TOYS", price: 720.00, image: a6 ,rating: 4.5,
      reviews: 112},
    { id: 7, name: "Giometric Angle Blocks", brand: "Natural Toys", price: 105.00, image: a7,rating: 3,
      reviews: 53 },
    { id: 8, name: "Duck Track Toy", brand: "NESTA TOYS", price: 349.00, image: a8,rating: 5,
      reviews: 134 },
    { id: 9, name: "Unbreakable PullBack Taxi Car", brand: "SHUMEE", price: 384.00, image: a9,rating: 4.4,
      reviews: 44 },
    { id: 10, name: "Learning Cube", brand: "NESTA TOYS", price: 799.00, image: a10 ,rating: 5,
      reviews: 91},
    { id: 11, name: "Panda Swining Car", brand: "ELEFANT", price: 1298.00, image: a11 ,rating: 4.0,
      reviews: 30},
    { id: 12, name: "Colorful Double Sided Flash Cards", brand: "NESTA TOYS", price: 304.00, image: a12 ,rating: 4,
      reviews: 21},
    { id: 13, name: "Monster Truck", brand: "NESTA TOYS", price: 100.00, image: a13 ,rating: 3.5,
      reviews: 10},
    { id: 14, name: "Swirling Roll Toy", brand: "PLAY SHIFU", price: 349.00, image: a14 ,rating: 2.5,
       reviews: 5},
     { id: 15, name: "Learning Education Board", brand: "TENDER LEAF", price: 479.00, image: a15 ,rating: 3.6,
      reviews: 56},
     { id: 16, name: "Robot Pioneer Colorful Lights", brand: "TENDER LEAF", price: 899.00, image: a16 ,rating: 4,
        reviews: 102},
      { id: 17, name: "Jumping Bird", brand: "ELEFANT", price: 350.00, image: a17 ,rating: 5,
        reviews: 173},
      { id: 18, name: "Wooden Rattles", brand: "SHUMEE", price: 1091.00, image: a18 ,rating: 5,
        reviews: 140},
      { id: 19, name: "Magnetic Drawing ", brand: "MATURAL TOYS", price: 999.00, image: a19 ,rating: 2,
       reviews: 128},
       { id: 20, name: "Plush Hand Ring", brand: "NATURAL TOYS", price: 200.00, image: a20 ,rating: 3.0,
        reviews: 80}
  ];

  useEffect(() => {
    setProducts([...babyProducts]); // Initialize products with babyProducts
  }, []);
  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };
  useEffect(() => {
    let sortedProducts = [...products];

    if (sortBy === 'price-low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = [...babyProducts]; // Reset to default order for 'relevance'
    }

    setProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="babies-page-wrapper">
      <div className="babies-page-header-container">
        <h1 className="babies-page-header">0-2 Years</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of 0-2 Years Age toys</p>
      </div>
      
      <div className="babies-layout-container">
        <aside className="babies-sidebar">
          <div className="babies-filter-block">
            <h2 className="babies-filter-heading">Sort Options</h2>
            <select 
              className="babies-dropdown" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Sort By: Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        <div className="products">
          {products.map(product => (
            <div  key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
            
                  
            <div className="rides-product-info">
              <h3>{product.name}</h3>
              <p className="brand">{product.brand}</p>
              <div className="rides-product-rating">
                      <span className="stars">{renderStars(product.rating)}</span>
                      <span className="review-count">({product.reviews})</span>
                </div>
              <p className="price">₹{product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BabiesPage;
