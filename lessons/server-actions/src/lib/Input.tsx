import styles from "./Input.module.css";
import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  type?: HTMLInputTypeAttribute | undefined;
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ type, value, onChange }: InputProps) => {
  const onChangeNative = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeNative}
      className={styles.input}
    />
  );
};
