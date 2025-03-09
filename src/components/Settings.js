import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <nav className="settings-nav">
        <Link to="profile-settings">Profile Settings</Link>
        <Link to="account-settings">Account Settings</Link>
      </nav>

      <Routes>
        <Route path="profile-settings" element={<div><h2>Update your Profile</h2><p>Edit your bio, username, and more.</p></div>} />
        <Route path="account-settings" element={<div><h2>Manage Account</h2><p>Change email, password, and privacy settings.</p></div>} />
      </Routes>
    </div>
  );
}

export default Settings;
