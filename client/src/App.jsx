import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Profile from "./pages/Account";
import Order from "./pages/Order";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

  const[cartItams,setCartItams] = useState([]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu  cartItams = {cartItams} setCartItams = {setCartItams}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Order cartItams = {cartItams} setCartItams = {setCartItams}/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
