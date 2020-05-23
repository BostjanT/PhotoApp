import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, clearCart } = useContext(Context);
  const totalCost = 9.99 * cartItems.length;
  const displayCost = totalCost.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  const showCartItems = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed");
      setButtonText("Place Order");
      clearCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {showCartItems}
      <p className="total-cost">Total: {displayCost}</p>

      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={() => placeOrder()}>{buttonText}</button>
        </div>
      ) : (
        <p className="text-center">Your cart is currently empty</p>
      )}
    </main>
  );
}

export default Cart;
