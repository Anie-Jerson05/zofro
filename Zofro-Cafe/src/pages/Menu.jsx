import React, { useState } from "react";
import Favorite from "../components/Favorite";
import "./menu.css";

import {
  FaRegHeart,
  FaSearch,
  FaCoffee
} from "react-icons/fa";

const Menu = () => {

  const [activeButton, setActiveButton] = useState("");

  return (
    <div className="menu-page">

      {/* TOP MENU BAR */}
      <div className="menu-top">

        {/* FAVORITE */}
        <button
          className={
            activeButton === "favorite"
              ? "menu-btn active-menu-btn"
              : "menu-btn"
          }
          onClick={() => setActiveButton("favorite")}
        >
          <FaRegHeart />
        </button>

        {/* SEARCH */}
        <button
          className={
            activeButton === "search"
              ? "menu-btn active-menu-btn"
              : "menu-btn"
          }
          onClick={() => setActiveButton("search")}
        >
          <FaSearch />
        </button>

        {/* COFFEE */}
        <button
          className={
            activeButton === "coffee"
              ? "menu-btn active-menu-btn"
              : "menu-btn"
          }
          onClick={() => setActiveButton("coffee")}
        >
          <FaCoffee />
        </button>

      </div>

      {/* SEARCH PAGE */}
      {activeButton === "favorite" && (
        <Favorite />
      )}

    </div>
  );
};

export default Menu;