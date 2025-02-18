import styles from "./BigBox.module.css";

export const BigBox = ({
  value,
  backgroundColor,
}: {
  value: number;
  backgroundColor: string;
}) => (
  <div className={styles.root} style={{ backgroundColor }}>
    {value}
  </div>
);
