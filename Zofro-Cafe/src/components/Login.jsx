import React from "react";
import "./login.css";

import logo from "../assets/zofro-logo.png";
import sideLogo from "../assets/zofro-logo.png";
import beans from "../assets/coffee-beans.png";

const Login = ({ setIsLoggedIn, setShowLogin }) => {

  const loginHandler = () => {
    (setIsLoggedIn(true), setShowLogin(false));
  };

  return (
    <div className="login-page">
      {/* LOGIN CARD */}
      <div className="login-card">
        <img src={beans} alt="Coffee Beans" className="beans" />

        <p className="welcome-text">
          <span className="big-text">Welcome Back,</span>

          <span className="small-text">
            Please login to <br />
            your account
          </span>
        </p>

        {/* INPUTS */}
        <input type="text" placeholder="Username" />

        <input type="password" placeholder="Password" />

        {/* FORGOT */}
        <p className="forget">Forget password</p>

        {/* BUTTON */}
        <button className="glow-btn" onClick={() => loginHandler()}>
          Login
        </button>

        <button className='back-btn' onClick={() => setShowLogin(false)}>
          Back
        </button>
        
      </div>
    </div>
  );
};

export default Login;
