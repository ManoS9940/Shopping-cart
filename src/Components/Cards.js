import React from 'react'
import {FaStar} from "react-icons/fa"

function Cards({
    id,
    title,
    price,
    type,
    specialType,
    addToCart,
    addedToCart,
    removeFromCart
}) {
    let starClass="hide-type";
    let saleClass="hide-type";

    if(type==="special item" || type ==="popular item"){
       starClass="special-type";
    }

    if(specialType){
        saleClass="special-offer"
    }
    
  return (
    <article className="card">
      <span className={`${saleClass}`}>Sale</span>
      <div className="resolution">450 X 300</div>
      <div className="details">
        <h3>{title}</h3>
        <div>${price}.00</div>
        <div className={`${starClass}`}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      {addedToCart ? (
        <button onClick={() => removeFromCart(id)} className="card-btn">
          Remove From Cart
        </button>
      ) : (
        <button onClick={() => addToCart(id)} className="card-btn">
          Add to Cart
        </button>
      )}
    </article>
  )
}

export default Cards
