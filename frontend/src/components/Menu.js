import React, { useEffect, useState } from "react";
import { getMenu } from "../api";

function Menu({ cart, setCart }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const res = await getMenu();
      setMenu(res.data);
    } catch (err) {
      console.error("Error fetching menu", err);
    }
  };

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);

    if (existing) {
      const updated = cart.map(c =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="menu">
      <h3>Menu</h3>

      <div className="menu-grid">
        {menu.map(item => (
          <div className="card" key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <span className="category">{item.category}</span>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;