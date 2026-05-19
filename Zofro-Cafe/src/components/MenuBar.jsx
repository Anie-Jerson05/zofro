import React, { useState } from "react";
import Favorite from "./Favorite";
import "./menuBar.css";

import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CiCoffeeCup } from "react-icons/ci";

const MenuBar = () => {
  const [activeButton, setActiveButton] = useState("");

  return (
    <div className="menu-page">
      {/* TOP MENU BAR */}
      <div className="menu-top">
        {activeButton === "search" ? (
          <div className="search-container">
            <input type="text" placeholder="Search coffee..." />

            <button
              className="search-btn"
              onClick={() => setActiveButton(null)}
            >
              Search
            </button>
          </div>
        ) : (
          <>
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
              className="menu-btn"
              onClick={() => setActiveButton("search")}
            >
              <IoSearch />
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
              <CiCoffeeCup />
            </button>
          </>
        )}
      </div>
      {/* SEARCH PAGE */}
      {activeButton === "favorite" && <Favorite />}
    </div>
  );
};

export default MenuBar;
