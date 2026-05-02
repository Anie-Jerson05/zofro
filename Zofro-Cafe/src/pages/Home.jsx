import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import coffee from "../assets/coffee.png";
import ambassitor from "../assets/ambassitor.png";
import centerBg from "../assets/centerBg.png";
import CoffeeCarousel from "../components/CoffeeCarousel";
import SplitText from "../components/SplitText";
import ShinyText from "../components/ShinyText";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <SplitText tag="p" text="A ROSTED" />
            <br></br>
            <SplitText tag="h1" text="Coffee" />

            {/* <p>A ROSTED</p>
            <h1>Coffee</h1> */}
          </div>

          <img src={coffee} alt="coffee" className="hero-image" />
        </div>

        <div className="hero-right">
          <ShinyText
            text="Sip the comfort."
            color="#824822"
            shineColor="#d87432"
            spread={120}
            speed={4}
            delay={3}
          />

          {/* <p>
            “Sip the <br></br> comfort.”
          </p> */}
        </div>
      </section>

      <CoffeeCarousel />

      <center>
        <img src={ambassitor} alt="ambassitor" className="ambassitor-image" />
        <section
          className="marion"
          style={{ backgroundImage: `url(${centerBg})`  }}
        >
          <div className="marion-overlay"></div>
          <div className="marion-content">
            {/* <img src={centerBg} alt="center background" className="centerBg" /> */}
            <h1>Marion Cotillard: </h1>
            <h3>The Face of Modern Elegance</h3>
            <p>
              Marion Cotillard brings an unparalleled sense of French
              sophistication and global prestige to Zofro Café, effortlessly
              bridging the gap between high-fashion elegance and the inviting
              warmth of your brand. As an Academy Award winner and a
              long-standing icon for luxury houses like Chanel, her presence
              elevates the café’s identity, suggesting a premium experience
              defined by quality and timeless style. By showcasing her in a
              modern sleeveless dress with a genuine smile, the promotion
              positions Zofro Café as the ultimate destination for "French chic"
              living, where every cup of coffee is served with the same grace
              and authenticity that has made Cotillard a world-renowned legend.
            </p>
            <p>
              The "Zofro Café" Promotion In the visual we’ve developed, Marion
              captures the perfect "lifestyle" endorsement for your shop. Here’s
              how she is promoting it: The Look: Wearing a modern sleeveless
              black dress, she embodies a contemporary, high-end professional
              taking a moment to relax. The Vibe: Her warm, genuine smile
              suggests that Zofro Café isn't just a place for coffee, but a
              place for happiness and connection. The Brand: By holding a
              branded cup and sitting in a space with the "Since 2023" signage,
              she validates the history and premium nature of your
              establishment. Promotional Concept: "Zofro Café: Where Parisian
              Elegance Meets Your Morning Brew."
            </p>
          </div>
        </section>
      </center>
      <Footer />
    </div>
  );
};

export default Home;
