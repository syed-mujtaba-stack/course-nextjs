"use client";

import type { Course } from "./types";
import { createContext, PropsWithChildren, use } from "react";
import { proxy, useSnapshot } from "valtio";
import { proxyMap } from 'valtio/utils'

const useCreateCartStore = () => {
  const state = proxy({
    courses: proxyMap<string, Course>(),
  });

  /**
   * Features to return:
   * - array of courses in cart
   * - ability to efficiently see if a course is in the cart
   * - actions: add, remove, clear
   */
  return {
    useCoursesInCartArray: () => {
      const snapshot = useSnapshot(state);
      return [...snapshot.courses.values()];
    },
    useCoursesInCartMap: () => {
      const snapshot = useSnapshot(state);
      return snapshot.courses;
    },
    actions: {
      addCourse: (toAdd: Course) => {
        state.courses.set(toAdd.id, toAdd);
      },
      removeCourse: (toRemove: Course) => {
        state.courses.delete(toRemove.id);
      },
      clearCart: () => {
        state.courses.clear();
      },
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
