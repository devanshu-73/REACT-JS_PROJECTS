import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
            const userData = await response.json();

            if (userData.length === 1) {
                // Login successful; you can store a token or set a logged-in flag
                console.log('Login successful');
                onLogin(username); // Call a function to update the logged-in state
            } else {
                // Login failed; show an error message
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

export default Login;
