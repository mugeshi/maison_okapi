import React, { useState } from "react";
import "./ProfilePage.css";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    name: "John Doe",
    phone: "123-456-7890",
    picture: "path_to_profile_picture.jpg", // Initial profile picture
  });

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save changes logic here
    setEditing(false);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          picture: reader.result, // Set the base64 image data as the profile picture
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-info">
        <div className="profile-picture">
          <img src={profile.picture} alt="Profile" />
          <button onClick={() => document.getElementById("fileInput").click()}>
            Change Picture
          </button>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={handlePictureChange}
          />
        </div>
        <div className="profile-details">
          <h2>{profile.username}</h2>
          <p>Email: {profile.email}</p>
          <p>Name: {profile.name}</p>
          <p>Phone: {profile.phone}</p>
          {editing ? (
            <div className="edit-form">
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
              <button onClick={handleSave}>Save Changes</button>
            </div>
          ) : (
            <button onClick={handleEdit}>Edit Profile</button>
          )}
        </div>
      </div>
      <div className="order-history">
        <h2>Order History</h2>
        {/* Map through orders and display them */}
      </div>
      <div className="wishlist">
        <h2>Wishlist</h2>
        {/* Map through wishlist items and display them */}
      </div>
      <div className="addresses">
        <h2>Addresses</h2>
        {/* Map through addresses and display them */}
      </div>
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        {/* Display recent activity */}
      </div>
      <div className="support">
        <h2>Support</h2>
        <button>Contact Support</button>
      </div>
    </div>
  );
};

export default Profile;
