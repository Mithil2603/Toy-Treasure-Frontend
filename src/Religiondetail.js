import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Religiondetail.css';
import c1 from './images/religion/jesusmary.jpg';
import c2 from './images/religion/hanuman.jpg';
import c3 from './images/religion/ganpati.jpg';
import c4 from './images/religion/shiv.jpg';
import c5 from './images/religion/swami.jpg';
import c6 from './images/jesus.jpg';
import c7 from './images/Age/reg.jpg';
import c8 from './images/religion/Noah_Ark_Toys.jpg';
import c9 from './images/religion/buddha.jpg';
import c10 from './images/religion/muslimdoll.jpg';
import c11 from './images/religion/mosque.jpg';
import c12 from './images/religion/buddhabook.png';
import c13 from './images/religion/krishna.jpg';
import c14 from './images/religion/krishnabook.png';
import c15 from './images/religion/alphabet_kaba.jpg';
import c16 from './images/religion/hanuman1.jpg';
import c17 from './images/religion/hanumankalyan.jpg';
import c18 from './images/religion/biblechars.jpg';
import c19 from './images/religion/sikhim.jpg';
import c20 from './images/religion/talkingcloud.jpg';
import c21 from './images/religion/mosquetalking.jpg';
import c22 from './images/religion/ganesha.png';
import c23 from './images/religion/ganeshabook.png';

const ReligiousToys = () => {
const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const products = [
    {
      id: 401,
      name: "Jesus Mary Toy",
      brand: "ELEFANT",
      price: 750.00,
      image: c1,
      rating: 4.5,
      reviews: 128,
      Description:"A beautifully crafted figure of Jesus and Mary, perfect for religious education and storytelling.",
      details: {
        "Age": "3+ years",
        "Material": "High-quality resin",
        "Dimensions": "8 x 6 x 4 inches",
        "Weight": "500g",
        "Care": "Wipe with a soft cloth"
      }
    },
    {
      id: 402,
      name: "Hanuman",
      brand: "SHUME",
      price: 280.00,
      image: c2,
      rating: 4.8,
      reviews: 156,
      description: "A Hanuman figurine designed to inspire devotion and storytelling for children.",
      details: {
      "Age": "3+ years",
      "Material": "ABS plastic",
      "Dimensions": "7 x 5 x 3 inches",
      "Weight": "450g",
      "Care": "Washable with mild soap"
    }
    },
    {
      id: 403,
      name: "Ganpati",
      brand: "TENDER LEAF TOYS",
      price: 340.00,
      image: c3,
      rating: 4.7,
      reviews: 92,
      description: "A vibrant and colorful Lord Ganesha idol designed for children’s spiritual learning.",
      details: {
      "Age": "3+ years",
      "Material": "Eco-friendly clay",
      "Dimensions": "9 x 7 x 5 inches",
      "Weight": "600g",
      "Care": "Keep dry and avoid direct sunlight"
    }
    },
    {
      id: 404,
      name: "Shiv",
      brand: "NESTA TOYS",
      price: 430.00,
      image: c4,
      rating: 4.9,
      reviews: 203,
      description: "A detailed and artistic representation of Lord Shiva, ideal for spiritual education.",
      details: {
      "Age": "3+ years",
      "Material": "PVC with non-toxic paint",
      "Dimensions": "10 x 6 x 4 inches",
      "Weight": "550g",
      "Care": "Wipe clean with a dry cloth"
    }
    },
    {
      id: 405,
      name: "Swami Statue",
      brand: "TENDER LEAF TOYS",
      price: 300.00,
      image: c5,
      rating: 4.6,
      reviews: 167,
      description: "A Swami figurine designed to inspire meditation and devotion in young minds.",
      details: {
      "Age": "5+ years",
      "Material": "Polyresin",
      "Dimensions": "8 x 5 x 3 inches",
      "Weight": "480g",
      "Care": "Handle with care, avoid dropping"
    }
    },
    {
      id: 406,
      name: "Jesus",
      brand: "SHUFEE TOYS",
      price: 250.00,
      image: c6,
      rating: 4.4,
      reviews: 145,
      description: "A sacred Jesus statue designed to teach faith and compassion to children.",
      details: {
      "Age": "3+ years",
      "Material": "Ceramic",
      "Dimensions": "9 x 6 x 5 inches",
      "Weight": "700g",
      "Care": "Avoid exposure to water"
    }
    },
    {
      id: 407,
      name: "Lord Shiva & Parvati Duo",
      brand: "TOYSHINE",
      price: 998.00,
      image: c7,
      rating: 4.5,
      reviews: 128,
      description: "A divine set featuring Lord Shiva and Goddess Parvati, symbolizing unity and strength.",
    details: {
      "Age": "4+ years",
      "Material": "Resin",
      "Dimensions": "11 x 8 x 5 inches",
      "Weight": "900g",
      "Care": "Clean with a dry cloth"
    }
    },
    {
      id: 408,
      name: "Noah's Ark",
      brand: "MODI TOYS",
      price: 998.00,
      image: c8,
      rating: 4.5,
      reviews: 128,
      description: "A storytelling playset featuring Noah’s Ark, ideal for interactive learning.",
    details: {
      "Age": "3+ years",
      "Material": "Wooden",
      "Dimensions": "12 x 8 x 6 inches",
      "Weight": "1kg",
      "Care": "Wipe with a damp cloth"
    }
    },
    {
      id: 409,
      name: "Budha Toy",
      brand: "TOYSHINE",
      price: 998.00,
      image: c9,
      rating: 4.5,
      reviews: 128,
      description: "A peaceful Buddha statue designed to promote mindfulness and calmness.",
    details: {
      "Age": "5+ years",
      "Material": "Sandstone",
      "Dimensions": "10 x 7 x 4 inches",
      "Weight": "750g",
      "Care": "Keep in a cool, dry place"
    }
    },
    {
      id: 410,
      name: "Muslism Hijab Girl Doll",
      brand: "TOYSHINE",
      price: 998.00,
      image: c10,
      rating: 4.5,
      reviews: 128,
      description: "A culturally inclusive doll representing a young Muslim girl in a hijab.",
     details: {
      "Age": "3+ years",
      "Material": "Soft fabric and plastic",
      "Dimensions": "14 inches tall",
      "Weight": "350g",
      "Care": "Hand wash recommended"
    }
    },
    {
      id: 411,
      name: "Mosque",
      brand: "MODI TOYS",
      price: 998.00,
      image: c11,
      rating: 4.5,
      reviews: 128,
      description: "A beautifully crafted miniature mosque designed to introduce children to Islamic architecture and traditions.",
    details: {
      "Age": "3+ years",
      "Material": "ABS Plastic",
      "Dimensions": "10 x 8 x 6 inches",
      "Weight": "800g",
      "Care": "Wipe with a dry cloth"
    }
    },
    {
      id: 412,
      name: "Budha Book",
      brand: "SHUFEE",
      price: 998.00,
      image: c12,
      rating: 4.5,
      reviews: 128,
      description: "An educational book featuring stories and teachings of Buddha, perfect for young learners.",
    details: {
      "Age": "5+ years",
      "Material": "Paper",
      "Dimensions": "8 x 6 inches",
      "Weight": "300g",
      "Care": "Keep in a dry place"
    }
    },
    {
      id: 413,
      name: "Krishna",
      brand: "ELEFANT",
      price: 998.00,
      image: c13,
      rating: 4.5,
      reviews: 128,
      description: "A beautifully detailed Krishna figurine, ideal for devotional practices and storytelling.",
    details: {
      "Age": "3+ years",
      "Material": "Resin",
      "Dimensions": "9 x 6 x 4 inches",
      "Weight": "550g",
      "Care": "Clean with a soft cloth"
    }
    },
    {
      id: 414,
      name: "Krishna Book",
      brand: "NESTA TOYS",
      price: 998.00,
      image: c14,
      rating: 4.5,
      reviews: 128,
      description: "A colorful book featuring Krishna’s childhood stories, designed to engage young readers.",
    details: {
      "Age": "4+ years",
      "Material": "Paper",
      "Dimensions": "7 x 5 inches",
      "Weight": "250g",
      "Care": "Store in a cool, dry place"
    }
    },
    {
      id: 415,
      name: "Alphabet Kaba",
      brand: "TOYSHINE",
      price: 998.00,
      image: c15,
      rating: 4.5,
      reviews: 128,
      description: "An educational toy introducing kids to Arabic letters with a Kaaba-shaped design.",
    details: {
      "Age": "3+ years",
      "Material": "Wood",
      "Dimensions": "8 x 8 x 8 inches",
      "Weight": "700g",
      "Care": "Wipe clean with a damp cloth"
    }
    },
    {
      id: 416,
      name: "Hanuman",
      brand: "TENDER LEAF TOYS",
      price: 998.00,
      image: c16,
      rating: 4.5,
      reviews: 128,
      description: "A finely crafted Hanuman figurine to inspire devotion and storytelling.",
    details: {
      "Age": "3+ years",
      "Material": "Polyresin",
      "Dimensions": "10 x 7 x 5 inches",
      "Weight": "600g",
      "Care": "Dust with a soft cloth"
    }
    },
    {
      id: 417,
      name: "Hanuman Kalyan",
      brand: "TENDER LEAF TOYS",
      price: 998.00,
      image: c17,
      rating: 4.5,
      reviews: 128,
      description: "A special edition Hanuman statue representing strength and wisdom.",
    details: {
      "Age": "5+ years",
      "Material": "Resin",
      "Dimensions": "9 x 6 x 5 inches",
      "Weight": "750g",
      "Care": "Keep away from direct sunlight"
    }
    },
    {
      id: 418,
      name: "Bible Characters",
      brand: "PLAY SHIFU",
      price: 998.00,
      image: c18,
      rating: 4.5,
      reviews: 128,
      description: "A set of mini Bible character figurines, ideal for interactive storytelling and learning.",
    details: {
      "Age": "4+ years",
      "Material": "Plastic",
      "Dimensions": "Various sizes (2-4 inches)",
      "Weight": "500g",
      "Care": "Wipe clean with a dry cloth"
    }
    },
    {
      id: 419,
      name: "Sikim",
      brand: "PLAY SHIFU",
      price: 998.00,
      image: c19,
      rating: 4.5,
      reviews: 128,
      description: "A learning kit introducing kids to Sikh traditions, featuring symbols and characters.",
    details: {
      "Age": "5+ years",
      "Material": "Wood & Paper",
      "Dimensions": "8 x 6 x 4 inches",
      "Weight": "650g",
      "Care": "Store in a dry place"
    }
    },
    {
      id: 420,
      name: "Talking Cloud",
      brand: "NESTA TOYS",
      price: 998.00,
      image: c20,
      rating: 4.5,
      reviews: 128,
      description: "An interactive Islamic toy that recites prayers and teaches kids about faith.",
    details: {
      "Age": "3+ years",
      "Material": "Soft Fabric & Electronics",
      "Dimensions": "10 x 8 inches",
      "Weight": "500g",
      "Care": "Wipe with a damp cloth"
    }
  },
    {
      id: 421,
      name: "Mosque Talking",
      brand: "TOYSHINE",
      price: 998.00,
      image: c21,
      rating: 4.5,
      reviews: 128,
      description: "An interactive talking mosque toy that recites Islamic prayers and teachings.",
    details: {
      "Age": "3+ years",
      "Material": "Plastic & Electronics",
      "Dimensions": "10 x 8 x 6 inches",
      "Weight": "700g",
      "Care": "Wipe clean with a dry cloth"
    }

    },
    {
      id: 422,
      name: "Ganesha",
      brand: "TOYSHINE",
      price: 290.00,
      image: c22,
      rating: 4.5,
      reviews: 128,
      description: "A beautifully crafted Ganesha figurine designed for young devotees and learners.",
    details: {
      "Age": "3+ years",
      "Material": "Resin",
      "Dimensions": "9 x 6 x 4 inches",
      "Weight": "600g",
      "Care": "Dust with a soft cloth"
    }
    },
    {
      id: 423,
      name: "Ganesha Book",
      brand: "SHUMEE",
      price: 590.00,
      image: c23,
      rating: 4.5,
      reviews: 128,
      description: "A colorful and engaging book featuring stories and teachings about Lord Ganesha.",
    details: {
      "Age": "4+ years",
      "Material": "Paper",
      "Dimensions": "7 x 5 inches",
      "Weight": "250g",
      "Care": "Store in a dry place"
    }
    }
  ];
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/religion');
      }
    }
  }, [id, navigate]);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert(`${product.name} added to cart!`);
  };

  if (!product) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-container">
        <div className="image-section">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>
        <div className="info-section">
          <h1 className="title">{product.name}</h1>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={`star ${i < Math.floor(product.rating) ? 'active' : ''}`} />
            ))}
            <span className="review-count">({product.reviews} reviews)</span>
          </div>
          <p className="price">₹{product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <div className="quantity">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="qty-btn">-</button>
            <input type="number" value={quantity} min="1" readOnly className="qty-input" />
            <button onClick={() => setQuantity(quantity + 1)} className="qty-btn">+</button>
            <span className="quantity-label">Quantity</span>
          </div>
          <div className="actions">
            <button className="cart-btn">
              <ShoppingCart size={20} /> Add to Cart ({quantity})
            </button>
            <Link to="/payments">
              <button className="buy-btn">Buy Now</button>
            </Link>
            <button className="wish-btn">
              <Heart size={20} />
            </button>
          </div>
          <div className="product-details">
            <h3>Product Details</h3>
            <ul>
              {Object.entries(product.details).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligiousToys;
