"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./DashboardMenu.module.css";

export const DashboardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.menu}>
      <button onClick={() => setIsOpen(!isOpen)}>
        Dashboard Menu {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && (
        <ul>
          <li>
            <Link href="/dashboard">Home 🏠</Link>
          </li>
          <li>
            <Link href="/dashboard/subscriptions">Subscriptions 🚀</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
