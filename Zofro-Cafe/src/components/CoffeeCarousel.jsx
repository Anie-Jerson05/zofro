import { useState, useRef } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const items = [
  {
    id: 1,
    name: "Stone Ground",
    description:
      "We leave the modern cafe for something ancient and tactile. This image features Turkish Coffee, brewed in a small, hammered copper cezve. It is served in a traditional, highly decorative ceramic fincan cup.",
    price: "$29.31",
    image: <img src={img1} alt="Stone Ground" style={{ width: 210, height: 230 , objectFit: "cover", borderRadius: 24 }}  />,
    bg: "#D4B896",
  },
  {
    id: 2,
    name: "The Arctic Obsidian",
    description:
      "This image represents the modern, refreshing side of coffee. It features Nitro Cold Brew, served over ice in a tall, clear collins glass. The key visual is the dramatic cascading reverse settle effect.",
    price: "$10.09",
    image: <img src={img2} alt="The Arctic Obsidian" style={{ width: 210, height: 230 , objectFit: "cover", borderRadius: 24 }} />,
    bg: "#B8C9D4",
  },
  {
    id: 3,
    name: "The Velvet Cloud",
    description:
      "To create a striking personal contrast to the black coffee we move to texture and froth. This image features a cappuccino in a deep blue latte art café. The lens is an exclusive viewport into the atmosphere.",
    price: "$12.05",
    image: <img src={img3} alt="The Velvet Cloud" style={{ width: 210, height: 230 , objectFit: "contain", borderRadius: 24 }} />,
    bg: "#F0E6D8",
  },
  {
    id: 4,
    name: "Empire Affogato",
    description:
      "Following in the footsteps of the café, a rich indulgent affogato, featuring melting cream textures, viscous shots of espresso poured dramatically over vanilla gelato.",
    price: "$17.01",
    image: <img src={img4} alt="Empire Affogato" style={{ width: 210, height: 230 , objectFit: "cover", borderRadius: 24 }} />,
    bg: "#D4C4A8",
  },
  {
    id: 5,
    name: "Caramel Signature",
    description:
      "Velvety espresso with house-made caramel drizzle layered over steamed whole milk. A timeless classic with a refined twist for those who appreciate depth in every sip.",
    price: "$9.50",
    image: <img src={img5} alt="Caramel Signature" style={{ width: 210, height: 230 , objectFit: "cover", borderRadius: 24 }} />,
    bg: "#D4A882",
  },
];

function ProductImage({ item }) {
  return (
    <div
      style={{
        width: 220,
        height: 240,
        borderRadius: 24,
        background: item.bg,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 56,
        userSelect: "none",
      }}
    >
      {item.image}
    </div>
  );
}

function CarouselCard({ item, onAdd, added }) {
  return (
    <div
      style={{
        background: "#F0E6D8",
        borderRadius: 40,
        padding: "28px 32px",
        display: "flex",
        alignItems: "center",
        gap: 24,
        width: 1300,
        height: 300,
        flexShrink: 0,
        boxSizing: "border-box",
        transition: "transform 0.2s",
        cursor: "default",
        // objectFit: "cover",
      }}
      // onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      // onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <ProductImage item={item} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: 'Playfair Display',
            paddingBottom: 20,
            fontSize: 30,
            fontWeight: 600,
            color: "#2C1A0E",
            margin: "0 0 8px 0",
            letterSpacing: "-0.01em",
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.6,
            color: "#5C4033",
            margin: "0 0 16px 0",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span
            style={{
              fontFamily: "'Lora', serif",
              fontSize: 24,
              paddingRight: 20,
              fontWeight: 600,
              color: "#2C1A0E",
            }}
          >
            {item.price}
          </span>
          <button
            onClick={() => onAdd(item)}
            style={{
              background: added ? "#6B3F23" : "#4A2511",
              color: "#F5EDD6",
              border: "none",
              borderRadius: 30,
              padding: "10px 26px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              fontWeight: 500,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.1s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6B3F23")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = added ? "#6B3F23" : "#4A2511")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.96)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {added ? "✓ Added" : "Add Item"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CoffeeCarousel() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const CARD_WIDTH = 1300 + 20; // card + gap
  const total = items.length;

  const goTo = (idx) => {
    const next = Math.max(0, Math.min(idx, total - 1));
    setCurrent(next);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: next * CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  const handleAdd = (item) => {
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setCartCount((c) => c + 1);
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          // background: "#C9A882",
          paddingTop: 200,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
          position: "relative",
        }}
      >
       
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7A4E2D",
              margin: "0 0 8px 0",
              paddingTop: "30px"
            }}
          >
            Today's Selection
          </p>
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontSize: 36,
              fontWeight: 700,
              color: "#2C1A0E",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Our Specials
          </h1>
        </div>

        {/* Carousel track */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1300,
          }}
        >
          {/* Fade edges */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 60,
              // background:
              //   "linear-gradient(to right, #C9A882, transparent)",
              zIndex: 2,
              pointerEvents: "none",
              borderRadius: "0 0 0 0",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 60,
              // background:
              //   "linear-gradient(to left, #C9A882, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: 20,
              overflowX: "hidden",
              padding: "12px 80px",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{ scrollSnapAlign: "center", flexShrink: 0 }}
              >
                <CarouselCard
                  item={item}
                  onAdd={handleAdd}
                  added={!!addedItems[item.id]}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 28,
          }}
        >
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1.5px solid #7A4E2D",
              background: "transparent",
              color: "#2C1A0E",
              fontSize: 18,
              cursor: current === 0 ? "default" : "pointer",
              opacity: current === 0 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              if (current !== 0) e.currentTarget.style.background = "#B8916A";
            }}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            ‹
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {items.map((_, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 20 : 7,
                  height: 7,
                  borderRadius: 4,
                  background: i === current ? "#2C1A0E" : "#A07850",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === total - 1}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1.5px solid #7A4E2D",
              background: "transparent",
              color: "#2C1A0E",
              fontSize: 18,
              cursor: current === total - 1 ? "default" : "pointer",
              opacity: current === total - 1 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              if (current !== total - 1)
                e.currentTarget.style.background = "#B8916A";
            }}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}