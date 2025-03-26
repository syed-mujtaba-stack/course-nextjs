"use client";

import { createContext, use, useState } from "react";
import type { Course, Cart } from "./types";

const useCartStore = () => {
  const [cart, setCart] = useState<Cart>({
    courses: [],
  });

  return {
    cart,
    addCourse: (toAdd: Course) => {
      setCart((prevCart) => ({
        courses: [...prevCart.courses, toAdd],
      }));
    },
    removeCourse: (toRemove: Course) => {
      setCart((prevCart) => ({
        ...prevCart,
        courses: prevCart.courses.filter((course) => course.id !== toRemove.id),
      }));
    },
    clearCart: () => {
      setCart({
        courses: [],
      });
    },
  };
};

export const CartContext = createContext<ReturnType<
  typeof useCartStore
> | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useCartStore();
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const cart = use(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};
