"use client";

import Link from "next/link";
import { useCartStore } from "../CartStoreContext";

export const Header = () => {
  const cartStore = useCartStore();
  const coursesInCart = cartStore.getCoursesInCart();

  return (
    <header>
      <nav>
        <Link href="/courses">Courses Page</Link>
        <Link href="/checkout">Checkout Page</Link>
      </nav>

      <div>
        Courses In Cart: <span>{coursesInCart.length}</span>
      </div>
    </header>
  );
};
