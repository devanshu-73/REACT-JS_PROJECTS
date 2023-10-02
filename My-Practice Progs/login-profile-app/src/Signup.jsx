import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.status === 201) {
                // Signup successful; you can show a success message or redirect
                console.log('Signup successful');
            } else {
                // Signup failed; show an error message
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
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
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

export default Signup;
