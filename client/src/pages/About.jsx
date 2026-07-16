import React from "react";
import "./about.css";
import cafeImg from "../assets/about.png";
import coffeeBeans from "../assets/prodect.webp";
import cafeFront from "../assets/Broadsheet-1.jpg";
import mapImg from "../assets/map.png";
import developerImg from "../assets/developer.jpeg";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img src={cafeImg} alt="Coffee Service" />
      </div>

      <div className="about-service">
        <h1>About Our Service:</h1>

        <p>
          At Zofro Coffee, we take pride in delivering a warm and memorable
          experience with every visit. Our service is built on speed, quality,
          and genuine care—whether you're grabbing a quick espresso or relaxing
          with a handcrafted latte. Every cup is prepared with attention to
          detail, using carefully selected ingredients to ensure rich flavor and
          consistency.
        </p>

        <p>
          Behind the counter, our friendly and passionate staff bring energy and
          dedication to their craft, always ready to serve with a smile and make
          you feel at home. We believe great coffee is not just about taste, but
          about the people who make and serve it.
        </p>
      </div>

      <div className="product-section">
        <div className="product-image">
          <img src={coffeeBeans} alt="Coffee Beans" />
        </div>

        <div className="product-content">
          <h1>Product we use:</h1>

          <p>
            <strong>TGL Co. Breakfast Fusion Coffee Beans</strong>, carefully
            selected from trusted growers to ensure every cup delivers a rich
            aroma and full-bodied flavor.
          </p>

          <p>
            These premium beans are expertly roasted to highlight their natural
            depth, offering a smooth and perfectly balanced taste in every brew.
            From grinding to brewing, we maintain strict quality standards to
            preserve freshness and consistency.
          </p>

          <p>
            At Zofro Coffee, our choice of TGL Co. Breakfast Fusion reflects our
            commitment to serving only the finest ingredients, making every cup
            truly exceptional.
          </p>
        </div>
      </div>

      <div className="choose-section">
        <h1>Why you want to choose us:</h1>

        <p>
          At Zofro Coffee, every cup is crafted with care using premium beans,
          quality ingredients, and rich café-style preparation. Our cozy
          ambiance, warm hospitality, and passion for coffee create an
          experience that feels both relaxing and memorable.
        </p>

        <p>
          Whether you're stopping by for a quick espresso, enjoying time with
          friends, or working peacefully with your favorite brew, Zofro Coffee
          delivers comfort, consistency, and flavor in every sip.
        </p>
      </div>

      <div className="cafe-image">
        <img src={cafeFront} alt="Zofro Cafe" />
      </div>

      <div className="location-section">
        <div className="location-content">
          <h1>How To Reach Our Shop</h1>

          <p>
            Zofro Coffee Shop is located in a vibrant and historic section of
            downtown, positioned right in the heart of the city's café district.
            Surrounded by charming local stores and cultural landmarks, our café
            offers a warm and welcoming atmosphere.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps?q=8.177746, 77.252250",
                "_blank",
              )
            }
          >
            Open In Map
          </button>
        </div>

        <div className="map-image">
          <img src={mapImg} alt="Map" />
        </div>
      </div>

      <div className="developer-section">
        <h1>Developed by:</h1>

        <div className="developer-content">
          <img src={developerImg} alt="Developer" />

          <div className="developer-text">
            <p>
              Designed and developed by<span> Anie Jerson</span>, this website reflects a
              perfect blend of creativity, functionality,
              <br /> and modern design. With a keen eye for detail and a passion
              for building engaging user experiences
            </p>

            <p>
              Anie ensures every element—from layout to interaction—is crafted
              to deliver both style and performance.
              <br /> His dedication to clean design and smooth usability brings
              the Zofro Coffee brand to life online,
              <br /> making every visit seamless and enjoyable.
            </p>

            <div className="contact-content">
              <h3>Contact:</h3>

              <span>anie.jerson.25@gmail.com</span>
              <span>+91 8428139460</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
