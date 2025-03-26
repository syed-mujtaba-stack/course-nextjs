"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { useCartStore } from "../CartStoreContext";

export const Header = () => {
  const cartStore = useCartStore();
  const coursesInCart = cartStore.getCoursesInCart();

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/courses">
          Courses Page
        </Link>
        <Link className={styles.link} href="/checkout">
          Checkout Page
        </Link>
      </nav>

      <div>
        <span className={styles.cartMessage}>Courses In Cart:</span>
        <span className={styles.cartCount}>{coursesInCart.length}</span>
      </div>
    </header>
  );
};
