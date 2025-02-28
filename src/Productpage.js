import React, { useState,useEffect } from 'react';
import { Search, Filter, ShoppingCart,ChevronDown, Star, Heart,User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Alert, imageListItemClasses } from '@mui/material';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import Alert from './components/Alert'; // Adjust path if needed
import AlertDescription from './AlertDescription.js'; // Adjust path if needed
import { FaStar } from 'react-icons/fa';

import './Productpage.css';
import './newarrival.js';
import './sale.js';
import t1 from './featuretoy.jpg';
import r1 from './Logo.jpg';
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

import f1 from './images/Age/rocket.jpg';
import f2 from './images/Age/avg.jpg';
import f3 from './images/Age/machand.jpg';
import f4 from './images/Age/eplay.jpg';
import f5 from './images/Age/telescope.jpg';
import f6 from './images/Age/pinball.jpg';
import f7 from './images/Age/bmw.jpg';
import f8 from './images/Age/difcube.jpg';
import f9 from './images/Age/calender.jpg';
import f10 from './images/Age/solar.jpg';
import f11 from './images/Age/arange.jpg';
import f12 from './images/Age/arrow.jpg';
import f13 from './images/Age/track.jpg';
import f14 from './images/Age/sportkit.jpg';
import f15 from './images/Age/foosball.jpg';
import f16 from './images/Age/explorer.jpg';
import f17 from './images/Age/pagecraft.jpg';
import f18 from './images/Age/ewatch.jpg';
import f19 from './images/Age/fboard.jpg';
import f20 from './images/Age/dipuzz.jpg';
import f21 from './images/Age/cube.jpg';
import s1 from './images/Age/cards.jpg';
import s2 from './images/Age/flying.jpg';
import s3 from './images/Age/bcarrom.jpg';
import s4 from './images/Age/bcards.jpg';
import s5 from './images/Age/birfcraft.jpg';
import s6 from './images/Age/battle.jpg';
import s7 from './images/Age/blackdesign.jpg';                          
import s8 from './images/Age/boardgames.jpg';
import s9 from './images/Age/chess.jpg';
import s10 from './images/Age/flip.jpg';
import s11 from './images/Age/ladders.jpg';
import s12 from './images/Age/othelo.jpg';
import s13 from './images/Age/mirror.jpg';
import s14 from './images/Age/mandala.jpg';
import s15 from './images/Age/pattern.jpg';
import s16 from './images/Age/uno.jpg';
import s17 from './images/Age/zero.jpg';
import s18 from './images/Age/human.jpg';
import s19 from './images/Age/pots.jpg';
import s20 from './images/Age/funbox.jpg';


export default function Productpage() {
  const [currentSlide, setCurrentSlide] = useState(0);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(false);
      const [showMessage, setShowMessage] = useState(false);
     useEffect(() => {
        const handleScroll = () => {
          setIsHeaderSticky(window.scrollY > 40);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    setShowMessage(true);
    localStorage.setItem('cookiesAccepted', 'true');
    setTimeout(() => setShowMessage(false), 3000);
  };

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted) setCookiesAccepted(true);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { id: 301, name: "SoftTeddy Bear Plushie", price: "Rs.1999.99", img:p1 },
    { id: 302, name: "MusicalToy Drum", price: "Rs.295.50", img:p2 },
    { id: 303, name: "2024 Barbie Holiday Doll", price: "Rs.455.75", img:c1 },
    { id: 304, name: "WoodenRocking Horse", price: "Rs.1189.99", img:p4 },
    { id: 305, name: "Magic Story Wand StoryTeller", price: "Rs.899.99", img:p5 },
    { id: 306, name: "Cuddly Teddy Bear Large", price: "Rs.1350.50", img:p6 },
    { id: 307, name: "Electronic Toy Drum Set", price: "Rs.1249.99", img:p7 },
    { id: 308, name: "Ninja Warrior Figurine", price: "Rs.79.25", img:p8 },
    { id: 309, name: "Pirate Captain Set", price: "Rs.9109.50", img:p9 },
    { id: 310, name: "Foam Dart Shooter", price: "Rs.369.75", img:p10 },
    { id: 311, name: "Unicorn Soft Toy", price: "Rs.412.99", img:p11 },
    { id: 312, name: "Remote-Controlled Robot", price: "Rs.39.99", img:p12 },
    { id: 313, name: "Football", price: "Rs.489.50", img:p13 },
    { id: 314, name: "Wooden Animal Puzzle", price: "Rs.2129.99", img:p14 },
    { id: 315, name: "Mini Basketball Hoop", price: "Rs.254.75", img:p15 },
    { id: 316, name: "Cuddly Bunny Pillow", price: "Rs.324.50", img:p16 },
    { id: 317, name: "Talking Dino Pet", price: "Rs.659.99", img:p17 },
    { id: 318, name: "Miniature Kitchen Set", price: "Rs.599.75", img:p18 },
    { id: 319, name: "Wooden Building Blocks", price: "Rs.249.50", img:p19},
    { id: 320, name: "Funny Talking Parrot Toy", price: "Rs.764.99", img:p20 },
    { id: 321, name: "Giant Panda Plush", price: "Rs.915.99", img: p21 },
    { id: 322, name: "Interactive Learning Tablet", price: "Rs.644.50", img:p22  },
    { id: 323, name: "Bubble Gun Blaster", price: "Rs.279.99", img: p23 },
    { id: 324, name: "Radish Pull Out Balancing Toy", price: "Rs.8119.75", img:p24 },
    { id: 325, name: "Math Practice Board", price: "Rs.579.50", img:p25 },
    { id: 326, name: "Soft Caterpillar Toy", price: "Rs.339.99", img: p26 },
    { id: 327, name: "Wooden Train Set", price: "Rs.969.75", img:p27 },
    { id: 328, name: "Hanuman Prayers", price: "Rs.659.50", img:p28 },
    { id: 329, name: "Musical Drum Pad", price: "Rs.199.99", img:p29 },
    { id: 330, name: "STEM Building Blocks", price: "Rs.554.25", img:p30  },
    { id: 331, name: "Badminton Set", price: "Rs.199.50", img:p31 },
    { id: 332, name: "Alphabet Matching Game", price: "Rs.234.99", img:p32 },
    { id: 333, name: "Spiritual Board Game", price: "Rs.489.75", img:p33 },
    { id: 334, name: "Stacking Rings Tower", price: "Rs.379.50", img: p34 },
    { id: 335, name: "Space Explorer Astronaut Toy", price: "Rs.969.99", img:p35 },
    { id: 336, name: "Colorful Teddy Bear", price: "Rs.818.75", img:p36 },
    { id: 337, name: "Hot Wheels", price: "Rs.1049.50", img:p37 },
    { id: 338, name: "Spider Man", price: "Rs.499.99", img:p38 },
    { id: 339, name: "DIY Mandir Playset", price: "Rs.669.75", img:p39 },
    { id: 340, name: "Bible Story Flashcards", price: "Rs.199.50", img:p40 },
    { id: 341, name: "Cuddly Night Bunny", price: "Rs.927.99", img:p41 },
    { id: 342, name: "Interactive Story Bunny", price: "Rs.6990.75", img:p42 },
    { id: 343, name: "Avengers Figures", price: "Rs.2109.50", img:p43 },
    { id: 344, name: "Snakes and Ladders Deluxe", price: "Rs.239.99", img:p44 },
    { id: 345, name: "Storytelling Robot Toy", price: "Rs.984.25", img:p45 },
    { id: 346, name: "Storyteller Mickey", price: "Rs.1500.50", img:p46 },
    { id: 347, name: "Talking Fairy Book", price: "Rs.254.99", img:p47 },
    { id: 348, name: "Wolverine Figure", price: "Rs.879.75", img: p48 },
    { id: 349, name: "Nighttime Story Bear", price: "Rs.2299.50", img:p49 },
    { id: 350, name: "Animal Bingo Challenge", price: "Rs.574.99", img:p50 },
    { id: 351, name: "BabyPopi Infant Toy", price: "Rs.1000.00", img:a1 },
    { id: 352, name: "Jeep Rubicon Foot to Floor Ride On - Red", price: "Rs.820.00", img:a2},
    { id: 353, name: "Baby Teether", price: "Rs.1350.00", img:a3 },
    { id: 354, name: "ColourFul Ring", price: "Rs.200.00", img:a4 },
    { id: 355, name: "White Dog", price: "Rs.450.00", img:a5 },
    { id: 356, name: "Spinning Animal Toy", price: "Rs.720.00", img:a6 },
    {id: 357,name: "Rocket Launcher Kit",brand: "SMARTIVITY",price: 679.00, img: f1,rating: 4.5,reviews: 28},
    {
      id: 357,
      name: "Marvel Avengers Puzzles",
      brand: "FRANK",
      price: 660.00,
      img: f2,
      rating: 4.5,
      reviews: 28
    },
    {
      id: 358,
      name: "Robotic Machenical Hand",
      brand: "SMARTIVITY",
      price: 1039.00,
      img: f3,
      rating: 4.5,
      reviews: 28
    },
    {
        id: 359,
        name: "Electricity Kit",
        brand: "SMARTIVITY",
        price: 1169.00,
        img: f4,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 360,
        name: "Telescope",
        brand: "TOYSHINE",
        price: 699.00,
        img: f5,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 361,
        name: "Pinball Machine",
        brand: "DEOXY",
        price: 1349.00,
        img: f6,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 362,
        name: "Mercedes-AMG",
        brand: "LEGO",
        price: 2799.00,
        img: f7,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 363,
        name: "Cube Combo Set Of 2*2,3*3,Pyramid",
        brand: "D-ITERNAL",
        price: 529.00,
        img: f8,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 364,
        name: "Wooden Calender(VelcroActivity Wall Game",
        brand: "WISSEN",
        price: 625.00,
        img: f9,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 365,
        name: "Wooden Solar System",
        brand: "TREASUREBOX",
        price: 199.00,
        img: f10,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 366,
        name: "Sort Spellings",
        brand: "THE-PUZZLES-CO",
        price: 799.00,
        img: f11,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 367,
        name: "Shiv Bow & Arrow Set With Trishul & 3 Section Cup",
        brand: "RATNA'S",
        price: 269.00,
        img: f12,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 368,
        name: "Hydraulic Forkit ToyCar",
        brand: "SMARTIVITY",
        price: 669.00,
        img: f13,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 369,
        name: "Multi Sports Kit",
        brand: "SMARTIVITY",
        price: 879.00,
        img: f14,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 370,
        name: "Foosball Table",
        brand: "SMARTIVITY",
        price: 1089.00,
        img: f15,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 371,
        name: "Global Explorer(Animals,Mountains,Places,More)",
        brand: "SMARTIVITY",
        price: 1449.00,
        img: f16,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 371,
        name: "Ballista Launcher Educational Toy",
        brand: "GENIUSBOX",
        price: 1299.00,
        img: f17,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 372,
        name: "Keenkind Remote Control Watch-Car RC ",
        brand: "GENERIC",
        price: 599.00,
        img: f18,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 373,
        name: "Mini Footbal TbaleTop Game",
        brand: "KIDOLOGY",
        price: 899.00,
        img: f19,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 374,
        name: "Jigsaw Puzzles Of Dinosaurs",
        brand: "BRIJBASI",
        price: 785.00,
        img: f20,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 375,
        name: "5*5 Cube Color-Matching Puzzle",
        brand: "RUBIK'S",
        price: 199.00,
        img: f21,
        rating: 4.5,
      reviews: 28
      },
      {
        id: 376,
        name: "Large Flash Cards",
        brand: "SKILLMATICS",
        price: 664.00,
        img: s1,
        rating: 4.5,
        reviews: 100
      },
      {
        id: 378,
        name: "Astronaut Robot Kit",
        brand: "THE LITTLE ONES",
        price: 1589.00,
        img: s2,
        rating: 4.5,
        reviews: 100
      },
      {
        id: 379,
        name: "Board String Football",
        brand: "TOYSHINE",
        price: 594.00,
        img: s3,
        rating: 4.5,
        reviews: 100
      },
      {
          id: 380,
          name: "Moon Playing Cards",
          brand: "BICYCLE",
          price: 514.00,
          img: s4,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 381,
          name: "Make Your Own Bird Hanging",
          brand: "CHALK & CHUCKLES",
          price: 649.00,
          img: s5,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 382,
          name: "Battleship Board Games",
          brand: "HASBRO GAMING",
          price: 899.00,
          img: s6,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 383,
          name: "Ethnic Art Warli Painting Kit",
          brand: "COSHAL",
          price: 499.00,
          img: s7,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 384,
          name: "Classic Board Games",
          brand: "POPCORN GAMES",
          price: 352.00,
          img: s8,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 385,
          name: "Handcrafted Rosewood Chess Board",
          brand: "BCBESTCHESS",
          price: 439.00,
          img: s9,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 386,
          name: "Wooden Solar System",
          brand: "TREASUREBOX",
          price: 199.00,
          img: s10,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 387,
          name: "Wooden Memory Stick Chess Game",
          brand: "SHINETOY",
          price: 449.00,
          img: s11,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 388,
          name: "Othelo & Games Chess Set",
          brand: "Funskool",
          price: 688.00,
          img: s12,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 389,
          name: "STEM Glass Toys",
          brand: "BUTTERFLY EDUFIELDS",
          price: 399.00,
          img: s13,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 390,
          name: "Mandala Art Kit(Indian Art)",
          brand: "SOLOBOLO",
          price: 490.00,
          img: s14,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 391,
          name: "Dinosaur Remote Control Car",
          brand: "SNAPTRON",
          price: 2499.00,
          img: s15,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 392,
          name: "Uno Playing Cards",
          brand: "MATTEL",
          price: 138.00,
          img: s16,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 393,
          name: "Wooden Tic Tac Toe",
          brand: "GOLDER FEATHER",
          price: 191.00,
          img: s17,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 394,
          name: "Human Body Functions",
          brand: "SMARTIVITY",
          price: 829.00,
          img: s18,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 395,
          name: "Pot Painting Kit",
          brand: "TOYKRAFTT",
          price: 638.00,
          img: s19,
          rating: 4.5,
        reviews: 100
        },
        {
          id: 396,
          name: "Wooden Handmade Brain Teaser",
          brand: "THE MIND CHALLANGE",
          price: 560.00,
          img: s20,
          rating: 4.5,
        reviews: 100
        },
  ];
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };
  
  const categories = [
    { 
      id: 1, 
      name: "Age",
      subcategories: ["0-2 years", "2-4 years", "4-6 years", "6-8 years", "8+ years"]
    },
    { 
      id: 2, 
      name: "Fun",
      subcategories: ["Action Figures", "Remote Control Toys", "Musical Toys", "Role Play Toys", "Board Games"]
    },
    { 
      id: 3, 
      name: "Educational",
      subcategories: ["Math Learning", "Science Kits", "Language Learning", "Art & Craft", "Musical Instruments", "Puzzle Games"]
    },
    { 
      id: 4, 
      name: "Soft Toys",
      subcategories: ["Teddy Bears", "Animals & Birds", "Dolls", "Cushions & Pillows", "Baby Soft Toys"]
    },
    { 
      id: 5, 
      name: "Religion",
      subcategories: ["Hindu Religious Toys", "Christian Religious Toys", "Islamic Religious Toys", "Sikh Religious Toys", "Prayer Sets", "Religious Books"]
    },
    {
      id: 6,
      name: "Storyteller",
      subcategories: ["Interactive Story Books", "Audio Story Books", "Story Telling Toys", "Educational Stories", "Bedtime Stories"]
    },
    {
      id: 7,
      name: "Sports",
      subcategories: ["Indoor Sports", "Outdoor Sports", "Board Games", "Fitness Toys", "Sports Equipment"]
    },
    {
      id: 8,
      name: "Rubber & Silicon",
      subcategories: ["Bath Toys", "Teething Toys", "Squeeze Toys", "Educational Rubber Toys", "Silicon Baby Products"]
    },
    {
      id: 9,
      name: "Wooden",
      subcategories: ["Building Blocks", "Puzzle Sets", "Educational Wooden Toys", "Wooden Vehicles", "Wooden Kitchen Sets"]
    }
  ];
  const closeProductModal = () => {
    setSelectedProduct(null);
    
  };
  const ProductModal = ({ product,onClose}) => {
    if (!product) return null;

    <div className="product-modal-overlay">
        <div className="product-modal">
          <button className="close-button" onClick={onClose}>&times;</button>
          <div className="product-modal-content">
            <div className="product-modal-left">
              <img src={product.img} alt={product.name} className="main-product-image" />
              <div className="thumbnail-images">
                {/* Thumbnail images would go here */}
              </div>
              <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
            </div>
            <div className="product-modal-right">
              <h2>{product.name}</h2>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star" />
                ))}
                <span>(4.5/5)</span>
              </div>
              <p className="price">{product.price}</p>
              <div className="product-details">
                <h3>Product Details</h3>
                <ul>
                  <li>Brand: Toy Treasure</li>
                  <li>Age: 3+ years</li>
                  <li>Material: Premium Quality</li>
                  <li>Dimensions: 30 x 20 x 15 cm</li>
                </ul>
              </div>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <div className="action-buttons">
                <button className="add-to-cart">Add to Cart</button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>


     {/* Product Modal */}
     {selectedProduct && (
      <ProductModal 
        product={selectedProduct} 
        onClose={closeProductModal}
      />
    )}
  }

  const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
      // const priceA = parseFloat(a.price.replace('Rs.', '').replace(',', ''));
      // const priceB = parseFloat(b.price.replace('Rs.', '').replace(',', ''));
      const getPriceValue = (price) => {
        if (typeof price === 'number') return price;
        if (typeof price !== 'string') return 0;
        
        // Remove 'Rs.' prefix and any commas, then convert to float
        const numericString = price.replace(/Rs\.|,/g, '').trim();
        return parseFloat(numericString) || 0;
      };
  
      const priceA = getPriceValue(a.price);
      const priceB = getPriceValue(b.price);
      switch (sortBy) {
        case 'price-low':
          return priceA - priceB;
        case 'price-high':
          return priceB - priceA;
        default:
          return 0;
      }
    });
  };
  const handleProductClick = (productId) => {
    window.location.href = `/product/${productId}`;
  };
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the feedback submission
      console.log('Feedback submitted:', { feedback, rating });
      setSubmitted(true);
    };
  
    const handleReset = () => {
      setFeedback('');
      setRating(0);
      setSubmitted(false);
    };
  return (
    <div className="toytreasure-container">
      {/* Header */}
      <h1 className="welcome-heading">Welcome to ToyTreasure! – Where Every Toy Tells a Story! 🎁✨</h1>

      {/* Search and Filter Controls */}
      <div className="controls-container">
        <div className="filters">
          <select 
            className="sort-filter"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
      {sortProducts(products, sortBy).map(product => (
    <div 
      key={product.id} 
      className="product-card"
      onClick={() => handleProductClick(product.id)}
    >
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
              <button 
                className={`wishlist-button ${wishlist.includes(product.id) ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
              >
                <Heart size={20} />
              </button>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star" />
                ))}
              </div>
              <p className="price">{product.price}</p>
              <button 
                className="buybutton"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback-container">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h2>We Value Your Feedback!</h2>
            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={`star-icon ${i < rating ? 'filled' : ''}`}
                  onClick={() => setRating(i + 1)}
                />
              ))}
            </div>
            <textarea
              placeholder="Leave your feedback here"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button type="submit" className="submit-feedback">Submit</button>
          </form>
        ) : (
          <div>
            <h2 classname="feedback-thankyou">Thank you for your feedback!</h2>
            <p>You rated us {rating} out of 5 stars.</p>
                            {feedback && <p className="feedback-comment">"{feedback}"</p>}
            <button className="reset-feedback" onClick={handleReset}>
              Leave Another Feedback
            </button>
          </div>
        )}
      </div>
      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeProductModal}
        />
      )}
      {!cookiesAccepted && (
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                  <p className="text-gray-700">This website uses cookies to enhance user experience...</p>
                  <Button onClick={handleAcceptCookies} className="bg-red-600 text-white hover:bg-red-700">
                    Accept Cookies
                  </Button>
                </div>
              </div>
            )}
      
            {showMessage && (
              <Alert className="fixed bottom-4 right-4 bg-green-50 border-green-200">
                <AlertDescription>
                  Cookies accepted! Thank you for your preference.
                </AlertDescription>
              </Alert>
            )}
   {/* Footer*/}
       
    </div>
  );
}