import { useEffect, useState } from "react";
import "./profile.css";
import { FaUserCircle, FaPen } from "react-icons/fa";
import { FaChevronRight, FaSignOutAlt } from "react-icons/fa";

const Profile = ({ setIsLoggedIn, email }) => {
  const menuItems = [
    "Orders",
    "My Address",
    "Zofro Pay",
    "Other Payment Modes",
    "Help Center",
  ];

  const [Uname, setUname] = useState("user");

  useEffect(() => {
    if (!email) return;

    fetch("http://localhost:3000/loginUname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          setUname(data.name);
          console.log("Username:", data.name);
        }
      })
      .catch((err) => console.log(err));
  }, [email]);
  
  return (
    <>
      <div className="profile-page">
        <div className="profile-container">
          <FaUserCircle className="profile-icon" />
          <h1>
            Hi, <span>{Uname}</span>
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
            <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
              Log Out
              <FaSignOutAlt className="logout-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
