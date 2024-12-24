import React, { useState } from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Account created:', data);
                setSuccess('Account created successfully!');
                setError('');
                setFormData({ username: '', email: '', password: '' });
                alert('Account created successfully!'); 
            })
            .catch((error) => {
                console.error('Error:', error);
                setError(error.message || 'Failed to create account');
                setSuccess('');
            });
    };

    return (
        <div className="create-account-container">
            <h2 className="create-account-title">Create Account</h2>
            {success && <div className="create-account-success">{success}</div>}
            {error && <div className="create-account-error">{error}</div>}
            <form className="create-account-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="create-account-button">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
