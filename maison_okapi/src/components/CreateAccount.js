import React, { useState } from 'react'; // Import React and the useState hook for managing state.
import './CreateAccount.css'; // Import the CSS file for styling.

const CreateAccount = () => {
    // State to hold form data (username, email, password).
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // State to hold any error messages that occur during sign-in.
    const [error, setError] = useState('');

    // Handle changes in form inputs.
    const handleChange = (e) => { 
        const { name, value } = e.target; // Destructure name and value from the input element.
        setFormData({ ...formData, [name]: value }); // Update the corresponding field in formData using the spread operator.
    };

    // Handle form submission.
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (reloading the page).

        // Make a POST request to the server's sign-in endpoint.
        fetch('/api/signin', {
            method: 'POST', // HTTP method.
            headers: {
                'Content-Type': 'application/json', // Specify the content type as JSON.
            },
            body: JSON.stringify(formData), // Convert the form data to a JSON string for the request body.
        })
        .then(response => {
            if (!response.ok) {
                // If the response is not ok, throw an error.
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response.
        })
        .then(data => {
            // Handle successful response.
            console.log('Success:', data); // Log the success data to the console.
        })
        .catch((error) => {
            // Handle errors (e.g., network issues or server errors).
            console.error('Error:', error); // Log the error to the console.
            setError('Failed to sign in.'); // Update the error state with a user-friendly message.
        });
    };

    return (
        <div className="profile-container"> {/* Main container for the profile/sign-in form. */}
            <div className="profile-header">
                <h2 className="profile-text">Sign In</h2> {/* Header text for the form. */}
            </div>
            <form className="profile-inputs" onSubmit={handleSubmit}> {/* Form element with an onSubmit handler. */}
                {/* Username input */}
                <div className="profile-input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="profile-input"
                        value={formData.username} // Bind input value to formData.username.
                        onChange={handleChange} // Update state when the user types.
                        required // Mark the input as required.
                    />
                </div>

                {/* Email input */}
                <div className="profile-input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="profile-input"
                        value={formData.email} // Bind input value to formData.email.
                        onChange={handleChange} // Update state when the user types.
                        required // Mark the input as required.
                    />
                </div>

                {/* Password input */}
                <div className="profile-input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="profile-input"
                        value={formData.password} // Bind input value to formData.password.
                        onChange={handleChange} // Update state when the user types.
                        required // Mark the input as required.
                    />
                </div>

                {/* Display error message if it exists */}
                {error && <div className="profile-error">{error}</div>}

                {/* Sign In button */}
                <button type="submit" className="profile-button">Sign In</button>

                {/* Cancel button */}
                <button type="button" className="profile-button">Cancel</button>

                {/* Sign-up prompt */}
                <div className="profile-signup-prompt">
                    <p>If you don't have an account, <a href="/create-account" className="profile-create-account-link">create one here</a>.</p>
                </div>

                {/* Forgot Password link */}
                <a href="/forgot-password" className="profile-forgot-password-link">Forgot Password?</a>
            </form>
        </div>
    );
};

export default CreateAccount; // Export the component to be used elsewhere.
