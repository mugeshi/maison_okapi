import React, { useState } from 'react';
import './Profile.css'; // Importing the CSS file for styling the component

const Profile = () => {
  // Setting up state to manage form data (username, email, and password)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Setting up state to manage error messages
  const [error, setError] = useState('');

  // Function to handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring name and value from the event target
    // Updating form data state with the new input value
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    // Handle form submission logic here (e.g., send data to the server)
    console.log('Submitted data:', formData); // Logging submitted data for testing
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-text">Sign In</h2> {/* Header for the Sign In form */}
      </div>
      <form className="profile-inputs" onSubmit={handleSubmit}>
        {/* Input field for username */}
        <div className="profile-input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="profile-input"
            value={formData.username}
            onChange={handleChange} // Updating state on input change
            required // Making this field required
          />
        </div>
        
        {/* Input field for email */}
        <div className="profile-input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="profile-input"
            value={formData.email}
            onChange={handleChange} // Updating state on input change
            required // Making this field required
          />
        </div>

        {/* Input field for password */}
        <div className="profile-input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="profile-input"
            value={formData.password}
            onChange={handleChange} // Updating state on input change
            required // Making this field required
          />
        </div>

        {/* Displaying error message if there's an error */}
        {error && <div className="profile-error">{error}</div>}

        {/* Button to submit the form */}
        <button type="submit" className="profile-button">Sign In</button> 
        {/* Button to cancel the action (could be connected to another function later) */}
        <button type="button" className="profile-button">Cancel</button>

        {/* Prompt for users to create an account if they don't have one */}
        <div className="profile-signup-prompt">
          <p>If you don't have an account, <a href="/create-account" className="profile-create-account-link">create one here</a>.</p>
        </div>

        {/* Link to the forgot password page */}
        <a href="/forgot-password" className="profile-forgot-password-link">Forgot Password?</a>
      </form>
    </div>
  );
};

export default Profile; // Exporting the Profile component for use in other parts of the application
