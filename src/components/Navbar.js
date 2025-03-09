import { NavLink } from "react-router-dom";
import React from "react";
import './Navbar.css';

const Navbar =() => {
  return (
    <nav className="navbar">
      <h2>SocialApp</h2>
      <div className="links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/profile/1">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
