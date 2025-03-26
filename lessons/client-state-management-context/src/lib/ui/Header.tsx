"use client";

import { useCartStore } from "../CartStoreContext";

export const Header = () => {
  const cartStore = useCartStore();
  const coursesInCart = cartStore.getCoursesInCart();

  return (
    <header>
      <nav>
        <a href="/courses">Courses Page</a>
        <a href="/checkout">Checkout Page</a>
      </nav>

      <div>
        Courses In Cart: <span>{coursesInCart.length}</span>
      </div>
    </header>
  );
};
