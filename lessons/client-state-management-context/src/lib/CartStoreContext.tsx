"use client";

import type { Course, Cart } from "./types";
import { createContext, PropsWithChildren, use, useState } from "react";

const useCreateCartStore = () => {
  const [cart, setCart] = useState<Cart>({
    courses: new Map(),
  });

  return {
    getCoursesInCart: () => {
      return [...cart.courses.values()];
    },
    isCourseInCart: (course: Course) => {
      return cart.courses.has(course.id);
    },
    addCourse: (toAdd: Course) => {
      setCart((prevCart) => ({
        courses: new Map([...prevCart.courses, [toAdd.id, toAdd]]),
      }));
    },
    removeCourse: (toRemove: Course) => {
      setCart((prevCart) => ({
        courses: new Map(
          [...prevCart.courses].filter(([id]) => id !== toRemove.id)
        ),
      }));
    },
    clearCart: () => {
      setCart({
        courses: new Map(),
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
  const cartStore = use(CartStoreContext);
  if (!cartStore) {
    throw new Error("useCartStore must be used within a CartStoreProvider");
  }
  return cartStore;
};
