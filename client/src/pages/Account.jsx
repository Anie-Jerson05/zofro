import React, { useState } from "react";
import Profile from "./Profile";
import Login from "../components/Login";
import SignUp from "../components/Signup";
import "./Account.css";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../components/Footer";

const Account = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  

  return (
    <>
      {/* PROFILE */}
      {isLoggedIn ? (
        <Profile setIsLoggedIn={setIsLoggedIn} 
        email={userEmail} 
        />
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
              <button
                className="signup-btn"
                onClick={() => {
                  setShowSignUp(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      {showLogin && <Login setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} setUserEmail={setUserEmail} />}
      {showSignUp && <SignUp setIsLoggedIn={setIsLoggedIn} setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} setUserEmail={setUserEmail} />}
    </>
  );
};

export default Account;
