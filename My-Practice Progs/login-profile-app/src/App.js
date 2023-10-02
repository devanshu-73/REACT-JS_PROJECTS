import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user) => {
        setLoggedIn(true);
        setUsername(user);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
    };

    return (
        <Router>
            <div>
                <h1>Authentication App</h1>
                <Route
                    path="/signup"
                    render={() => (loggedIn ? <Redirect to="/dashboard" /> : <Signup />)}
                />
                <Route
                    path="/login"
                    render={() => (loggedIn ? <Redirect to="/dashboard" /> : <Login onLogin={handleLogin} />)}
                />
                <Route
                    path="/dashboard"
                    render={() => (loggedIn ? <Dashboard username={username} onLogout={handleLogout} /> : <Redirect to="/login" />)}
                />
            </div>
        </Router>
    );
}

export default App;
