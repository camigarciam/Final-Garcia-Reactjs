

import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: (item, quantity) => {},
  removeItem: (itemId) => {},
  clearCart: () => {},
  increaseQuantity: (itemId) => {},
  decreaseQuantity: (itemId) => {},
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya se agregó");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calculate the total quantity and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
