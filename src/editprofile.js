import React from "react";
import "./editprofile.css";

const MyProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" defaultValue="Aman" required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" defaultValue="Desai" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" defaultValue="desai@example.com" required />
        </div>
        <div className="form-group">
          <label>Phone No:</label>
          <input type="text" defaultValue="1234567890" required />
        </div>
        <div className="form-group">
          <label>Created By:</label>
          <input type="date" defaultValue="2000-01-01" required />
        </div>
        <div className="form-group">
          <label>Updated By:</label>
          <input type="date" defaultValue="2000-01-01" required />
        </div>
        <button type="submit" className="update-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
