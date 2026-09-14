import { useState } from "react";
import "./login.css";
import axios from "axios";
import beans from "../assets/coffee-beans.png";

const Login = ({ setIsLoggedIn, setShowLogin, setUserEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(import.meta.env.VITE_APP_API_URL+"/login", {
        email,
        password,
      });
      console.log(result.data);
      if (result.data === "Success") {
        setError("");
        setIsLoggedIn(true);
        setShowLogin(false);
        setUserEmail(email);
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-page">
        {/* LOGIN CARD */}
        <div className="login-card">
          <img src={beans} alt="Coffee Beans" className="beans" />

          <p className="welcome-text">
            <span className="big-text">Welcome Back,</span>

            <span className="small-text">Please login to your account</span>
          </p>

          {/* INPUTS */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <label className="errorMsg">{error}</label>}
          {/* FORGOT */}
          <p className="forget">Forget password</p>

          {/* BUTTON */}
          <button className="glow-btn" type="submit">
            Login
          </button>

          <button
            className="back-btn"
            type="button"
            onClick={() => setShowLogin(false)}
          >
            Back
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
