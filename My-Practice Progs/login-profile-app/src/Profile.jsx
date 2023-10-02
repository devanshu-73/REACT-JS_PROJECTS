// Profile.js
import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      {/* Display user profile information */}
    </div>
  );
};

export default Profile;
