import React, { useState } from "react";
import "./customize.css";

import cupImg from "../assets/cup.png";

const Customize = () => {
  // COFFEE TYPE
  const [coffeeType, setCoffeeType] = useState("Espresso");

  // STRENGTH
  const [strength, setStrength] = useState("Regular");

  // SUGAR LEVEL
  const sugarLevels = ["No Sugar", "Less Sugar", "Normal", "Extra Sweet"];

  const [sugarIndex, setSugarIndex] = useState(0);

  // CUP SIZE
  const [cupSize, setCupSize] = useState("M");

  // USER NAME
  const [userName, setUserName] = useState("");

  //CUP NAME
  const [cupName, setCupName] = useState("");

  const [added, setAdded] = useState(false);

  // ADD TO CART
  const handleCart = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);

    //     alert(`
    // Coffee : ${coffeeType}
    // Strength : ${strength}
    // Sugar : ${sugarLevels[sugarIndex]}
    // Cup Size : ${cupSize}
    // Name : ${userName}
    //     `);

    setCoffeeType("Espresso");
    setStrength("Regular");
    setSugarIndex(0);
    setCupSize("M");
    setUserName("");
    setCupName("");
  };

  return (
    <div className="customize-page">
      {/* LEFT SIDE */}
      <div className="custom-left">
        {/* TITLE */}
        <h1 className="title">Customize Your Coffee</h1>

        <p className="subtitle">“Make it your way”</p>

        {/* COFFEE TYPE */}
        <div className="section">
          <h2>Coffee Type Selection</h2>

          <div className="button-group">
            <button
              className={coffeeType === "Espresso" ? "active-btn" : ""}
              onClick={() => setCoffeeType("Espresso")}
            >
              Espresso
            </button>

            <button
              className={coffeeType === "Americano" ? "active-btn" : ""}
              onClick={() => setCoffeeType("Americano")}
            >
              Americano
            </button>

            <button
              className={coffeeType === "Latte" ? "active-btn" : ""}
              onClick={() => setCoffeeType("Latte")}
            >
              Latte
            </button>
          </div>
        </div>

        {/* STRENGTH */}
        <div className="section">
          <h2>Strength Level</h2>

          <div className="button-group">
            <button
              className={strength === "Mild" ? "active-btn" : ""}
              onClick={() => setStrength("Mild")}
            >
              Mild
            </button>

            <button
              className={strength === "Regular" ? "active-btn" : ""}
              onClick={() => setStrength("Regular")}
            >
              Regular
            </button>

            <button
              className={strength === "Strong" ? "active-btn" : ""}
              onClick={() => setStrength("Strong")}
            >
              Strong
            </button>

            <button
              className={strength === "Extra Strong" ? "active-btn" : ""}
              onClick={() => setStrength("Extra Strong")}
            >
              Extra Strong
            </button>
          </div>
        </div>

        {/* SUGAR */}
        <div className="section">
          <h2>Sugar Level</h2>

          <div className="sugar-container">
            {/* PLUS */}
            <button
              className="circle-btn"
              onClick={() => {
                if (sugarIndex < 3) {
                  setSugarIndex(sugarIndex + 1);
                }
              }}
            >
              +
            </button>

            {/* MINUS */}
            <button
              className="circle-btn"
              onClick={() => {
                if (sugarIndex > 0) {
                  setSugarIndex(sugarIndex - 1);
                }
              }}
            >
              −
            </button>

            {/* DISPLAY */}
            <div className="sugar-display">{sugarLevels[sugarIndex]}</div>
          </div>
        </div>

        {/* CUP SIZE */}
        <div className="section">
          <h2>Cup Size</h2>

          <div className="button-group">
            <button
              className={cupSize === "S" ? "active-btn" : ""}
              onClick={() => setCupSize("S")}
            >
              S
            </button>

            <button
              className={cupSize === "M" ? "active-btn" : ""}
              onClick={() => setCupSize("M")}
            >
              M
            </button>

            <button
              className={cupSize === "L" ? "active-btn" : ""}
              onClick={() => setCupSize("L")}
            >
              L
            </button>
          </div>
        </div>

        {/* NAME */}
        <div className="section">
          <h2>Write a name or message</h2>

          <div className="name-box">
            <input
              type="text"
              maxLength={20}
              placeholder="Type your name here....."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <p className="char-count">{userName.length}/20</p>
            <button onClick={() => setCupName(userName)}>Enter</button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="custom-right">
        <div className="cup-container">
          <img src={cupImg} alt="" className="cup-image" />

          <h2 className="cup-name">{cupName}</h2>
        </div>
        <button className="cart-btn" onClick={handleCart}>
          {added ? "✓ Added" : "Add Item"}
        </button>
      </div>
    </div>
  );
};

export default Customize;
