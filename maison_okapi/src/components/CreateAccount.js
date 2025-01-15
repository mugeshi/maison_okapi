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
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create account');
            }

            const data = await response.json();
            console.log('Account created:', data);

            // Display success message and clear error
            setSuccess('Account created successfully!');
            setError('');

            // Store user details in localStorage for pre-filling the sign-in form
            localStorage.setItem(
                'newUser',
                JSON.stringify({ username: formData.username, email: formData.email })
            );

            // Clear the form
            setFormData({ username: '', email: '', password: '' });

            // Redirect to the profile (sign-in) page
            navigate('/profile');
        } catch (err) {
            console.error('Error:', err);
            setError(err.message); // Display error message
            setSuccess(''); // Clear success message
        }
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
                    <label htmlFor="username" className="create-account-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="create-account-input"
                        required
                    />
                </div>
                {/* Email input field */}
                <div className="create-account-field">
                    <label htmlFor="email" className="create-account-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="create-account-input"
                        required
                    />
                </div>
                {/* Password input field */}
                <div className="create-account-field">
                    <label htmlFor="password" className="create-account-label">Password</label>
                    <input
                        type="password"
                        id="password"
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
