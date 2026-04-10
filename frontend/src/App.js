import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Menu cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;