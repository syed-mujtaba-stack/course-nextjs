"use client";
import { useRef } from "react";
import styles from "./BigBox.module.css";

export const BigBox = ({
  value,
  backgroundColor,
}: {
  value: number;
  backgroundColor: string;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollMe = () => {
    rootRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={rootRef}
      onClick={scrollMe}
      className={styles.root}
      style={{ backgroundColor }}
    >
      {value}
    </div>
  );
};
