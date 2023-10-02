// SignupForm.js
import React, { useState } from "react";

const SignupForm = ({ onSignup }) => {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
