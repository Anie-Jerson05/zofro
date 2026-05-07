import React from "react";
import Footer from "../components/Footer";
import "./profile.css";
import { FaUserCircle, FaPen } from "react-icons/fa";
import { FaChevronRight, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const menuItems = [
    "Orders",
    "My Address",
    "Zofro Pay",
    "Other Payment Modes",
    "Help Center",
  ];

  return (
    <>
      <div className="profile-page">
        <div className="profile-container">
          <FaUserCircle className="profile-icon" />
          <h1>
            Hi, <span>username</span>
          </h1>

          <button className="edit-btn">
            <FaPen className="edit-icon" />
            Edit
          </button>
        </div>
        <div className="settings-page">
          <div className="settings-container">
            {menuItems.map((item, index) => (
              <div className="settings-item" key={index}>
                <span>{item}</span>
                <FaChevronRight className="arrow-icon" />
              </div>
            ))}
          </div>

          <div className="logout-section">
            <button className="logout-btn">
              Log Out
              <FaSignOutAlt className="logout-icon" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
