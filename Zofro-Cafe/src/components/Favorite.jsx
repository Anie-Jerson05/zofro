import React from 'react'
import Favoriteimg from "../assets/Favorite-img.png";
import "./favorite.css";

const Favorite = () => {
  return (
    <div className="favorite-page">
      <h2>You have not added <br></br>any favorite items</h2>
      <img src={Favoriteimg} alt="Favorite"  className='favorite-img'/>
      <p>Please select your favourite items from the menu</p>
    </div>
  )
}

export default Favorite