import React, { useState } from "react";
import Profile from "./Profile";
import "./Account.css";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../components/Footer";

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Profile setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="welcome-page">
          <div className="welcome-container">
            <FaUserCircle className="welcome-icon" />

            <h1>Welcome to Zofro Cafe</h1>

            <p>Sip the comfort with your personalized coffee experience.</p>

            <div className="welcome-buttons">
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>

              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Account;
