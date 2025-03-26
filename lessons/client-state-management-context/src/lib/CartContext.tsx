"use client";

import { createContext, use, useState } from "react";
import type { Course, Cart } from "./types";

const useCartStoreCreator = () => {
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

export type CartStore = ReturnType<typeof useCartStoreCreator>;

const CartContext = createContext<CartStore | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useCartStoreCreator();
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCartStore = (): CartStore => {
  const cart = use(CartContext);
  if (!cart) {
    throw new Error("useCartStore must be used within a CartProvider");
  }
  return cart;
};
