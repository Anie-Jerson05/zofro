import React, { useState } from "react";

import Profile from "./Profile";
import Login from "../components/Login";

import "./Account.css";

import { FaUserCircle } from "react-icons/fa";

import Footer from "../components/Footer";

const Account = () => {
  const [showLogin, setShowLogin] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* PROFILE */}
      {isLoggedIn ? (
        <Profile setIsLoggedIn={setIsLoggedIn} />
      ) : (
        /* WELCOME PAGE */
        <div className="welcome-page">
          <div className="welcome-container">
            <FaUserCircle className="welcome-icon" />

            <h1>Welcome to Zofro Cafe</h1>

            <p>Sip the comfort with your personalized coffee experience.</p>

            <div className="welcome-buttons">
              {/* LOGIN BUTTON */}
              <button
                className="login-btn"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Login
              </button>

              {/* SIGNUP */}
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      {showLogin && <Login setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} />}
    </>
  );
};

export default Account;
