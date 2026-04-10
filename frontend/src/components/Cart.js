import React from "react";
import { placeOrder } from "../api";

function Cart({ cart, setCart }) {

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = async () => {
    try {
      await placeOrder({ items: cart, total });

      alert("✅ Order placed successfully!");
      setCart([]);
    } catch (err) {
      alert("❌ Failed to place order");
    }
  };

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.length === 0 && <p>No items added</p>}

      {cart.map((item, i) => (
        <div key={i} className="cart-item">
          <div>
            {item.name} x {item.quantity}
          </div>
          <button onClick={() => removeItem(i)}>❌</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h4>Total: ₹{total}</h4>
          <button className="order-btn" onClick={handleOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;