import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import './productdetailsecond.css';
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
const ProductDetailSecond = () => {
  const [quantity, setQuantity] = useState(1);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // Product database - in a real app, this would come from an API or database
  const productsData = [
    { 
      id: 301, 
      name: "SoftTeddy Bear Plushie", 
      price: "Rs.1999.99", 
      img: p1,
      rating: 4.5,
      reviews: 128,
      description: "Tawny-tousled and full of softness, this teddy bear is the perfect bedtime buddy.",
      details: {
        "Age": "3+ years",
        "Material": "100% Polyester",
        "Dimensions": "11.75 x 23.5 x 37.75 inches",
        "Weight": "10.6 lbs",
        "Care": "Hand wash only"
      }
    },
    { 
      id: 302, 
      name: "MusicalToy Drum", 
      price: "Rs.295.50", 
      img: p2,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 303, 
      name: "2024 Barbie Holiday Doll", 
      price: "Rs.455.75", 
      img: c1,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 304, 
      name: "WoodenRocking Horse", 
      price: "Rs.1189.99", 
      img: p4,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 305, 
      name: "Magic Story Wand StoryTeller", 
      price: "Rs.899.99", 
      img: p5,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 306, 
      name: "Cuddly Teddy Bear Large", 
      price: "Rs.1350.50", 
      img: p6,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 307, 
      name: "Electronic Toy Drum Set", 
      price: "Rs.1249.99", 
      img: p7,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 308, 
      name: "Ninja Warrior Figurine", 
      price: "Rs.79.25", 
      img: p8,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 309, 
      name: "Pirate Captain Set", 
      price: "Rs.9109.50", 
      img: p9,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 310, 
      name: "Foam Dart Shooter", 
      price: "Rs.369.75", 
      img: p10,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 311, 
      name: "Unicorn Soft Toy", 
      price: "Rs.412.99", 
      img: p11,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 312, 
      name: "Remote-Controlled Robot", 
      price: "Rs.39.99", 
      img: p12,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 313, 
      name: "Football", 
      price: "Rs.489.50", 
      img: p13,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 314, 
      name: "Wooden Animal Puzzle", 
      price: "Rs.2129.99", 
      img: p14,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 315, 
      name: "Mini Basketball Hoop", 
      price: "Rs.254.75", 
      img: p15,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 316, 
      name: "Cuddly Bunny Pillow", 
      price: "Rs.324.50", 
      img: p16,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 317, 
      name: "Talking Dino Pet", 
      price: "Rs.659.99", 
      img: p17,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 318, 
      name: "Miniature Kitchen Set", 
      price: "Rs.599.75", 
      img: p18,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 319, 
      name: "Wooden Building Blocks", 
      price: "Rs.249.50", 
      img: p19,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 320, 
      name: "Funny Talking Parrot Toy", 
      price: "Rs.764.99", 
      img: p20,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 321, 
      name: "Giant Panda Plush", 
      price: "Rs.915.99", 
      img: p21,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 322, 
      name: "Interactive Learning Tablet", 
      price: "Rs.644.50", 
      img: p22,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 323, 
      name: "Bubble Gun Blaster", 
      price: "Rs.279.99", 
      img: p23,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 324, 
      name: "Radish Pull Out Balancing Toy", 
      price: "Rs.8119.75", 
      img: p24,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 325, 
      name: "Math Practice Board", 
      price: "Rs.579.50", 
      img: p25,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 326, 
      name: "Soft Caterpillar Toy", 
      price: "Rs.339.99", 
      img: p26,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    { 
      id: 327, 
      name: "Wooden Train Set", 
      price: "Rs.969.75", 
      img: p27,
      rating: 4.2,
      reviews: 85,
      description: "Interactive musical drum set perfect for developing rhythm and coordination.",
      details: {
        "Age": "2+ years",
        "Material": "ABS Plastic",
        "Dimensions": "8 x 8 x 10 inches",
        "Weight": "2.4 lbs",
        "Care": "Wipe clean with damp cloth"
      }
    },
    // Add all your other products here with their complete details
  ];

  useEffect(() => {
    // Find the specific product based on the URL parameter
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTotal = () => {
    if (!product) return "0.00";
    const basePrice = parseFloat(product.price.replace('Rs.', '').replace(',', ''));
    return (basePrice * quantity).toFixed(2);
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="container">
          <div className="image-section">
            <img 
              src={product.img} 
              alt={product.name} 
              className="main-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x600?text=Product+Image";
              }}
            />
          </div>
          
          <div className="info-section">
            <h1 className="title">{product.name}</h1>
            
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={20}
                  className={`star ${i < Math.floor(product.rating) ? 'active' : ''}`}
                />
              ))}
              <span className="review-count">({product.reviews} reviews)</span>
            </div>
            
            <div className="price-container">
              <p className="price">{product.price}</p>
              {quantity > 1 && (
                <p className="total-price">
                  Total: Rs.{calculateTotal()}
                </p>
              )}
            </div>

            <p className="desc">{product.description}</p>
            
            <div className="quantity">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="qty-btn"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                className="qty-input"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
              >
                +
              </button>
              <span className="quantity-label">Quantity</span>
            </div>
            
            <div className="actions">
              <button className="cart-btn">
                <ShoppingCart size={20} />
                Add to Cart ({quantity})
              </button>
              <Link to="/payments">
                <button className="buy-btn">
                  Buy Now - Rs.{calculateTotal()}
                </button>
              </Link>
              <button className="wish-btn">
                <Heart size={20} />
              </button>
            </div>

            <div className="details">
              <h3 className="details-title">Product Details</h3>
              <ul className="details-list">
                {Object.entries(product.details).map(([key, value]) => (
                  <li key={key} className="details-item">
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSecond;