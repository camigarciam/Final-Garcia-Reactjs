

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, totalQuantity, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // data del carrito al checkout
    navigate("/checkout", { state: { cart } });
  };

  if (totalQuantity === 0) {
    return (
      <div className="cart-container">
        <h1>No hay items en el carrito</h1>
        <div className="cart-buttons">
          <Link to="/" className="Option">
            Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((p) => (
          <div key={p.id} className="cart-item">
            <Item {...p} />
            <div className="cart-quantity">
              <p>Cantidad: {p.quantity}</p>
              <button className="cart-button" onClick={() => increaseQuantity(p.id)}>+</button>
              <button className="cart-button" onClick={() => decreaseQuantity(p.id)} disabled={p.quantity <= 1}>-</button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="cart-total">Total ${total.toFixed(2)}</h3>
      <div className="cart-buttons">
        <button onClick={() => clearCart()} className="cart-button">
          Limpiar Carrito
        </button>
        <button onClick={handleCheckout} className="cart-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

