import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './CreateAccount.css'; 

const CreateAccount = () => {
    // State for storing form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // State for error and success messages
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Hook to navigate programmatically to other routes
    const navigate = useNavigate();

    // Handle changes in form input fields and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Update the specific field in formData
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Make a POST request to the server to create a new user
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set content type to JSON
            },
            body: JSON.stringify(formData), // Convert formData to JSON for the request body
        })
            .then((response) => {
                if (!response.ok) {
                    // Throw an error if the response status is not OK
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse the response JSON
            })
            .then((data) => {
                console.log('Account created:', data); // Log the server response
                setSuccess('Account created successfully!'); 
                setError(''); // Clear any error message
                setFormData({ username: '', email: '', password: '' }); // Clear form inputs
                alert('Account created successfully!'); // Show an alert to the user

                // Redirect to the sign-in page
                navigate('/signin');
            })
            .catch((error) => {
                // Handle any errors during the request
                console.error('Error:', error);
                setError(error.message || 'Failed to create account'); // Set error message
                setSuccess(''); // Clear success message
            });
    };

    // Render the form
    return (
        <div className="create-account-container">
            <h2 className="create-account-title">Create Account</h2>
            {/* Display success message */}
            {success && <div className="create-account-success">{success}</div>}
            {/* Display error message */}
            {error && <div className="create-account-error">{error}</div>}
            <form className="create-account-form" onSubmit={handleSubmit}>
                {/* Username input field */}
                <div className="create-account-field">
                    <label className="create-account-label" htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="create-account-input"
                        required
                    />
                </div>
                {/* Email input field */}
                <div className="create-account-field">
                    <label className="create-account-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="create-account-input"
                        required
                    />
                </div>
                {/* Password input field */}
                <div className="create-account-field">
                    <label className="create-account-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="create-account-input"
                        required
                    />
                </div>
                {/* Submit button */}
                <button type="submit" className="create-account-button">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
