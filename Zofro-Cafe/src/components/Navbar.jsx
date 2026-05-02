import React from "react";
import "./navbar.css";
import logo from "../assets/Zofro-logo.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <ul className="nav-left">
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>

        <div className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          <Link to="/">
          <img src={logo} alt="logo"  />
          </Link>
        </div>

        <ul className="nav-right">
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;