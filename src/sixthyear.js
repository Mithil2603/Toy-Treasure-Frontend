// BabiesPage.js
import React, { useState ,useEffect} from 'react';
import "./babiespage.css";
import a1 from './images/Age/cards.jpg';
import a2 from './images/Age/flying.jpg';
import a3 from './images/Age/bcarrom.jpg';
import a4 from './images/Age/bcards.jpg';
import a5 from './images/Age/birfcraft.jpg';
import a6 from './images/Age/battle.jpg';
import a7 from './images/Age/blackdesign.jpg';                          
import a8 from './images/Age/boardgames.jpg';
import a9 from './images/Age/chess.jpg';
import a10 from './images/Age/flip.jpg';
import a11 from './images/Age/ladders.jpg';
import a12 from './images/Age/othelo.jpg';
import a13 from './images/Age/mirror.jpg';
import a14 from './images/Age/mandala.jpg';
import a15 from './images/Age/pattern.jpg';
import a16 from './images/Age/uno.jpg';
import a17 from './images/Age/zero.jpg';
import a18 from './images/Age/human.jpg';
import a19 from './images/Age/pots.jpg';
import a20 from './images/Age/funbox.jpg';


const SixthYear = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [products, setProducts] = useState([]);

  const babyProducts = [
    {
      id: 1,
      name: "Large Flash Cards",
      brand: "SKILLMATICS",
      price: 664.00,
      image: a1,
      rating: 4.5,
      reviews: 100
    },
    {
      id: 2,
      name: "Astronaut Robot Kit",
      brand: "THE LITTLE ONES",
      price: 1589.00,
      image: a2,
      rating: 4.5,
      reviews: 100
    },
    {
      id: 3,
      name: "Board String Football",
      brand: "TOYSHINE",
      price: 594.00,
      image: a3,
      rating: 4.5,
      reviews: 100
    },
    {
        id: 4,
        name: "Moon Playing Cards",
        brand: "BICYCLE",
        price: 514.00,
        image: a4,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 5,
        name: "Make Your Own Bird Hanging",
        brand: "CHALK & CHUCKLES",
        price: 649.00,
        image: a5,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 6,
        name: "Battleship Board Games",
        brand: "HASBRO GAMING",
        price: 899.00,
        image: a6,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 7,
        name: "Ethnic Art Warli Painting Kit",
        brand: "COSHAL",
        price: 499.00,
        image: a7,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 8,
        name: "Classic Board Games",
        brand: "POPCORN GAMES",
        price: 352.00,
        image: a8,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 9,
        name: "Handcrafted Rosewood Chess Board",
        brand: "BCBESTCHESS",
        price: 439.00,
        image: a9,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 10,
        name: "Wooden Solar System",
        brand: "TREASUREBOX",
        price: 199.00,
        image: a10,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 11,
        name: "Wooden Memory Stick Chess Game",
        brand: "SHINETOY",
        price: 449.00,
        image: a11,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 12,
        name: "Othelo & Games Chess Set",
        brand: "Funskool",
        price: 688.00,
        image: a12,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 13,
        name: "STEM Glass Toys",
        brand: "BUTTERFLY EDUFIELDS",
        price: 399.00,
        image: a13,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 14,
        name: "Mandala Art Kit(Indian Art)",
        brand: "SOLOBOLO",
        price: 490.00,
        image: a14,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 15,
        name: "Dinosaur Remote Control Car",
        brand: "SNAPTRON",
        price: 2499.00,
        image: a15,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 16,
        name: "Uno Playing Cards",
        brand: "MATTEL",
        price: 138.00,
        image: a16,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 17,
        name: "Wooden Tic Tac Toe",
        brand: "GOLDER FEATHER",
        price: 191.00,
        image: a17,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 18,
        name: "Human Body Functions",
        brand: "SMARTIVITY",
        price: 829.00,
        image: a18,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 19,
        name: "Pot Painting Kit",
        brand: "TOYKRAFTT",
        price: 638.00,
        image: a19,
        rating: 4.5,
      reviews: 100
      },
      {
        id: 20,
        name: "Wooden Handmade Brain Teaser",
        brand: "THE MIND CHALLANGE",
        price: 560.00,
        image: a20,
        rating: 4.5,
      reviews: 100
      },
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
        <h1 className="babies-page-header">14+ Years</h1>
        <p className="babies-page-subheader">Discover our carefully curated selection of 14+ Years Age toys</p>
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

export default SixthYear;
