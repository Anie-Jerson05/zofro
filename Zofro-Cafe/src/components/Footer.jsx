import React from "react";
import "./footer.css";
import ZofroLogo from "../assets/Zofro-logo.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={ZofroLogo} alt="Zofro Logo" className="footer-logo" />
      </div>
      <div className="footer-center">
        <div className="footer-center-left">
          <h3>Responsibility</h3>
          <ul>
            <li>Diversity</li>
            <li>Community</li>
            <li>Ethical Sourcing</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div className="footer-center-center">
          <h3>Legal</h3>
          <ul>
            <li>Disclaimer</li>
            <li>Food Safety</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-center-right">
          <h3>Contact</h3>
          <ul>
            <li>Zofro cafe</li>
            <li>+918********0</li>
            <li>zofro@123gmail.com</li>
          </ul>
        </div>
        <div className="footer-center-bottom">
          <h3>Follow Us</h3>
          <ul>
            <li><img src={facebook} alt="logo" className="footer-center-bottom-logo"/></li>
            <li><img src={insta} alt="logo" className="footer-center-bottom-logo"/></li>
            <li><img src={x} alt="logo" className="footer-center-bottom-logo"/></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div></div>
        <p>
          © {new Date().getFullYear()} Zofro Coffee Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
