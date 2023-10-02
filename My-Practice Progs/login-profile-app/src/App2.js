import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState(null);

  const handleSignup = (formData) => {
    // Here, you can send the signup data to your authentication service
    // If signup is successful, set the user state
    setUser(formData);
  };

  const handleLogin = (formData) => {
    // Here, you can send the login data to your authentication service
    // If login is successful, set the user state
    setUser(formData);
  };

  const handleLogout = () => {
    setUser(null);
  };
  let content;

  if (user) {
    content = (
      <div>
        <Profile user={user} />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <SignupForm onSignup={handleSignup} />
        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  return <div>{content}</div>;

}

export default App;
