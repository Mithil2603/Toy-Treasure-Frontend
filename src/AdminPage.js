import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import img1 from './delivery.jpg';
import p1 from './images/teddy_brown.jpg';
import c1 from './images/Age/barbiered.jpg';
import p4 from './images/horse_brown.jpg';
import p8 from './images/ninja_warrior.jpg';
import p29 from './images/musical_drum.jpg';
import p12 from './images/remote_robot.jpg';
import p13 from './images/football_trainingset.jpg';
import p17 from './images/talking_dino.jpg';
import p23 from './images/bubble_gun.jpg';

import './AdminPage.css';
import AdminRegister from './adminregister'; 
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProductForm, setShowProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
    image: null, // To store the uploaded image file
  });

  const navigate = useNavigate(); // Initialize navigate hook for page redirection

  // Sign out function to redirect to the RoleLogin page
  const handleSignOut = () => {
    console.log("Signing out...");
    navigate('/rolelogin'); // Redirect to RoleLogin page
  };

  // Handle navigation to Registration page
  const handleRegistrationClick = () => {
    navigate('/adminregister'); // Navigate to the Admin Register page
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("New Product Details:", newProduct);
    // Add your logic to save the new product (e.g., API call to backend)

    // Reset form and hide it after submission
    setNewProduct({ id: '', name: '', category: '', price: '', stock: '', image: null });
    setShowProductForm(false);
  };

  const renderDashboard = () => (
    <div className="content">
      <h2>Dashboard</h2>
      <div className="dashboard">
        <div className="dashboard-item">
          <h3>Total Orders</h3>
          <p>250</p>
        </div>
        <div className="dashboard-item">
          <h3>Total Customers</h3>
          <p>1000</p>
        </div>
        <div className="dashboard-item">
          <h3>Total Products</h3>
          <p>500</p>
        </div>
        <div className="dashboard-item">
          <h3>Total Revenue</h3>
          <p>Rs.50,000</p>
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="content">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Parul Gamadia</td>
            <td>parul22@gmail.com</td>
            <td>Customer</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Aditya Nagar</td>
            <td>adityanagar01@.com</td>
            <td>Sales Staff</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Deepak Srivastava</td>
            <td>deepak01@.com</td>
            <td>Sales Staff</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Avinash Mishra</td>
            <td>mishra010@.com</td>
            <td>Delivery Person</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Dinesh Kumar</td>
            <td>dkumar004@.com</td>
            <td>Customers</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Vikram Singh</td>
            <td>vikramsingh28@.com</td>
            <td>Delivery Person</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Tanya Dixit</td>
            <td>dixitt30@.com</td>
            <td>Customers</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Tanuja Bedi</td>
            <td>bedi204@.com</td>
            <td>Sales Staff</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Nazam Abbas</td>
            <td>nazamabbas07@.com</td>
            <td>Customer</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Bholanath Tiwari</td>
            <td>bholanath56@.com</td>
            <td>Delivery Person</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderProductManagement = () => (
    <div className="content">
      <h2>Product Management</h2>
      <button className="add-product-btn" onClick={() => setShowProductForm(!showProductForm)}>
        {showProductForm ? "Close Form" : "Add New Product"}
      </button>
      {
      showProductForm && (
        <form className="add-product-form" onSubmit={handleAddProduct}>
          <div>
            <label>ID:</label>
            <input
              type="text"
              name="id"
              value={newProduct.id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      )
      }

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>img</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="image"><img src={img1} alt="Product" /></td>
            <td>Toy Car</td>
            <td>Vehicles</td>
            <td>Rs.199.99</td>
            <td>100</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className="image"><img src={p1} alt="Product" /></td>
            <td>SoftTeddy</td>
            <td>Soft Toys</td>
            <td>Rs.1999.99</td>
            <td>250</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className="image"><img src={c1} alt="Product" /></td>
            <td>Barbie</td>
            <td>Dolls</td>
            <td>Rs.455.75</td>
            <td>50</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td className="image"><img src={p4} alt="Product" /></td>
            <td>Wooden Horse</td>
            <td>Wooden Toys</td>
            <td>Rs.1189.99</td>
            <td>20</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td className="image"><img src={p8} alt="Product" /></td>
            <td>Ninja</td>
            <td>Warrior Figure</td>
            <td>Rs.79.25</td>
            <td>70</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td className="image"><img src={p29} alt="Product" /></td>
            <td>Electronic Dum</td>
            <td>E-Toy</td>
            <td>Rs.1249.99</td>
            <td>200</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td className="image"><img src={p12} alt="Product" /></td>
            <td>Remote-Control Robot</td>
            <td>Remoting Toys</td>
            <td>Rs.39.99</td>
            <td>50</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td className="image"><img src={p13} alt="Product" /></td>
            <td>Football</td>
            <td>Sport</td>
            <td>Rs.489.50</td>
            <td>35</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td className="image"><img src={p17} alt="Product" /></td>
            <td>Talking Dino Pet</td>
            <td>Musical Toy</td>
            <td>Rs.659.99</td>
            <td>20</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td className="image"><img src={p23} alt="Product" /></td>
            <td>Bubble Gun Blaster</td>
            <td>Guns</td>
            <td>Rs.279.99</td>
            <td>40</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderOrderManagement = () => (
    <div className="content">
      <h2>Order Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total Amount</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>Parul Gamadia</td>
            <td>Rs.599.99</td>
            <td>2024-12-15</td>
            <td>Shipped</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Khushbu Dugged</td>
            <td>Rs.3499.99</td>
            <td>2024-12-09</td>
            <td>Shipped</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1003</td>
            <td>Anil Kumar</td>
            <td>Rs.335.99</td>
            <td>2024-11-27</td>
            <td>Processing</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1004</td>
            <td>Tamana Khatun</td>
            <td>Rs.899.90</td>
            <td>2024-10-24</td>
            <td>Shipped</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1005</td>
            <td>Pramod Desai</td>
            <td>Rs.500.00</td>
            <td>2024-10-23</td>
            <td>Shipped</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1006</td>
            <td>Ajeet Kumar</td>
            <td>Rs.2988.90</td>
            <td>2024-10-20</td>
            <td>Processing</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1007</td>
            <td>Ravi J.K</td>
            <td>Rs.640.45</td>
            <td>2024-09-07</td>
            <td>Shipped</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1008</td>
            <td>Gopal Mehta</td>
            <td>Rs.250.00</td>
            <td>2024-08-25</td>
            <td>Processing</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1009</td>
            <td>Khushi Prajapat</td>
            <td>Rs.2500.87</td>
            <td>2024-07-23</td>
            <td>Processing</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Anam Shaikh</td>
            <td>Rs.3000.79</td>
            <td>2024-07-10</td>
            <td>Shipped</td>
            <td>Completed</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderProfile = () => (
    <div className="content">
      <h2>My Profile</h2>
      <form>
        <label>First Name:</label>
        <input type="text" defaultValue="Daksh" />
        <label>Last Name:</label>
        <input type="text" defaultValue="Solanki" />
        <label>Email:</label>
        <input type="email" defaultValue="dakshh.solankii@example.com" />
        <label>Phone No:</label>
        <input type="text" defaultValue="1234567890" />
        <label>Created By:</label>
        <input type="date" defaultValue="2000-01-01" />
        <label>Updated By:</label>
        <input type="date" defaultValue="2000-01-01" />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin</h2><br></br>
        <ul>
          <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
          <li onClick={handleRegistrationClick}>Sales Staff Registration</li> {/* Registration click handler */}
          <li onClick={handleRegistrationClick}>Delivery Personnel Registration</li>
          <li onClick={() => setActiveTab('users')}>View Users</li>
          <li onClick={() => setActiveTab('products')}>Category Management</li>
          <li onClick={() => setActiveTab('orders')}>View Order</li>
          <li onClick={() => setActiveTab('profile')}>My Profile</li>
        </ul>
      </aside>
      <main>
        <header className="top-bar">
          <button className="sign-out" onClick={handleSignOut}>
            Sign Out
          </button>
        </header>
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'users' && renderUserManagement()}
        {activeTab === 'products' && renderProductManagement()}
        {activeTab === 'orders' && renderOrderManagement()}
        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'register' && <AdminRegister />} {/* Show AdminRegister here */}
      </main>
    </div>
  );
};

export default AdminPage;
