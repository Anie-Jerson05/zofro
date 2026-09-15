import { useState } from "react";
import Favorite from "./Favorite";
import Coustomize from "./Customize";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import "./menuBar.css";

import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CiCoffeeCup } from "react-icons/ci";

const MenuBar = ({cartItams,setCartItams}) => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="menu-page">
      {/* TOP MENU BAR */}
      <div className="menu-top">
        {activeButton === "search" ? (
          <SearchBar setActiveButton={setActiveButton}/>
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
      {activeButton === "favorite" && <Favorite />}
      {activeButton === "coffee" && <Coustomize />}
      {activeButton === "search" && <MenuItems cartItams = {cartItams} setCartItams = {setCartItams}/>}
      {activeButton === null && <MenuItems cartItams = {cartItams} setCartItams = {setCartItams}/>}
    </div>
  );
};

export default MenuBar;
