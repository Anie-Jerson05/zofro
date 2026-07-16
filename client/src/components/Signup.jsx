import React, { useState } from "react";
import "./signup.css";

import sideLogo from "../assets/zofro-logo.png";

const Signup = ({ setIsLoggedIn, setShowSignUp, setShowLogin }) => {
  // STATES
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  // ERROR STATE
  const [error, setError] = useState("");

  // EMAIL VALIDATION
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // SIGNUP HANDLER
  const signupHandler = () => {
    // EMPTY CHECK
    if (!email || !name || !password || !confirmPassword) {
      setError("Please fill all fields");

      return;
    }

    // EMAIL CHECK
    if (!validateEmail(email)) {
      setError("Please enter a valid email");

      return;
    }

    // PASSWORD LENGTH
    if (password.length < 6 || password.length > 18) {
      setError("Password must be 6 to 18 characters");

      return;
    }

    // PASSWORD MATCH
    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");

      return;
    }

    // SUCCESS
    setError("");

    setIsLoggedIn(true);

    setShowSignUp(false);
  };

  // ACCOUNT HANDLER
  const accountHandler = () => {
    setShowSignUp(false);

    setShowLogin(true);
  };

  return (
    <div className="login-page">
      {/* CARD */}
      <div className="signup-card">
        {/* RIGHT */}
        <div className="signup-right">
          <img src={sideLogo} alt="Zofro Logo" className="side-logo" />
        </div>

        {/* LEFT */}
        <div className="signup-left">
          <p className="welcome-text">
            <span className="big-text">Create Account</span>
          </p>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* NAME */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* ERROR */}
          {error && <p className="error-text">{error}</p>}
          
          {/* LOGIN LINK */}
          <p className="have-account" onClick={accountHandler}>
            I already have an account
          </p>

          {/* SIGNUP BUTTON */}
          <button className="glow-btn" onClick={signupHandler}>
            Sign Up
          </button>

          {/* BACK */}
          <button className="back-btn" onClick={() => setShowSignUp(false)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
