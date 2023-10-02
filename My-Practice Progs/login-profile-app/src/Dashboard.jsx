import React from 'react';

function Dashboard({ username, onLogout }) {
    const handleLogout = () => {
        // Implement logout functionality here
        // Clear the authentication token or logged-in flag
        // Redirect the user to the login page or update UI accordingly
        onLogout();
    };

    return (
        <div>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Dashboard;
