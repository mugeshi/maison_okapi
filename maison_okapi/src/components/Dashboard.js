import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const handleLogout = () => {
        // Clear user session data (localStorage, sessionStorage, or cookies)
        localStorage.removeItem('userToken'); // Remove the authentication token from localStorage
        sessionStorage.removeItem('userToken'); // If you're using sessionStorage, clear it as well
        
        //  remove cookies if you're storing tokens there
        // document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Redirect the user to the sign-in page after logging out
        window.location.href = '/signin'; // Redirect to the login page
    };

    return (
        <div className="dashboard-container">
            <h2>Welcome to Your Dashboard</h2>
            <div className="dashboard-options">
                <Link to="/order-history" className="dashboard-option">
                    View Order History
                </Link>
                <button className="dashboard-option" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Dashboard;

