// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  const handleAdd = (quantity) => {
    setCartItems(prevItems => prevItems + quantity);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAdd }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
