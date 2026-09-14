import { useState } from "react";
import "./prodectCart-And-cart.css";
import coffee from '../assets/img1.png';

const Cart = () => {
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((s) => s + 1);
  };

  const decQty = () => {
    if (qty > 1) setQty((s) => s - 1);
  };

  const handleAddItem = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <>
      <div className="cart">
        <div className="items">
        <div className="con">
          <div className="img-con">
            <img src={coffee} alt="" />
          </div>
          <div className="text-con">
            <div className="name-fav">
              <h2>coffee</h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              quo ducimus dolorem alias commodi porro nostrum consequatur 
            </p>
            <div className="price-rate">
              <p>$ 99</p>
              <p className="rate">
                4.6{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </p>
            </div>
            <div className="but-con">
              <div className="qat-con">
                <button onClick={incQty}>+</button>
                <span>{qty}</span>
                <button onClick={decQty}>−</button>
              </div>
              <div className="but">
                <button onClick={handleAddItem}>
                  {added ? "✓ Removed" : "Remove Itam"}
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="order">
        <div className="order-con">
          <h2>Order Summary</h2>
          <p>Items: 1</p>
          <p>Total Price: $99</p>
          <button className="order-but">Place Order</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
