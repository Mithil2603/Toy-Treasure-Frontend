import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.salePercentage && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-medium rounded">
            Sale
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <div className="mt-1 flex items-center">
          <span className="text-red-600 font-medium">${product.salePrice}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

const SalePage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  
  const filters = {
    categories: ['Toys', 'Games', 'Dolls', 'Educational', 'Outdoor'],
    brands: ['FAO Schwarz', 'Barbie', 'LEGO', 'Fisher-Price'],
    ageRanges: ['0-2 years', '3-5 years', '6-8 years', '9+ years']
  };

  const sampleProducts = [
    {
      id: 1,
      name: "Classic Teddy Bear",
      salePrice: 29.99,
      originalPrice: 49.99,
      image: "/api/placeholder/300/400",
      salePercentage: 40
    },
    {
      id: 2,
      name: "Deluxe Dollhouse",
      salePrice: 149.99,
      originalPrice: 199.99,
      image: "/api/placeholder/300/400",
      salePercentage: 25
    },
    {
      id: 3,
      name: "Remote Control Car",
      salePrice: 39.99,
      originalPrice: 59.99,
      image: "/api/placeholder/300/400",
      salePercentage: 33
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-primary font-serif text-4xl mb-2">Toy Treasure</h1>
          <p className="text-gray-600">— SINCE 2014 —</p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium mb-4">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    min="0"
                    max={maxPrice}
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-24 px-2 py-1 border rounded"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    min={minPrice}
                    max="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-24 px-2 py-1 border rounded"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Categories</h3>
                {filters.categories.map((category) => (
                  <label key={category} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Brands</h3>
                {filters.brands.map((brand) => (
                  <label key={brand} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>

              {/* Age Ranges */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Age Range</h3>
                {filters.ageRanges.map((range) => (
                  <label key={range} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/* View Toggle and Sort */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <select className="px-3 py-1 border rounded">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>

              {/* Products */}
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {sampleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;