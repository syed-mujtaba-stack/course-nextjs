"use client";

import styles from "./page.module.css";
import { useCartStore } from "@/lib/CartStoreContext";

export default function Page() {
  const cartStore = useCartStore();
  const coursesInCart = cartStore.getCoursesInCart();

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Checkout 🛍️</h1>
      {coursesInCart.length === 0 ? (
        <h2 className={styles.subheading}>Your cart is empty 📭</h2>
      ) : (
        <div className={styles.cart}>
          <h2 className={styles.subheading}>Courses in Cart</h2>
          <ul className={styles.list}>
            {coursesInCart.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))}
          </ul>
          <button
            className={styles.secondaryButton}
            onClick={() => cartStore.clearCart()}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
