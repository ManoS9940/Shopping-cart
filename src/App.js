import React, {useState} from "react";
import data from "./data"
import Header from "./Components/Header";
import CardWrapper from "./Components/CardWrapper";
import {IoMdArrowDropdown} from "react-icons/io";
import { BsCartFill } from "react-icons/bs";

 

let cards = data;

function App() {
  
    let [cartCount, setCartCount] = useState(0)

    const addToCart = (id) => {
      setCartCount(() => cartCount + 1);
      
      cards = data.map((item) => {
        if (item.id === id) {
          item.addedToCart = true;
          return item;
        }
    
        return item;
      });
  
      console.log("Cards:", cards);
    };
    const removeFromCart = (id) => {
      setCartCount(() => cartCount - 1);
      cards = data.map((item) => {
        if (item.id === id && item.addedToCart) {
          item.addedToCart = false;
          return item;
        }
    
        return item;
      });
  
      console.log("Cards:", cards);
    };
   
  return (
      <>
       <nav className="navbar">
          <div className="navbar-content">
              <div className="navbar-title">
                  Start Bootstrap
              </div>
              <ul className="nav-links">
                  <li>Home</li>
                  <li>About</li>
                  <li>Shop
                      <IoMdArrowDropdown />
                  </li>
              </ul>
          </div>
          <div className="cart">
              <BsCartFill/>Cart<span className="count">{cartCount}</span>
          </div>
       </nav>
      <Header />
      <CardWrapper cards={cards} addToCart={addToCart} removeFromCart={removeFromCart} />
      
      </>
  );
}

export default App;
