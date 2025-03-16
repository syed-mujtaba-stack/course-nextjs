import styles from "./Button.module.css";

export type ButtonProps = {
  children: React.ReactNode;
};

export function SubmitButton({ children }: ButtonProps) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}
