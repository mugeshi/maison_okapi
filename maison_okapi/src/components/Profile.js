import React, { useState } from 'react';
import './Profile.css'; 

const Profile = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted data:', formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-text">Profile</h2>
      </div>
      <form className="profile-inputs" onSubmit={handleSubmit}>
        <div className="profile-input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="profile-input"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="profile-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="profile-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="profile-error">{error}</div>}
        <button type="submit" className="profile-button">Update Profile</button>
        <button type="button" className="profile-button">Cancel</button>
        <a href="/forgot-password" className="profile-forgot-password-link">Forgot Password?</a>
      </form>
    </div>
  );
};

export default Profile;
