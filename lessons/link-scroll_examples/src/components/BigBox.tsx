import styles from './BigBox.module.css';

export const BigBox = ({ value }: { value: number }) => (
  <div className={styles.root}>{value}</div>
);
