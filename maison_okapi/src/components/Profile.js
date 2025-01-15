import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if newUser data exists in localStorage
        const newUser = JSON.parse(localStorage.getItem('newUser'));
        if (newUser) {
            setFormData((prevState) => ({
                ...prevState,
                username: newUser.username,
                email: newUser.email,
            }));
            // Clear the localStorage after pre-filling
            localStorage.removeItem('newUser');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Save user token or relevant data in localStorage
            localStorage.setItem('authToken', data.token); // Example
            setSuccessMessage('You have successfully signed in!');
            setError('');
            navigate('/dashboard'); // Navigate to the dashboard
        })
        .catch((error) => {
            console.error('Error:', error);
            setError('Failed to sign in.');
            setSuccessMessage('');
        });
};


    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2 className="profile-text">Sign In</h2>
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
                {successMessage && <div className="profile-success">{successMessage}</div>}

                <button type="submit" className="profile-button">Sign In</button>
                <button type="button" className="profile-button">Cancel</button>

                <div className="profile-signup-prompt">
                    <p>
                        If you don't have an account, 
                        <Link to="/create-account" className="profile-create-account-link"> create one here</Link>.
                    </p>
                </div>

                <Link to="/forgot-password" className="profile-forgot-password-link">Forgot Password?</Link>
            </form>
        </div>
    );
};

export default Profile;
