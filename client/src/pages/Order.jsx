import React, { useState } from "react";
import "./order.css";

import emptyGirl from "../assets/empty-girl.png";
import logo from "../assets/Zofro-logo.png";

const Order = () => {
  const [activeTab, setActiveTab] = useState("pay");

  return (
    <div className="order-page">
      {/* TOP SECTION */}
      <div className="top-bar">
        <button
          className={activeTab === "pay" ? "active-btn" : ""}
          onClick={() => setActiveTab("pay")}
        >
          Pay
        </button>

        <button
          className={activeTab === "zofro" ? "active-btn2" : ""}
          onClick={() => setActiveTab("zofro")}
        >
          Zofro Pay
        </button>
      </div>

      {/* PAY TAB */}
      {activeTab === "pay" && (
        <div className="empty-cart">
          <h1>You have a empty cart</h1>

          <img src={emptyGirl} alt="Empty Cart" />
        </div>
      )}

      {/* ZOFRO PAY TAB */}
      {activeTab === "zofro" && (
        <div className="payment-section">
          {/* CARD */}
          <div className="zofro-card">
            <div className="card-top">
              <div className="container">
                <img src={logo} alt="logo" className="card-top-logo" />

                <h1>Zofro Pay</h1>
              </div>

              <p>4000 XXXX XXXX XX06</p>
            </div>

            <div className="card-line"></div>

            <div className="card-bottom">
              <h2>Amount</h2>

              <span>$ 0.00</span>
            </div>
          </div>

          {/* PAYMENT METHODS */}
          <div className="payment-methods">
            <button className="method active">Card</button>

            <button className="method">EPS</button>

            <button className="method">Giropay</button>
          </div>

          {/* FORM */}
          <div className="payment-form">
            <input type="text" placeholder="1234 1234 1234 1234" />

            <div className="input-row">
              <input type="text" placeholder="MM / YY" />

              <input type="text" placeholder="CVC" />
            </div>

            <div className="input-row">
              <select>
                <option>United States</option>
                <option>India</option>
                <option>Canada</option>
              </select>

              <input type="text" placeholder="Postal Code" />
            </div>

            <button className="pay-btn">Pay Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
