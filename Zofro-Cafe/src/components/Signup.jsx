import React from "react";
import "./signup.css";

import logo from "../assets/zofro-logo.png";
import sideLogo from "../assets/zofro-logo.png";
import beans from "../assets/coffee-beans.png";

const Signup = ({ setIsLoggedIn, setShowSignUp, setShowLogin }) => {
  const signupHandler = () => {
    (setIsLoggedIn(true), setShowSignUp(false));
  };

  const accountHandler = () => {
    (setShowSignUp(false), setShowLogin(true));
  };

  return (
    <div className="login-page">
      {/* LOGIN CARD */}
      <div className="signup-card">
        <div className="signup-right">
          <img src={sideLogo} alt="Zofro Logo" className="side-logo" />
        </div>
        {/* <img src={beans} alt="Coffee Beans" className="beans" /> */}
        <div className="signup-left">
          <p className="welcome-text">
            <span className="big-text">Create Account</span>

            {/* <span className="small-text">
            Please login to 
            your account
          </span> */}
          </p>

          {/* INPUTS */}
          <input type="email" placeholder="Email" />

          <input type="text" placeholder="Name" />

          <input type="password" placeholder="Password" />

          <input type="password" placeholder="Confirm Password" />

          {/* FORGOT */}
          <p className="have-account" onClick={() => accountHandler()}>
            I already have an account
          </p>

          {/* BUTTON */}
          <button className="glow-btn" onClick={() => signupHandler()}>
            Sign Up
          </button>

          <button className="back-btn" onClick={() => setShowSignUp(false)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
