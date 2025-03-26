"use client";

import { createContext, PropsWithChildren, use, useState } from "react";
import type { Course, Cart } from "./types";

const useCreateCartStore = () => {
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

export type CartStore = ReturnType<typeof useCreateCartStore>;

const CartStoreContext = createContext<CartStore | null>(null);

export const CartStoreProvider = ({ children }: PropsWithChildren) => {
  const cartStore = useCreateCartStore();
  return (
    <CartStoreContext.Provider value={cartStore}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = (): CartStore => {
  const cart = use(CartStoreContext);
  if (!cart) {
    throw new Error("useCartStore must be used within a CartProvider");
  }
  return cart;
};
