import React from "react";
import { NavLink } from "react-router-dom";
import { isLoggedIn } from "../../utils/storage";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="link-container">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          {isLoggedIn() ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
