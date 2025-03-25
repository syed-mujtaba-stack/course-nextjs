"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close  ▲" : "Open ▼"}
      </button>

      {isOpen && (
        <ul>
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/subscriptions">Subscriptions</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
