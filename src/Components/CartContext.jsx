
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (medicine, unit = "piece", quantity = 1) => {
    setCart((prev) => {
      const updated = { ...prev };
      const pharmacy = medicine.pharmacy;

      if (!updated[pharmacy]) updated[pharmacy] = [];

      // চেক করো একই medicine + same unit আগেই আছে কিনা
      const existing = updated[pharmacy].find(
        (i) => i.id === medicine.id && i.unit === unit
      );

      if (existing) {
        existing.quantity += quantity;
      } else {
        updated[pharmacy].push({
          ...medicine,
          unit,
          quantity,
        });
      }

      console.log("🛒 Updated Cart:", updated);
      return updated;
    });
  };

  const removeFromCart = (pharmacy, id) => {
    setCart((prev) => {
      const updated = { ...prev };
      updated[pharmacy] = updated[pharmacy].filter((i) => i.id !== id);
      if (updated[pharmacy].length === 0) delete updated[pharmacy];
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
