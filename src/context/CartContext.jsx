/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  // Add Product to Cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Increase Quantity
  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
    setDiscount(0);
  };

  // =========================
  // CALCULATIONS
  // =========================

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.05;

  const safeDiscount = Number(discount) || 0;

  const total = subtotal + gst - safeDiscount;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        discount,
        setDiscount,

        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,

        subtotal,
        gst,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;