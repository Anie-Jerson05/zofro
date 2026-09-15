import React, { useState } from "react";
import MenuBar from "../components/MenuBar";

import "./menu.css";


const Menu = ({cartItams, setCartItams}) => {
  return (
    <div className="menu">
      <MenuBar cartItams = {cartItams} setCartItams = {setCartItams}/>
    </div>
  );
};

export default Menu;
