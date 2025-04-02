import styles from "./SimpleContent.module.css";

export type SimpleContentProps = {
  title: string;
  icon: string;
  description: string;
};

export function SimpleContent(product: SimpleContentProps) {
  const { title, icon, description } = product;

  return (
    <div className={styles.root}>
      <aside className={styles.icon}>{icon}</aside>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
