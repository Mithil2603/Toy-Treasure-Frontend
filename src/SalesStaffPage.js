import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SalesStaffPage = () => {
  const [activeTab, setActiveTab] = useState('inventory');
  const [updateMessage, setUpdateMessage] = useState('');
  const navigate = useNavigate();

  // Sign out function to redirect to the RoleLogin page
  const handleSignOut = () => {
    console.log("Signing out...");
    navigate('/rolelogin'); // Redirect to RoleLogin page
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setUpdateMessage("Profile updated successfully!");
    setTimeout(() => setUpdateMessage(''), 3000); // Hide message after 3 seconds
  };

  const renderInventory = () => (
    <div className="content">
      <h2>Inventory Management</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
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
            <td>Toy Car</td>
            <td>Fun</td>
            <td>Rs.199.99</td>
            <td>100</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>SoftTeddy</td>
            <td>Soft Toys</td>
            <td>Rs.1999.99</td>
            <td>250</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Barbie</td>
            <td>Rubbber & Silicon</td>
            <td>Rs.455.75</td>
            <td>50</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Wooden Horse</td>
            <td>Wooden Toys</td>
            <td>Rs.1189.99</td>
            <td>20</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ninja</td>
            <td>Rubber & Silicon</td>
            <td>Rs.79.25</td>
            <td>70</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Electronic Drum</td>
            <td>Fun</td>
            <td>Rs.1249.99</td>
            <td>200</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Remote-Control Robot</td>
            <td>Fun</td>
            <td>Rs.39.99</td>
            <td>50</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Football</td>
            <td>Sports</td>
            <td>Rs.489.50</td>
            <td>35</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Talking Dino Pet</td>
            <td>Fun</td>
            <td>Rs.659.99</td>
            <td>20</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Bubble Gun Blaster</td>
            <td>Fun</td>
            <td>Rs.279.99</td>
            <td>40</td>
            <td>
              <button>Update Stock</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderCustomerInquiries = () => (
    <div className="content">
      <h2>Customer Inquiries</h2>
      <table>
        <thead>
          <tr>
            <th>Inquiry ID</th>
            <th>Customer</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>Sunita Johnson</td>
            <td>Product Availability</td>
            <td>2024-12-30</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Hiral Verma</td>
            <td>Product Availability</td>
            <td>2024-12-28</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1003</td>
            <td>Nidhi Chauhan</td>
            <td>Product Availability</td>
            <td>2024-11-18</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1004</td>
            <td>Ameer Iqbal</td>
            <td>Product Availability</td>
            <td>2024-10-22</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1005</td>
            <td>Abbas Qureshi</td>
            <td>Product Availability</td>
            <td>2024-10-20</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1006</td>
            <td>Aisha Vahora</td>
            <td>Product Availability</td>
            <td>2024-10-08</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1007</td>
            <td>Nisha Solanki</td>
            <td>Product Availability</td>
            <td>2024-08-22</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1008</td>
            <td>Suraj Rajan</td>
            <td>Gopal Mehta</td>
            <td>2024-08-16</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1009</td>
            <td>Rakesh Desai</td>
            <td>Product Availability</td>
            <td>2024-07-11</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Vikrant Bhargava</td>
            <td>Product Availability</td>
            <td>2024-07-10</td>
            <td>Open</td>
            <td>
              <button>Respond</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderProfile = () => (
    <div className="content">
      <h2>My Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <label>First Name:</label>
        <input type="text" defaultValue="Pranav" />
        <label>Last Name:</label>
        <input type="text" defaultValue="Shah" />
        <label>Email:</label>
        <input type="email" defaultValue="shah@example.com" />
        <label>Phone Number:</label>
        <input type="text" defaultValue="1234567890" />
        <label>Created By:</label>
        <input type="date" defaultValue="2000-01-01" />
        <label>Updated By:</label>
        <input type="date" defaultValue="2000-01-01" />
        <button type="submit">Update Profile</button>
        {updateMessage && <p className="success-message">{updateMessage}</p>}
      </form>
    </div>
  );

  return (
    <div className="sales-container">
      <aside className="sidebar">
        <h2>Sales Staff</h2>
        <ul>
          <li onClick={() => setActiveTab('inventory')}>Inventory Management</li>
          <li onClick={() => setActiveTab('inquiries')}>Customer Inquiries</li>
          <li onClick={() => setActiveTab('profile')}>My Profile</li>
        </ul>
      </aside>
      <main>
        <header className="top-bar">
          <button className="sign-out" onClick={handleSignOut}>Sign Out</button>
        </header>
        {activeTab === 'inventory' && renderInventory()}
        {activeTab === 'inquiries' && renderCustomerInquiries()}
        {activeTab === 'profile' && renderProfile()}
      </main>
    </div>
  );
};

export default SalesStaffPage;
