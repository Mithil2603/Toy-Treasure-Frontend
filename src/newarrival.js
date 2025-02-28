import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const NewArrivalsPage = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: "Snoopy Love with Red Heart",
      brand: "STEIFF NORTH AMERICA, INC.",
      price: 49.00,
      isNew: true,
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Pearl Heart Petals 14\" Doll",
      brand: "COROLLE",
      price: 85.00,
      isNew: true,
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Mighty Mojo Paddington Bear Plush",
      brand: "PADDINGTON",
      price: 25.00,
      isNew: true,
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="py-4">
        <nav className="text-sm mb-8">
          <span className="text-gray-500">Home / Collections /</span>
          <span className="font-medium"> New Arrivals</span>
        </nav>

        <h1 className="text-4xl font-bold mb-8">New Arrivals</h1>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="border-b pb-4 mb-4">
              <h2 className="font-bold mb-4">Narrow by</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">PRODUCT TYPE</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Creativity (2)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Dolls (24)</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">BRAND</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Barefoot Dreams (18)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Brio (7)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">AGE</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>0-2 Years (44)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>3-4 Years (135)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4 items-center">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option value="relevance">Sort By: Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>

                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="border p-2 rounded"
                >
                  <option value={30}>30 Items Per Page</option>
                  <option value={60}>60 Items Per Page</option>
                  <option value={90}>90 Items Per Page</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                >
                  Grid
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                >
                  List
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="border rounded-lg p-4">
                  {product.isNew && (
                    <span className="bg-red-600 text-white px-2 py-1 text-sm rounded absolute">
                      New!
                    </span>
                  )}
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;