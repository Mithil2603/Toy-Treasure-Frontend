import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { categoryId } = useParams(); // Get category ID from URL
  const [products, setProducts] = useState([]);

  // Fetch products for the selected category
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Category Products</h1>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.product_id} className="col-md-3 mb-4">
              <div className="card shadow-sm p-3">
                <img 
                  src={`/images/${product.product_img}`}  // Ensure correct path
                  className="card-img-top"
                  alt={product.product_name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="text-muted">{product.brand}</p>
                  <p className="text-warning">
                    ★ {product.rating} ({product.reviews})
                  </p>
                  <h4 className="text-danger">₹{product.price}</h4>
                  <button className="btn btn-warning w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products available in this category.</p>
        )}
      </div>
    </div>
  );
}
