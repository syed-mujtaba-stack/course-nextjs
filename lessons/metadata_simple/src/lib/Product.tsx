import styles from "./Product.module.css";

export type ProductProps = {
  title: string;
  icon: string;
  description: string;
};

export function Product(product: ProductProps) {
  const { title, icon, description } = product;

  return (
    <div className={styles.root}>
      <aside className={styles.icon}>{icon}</aside>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
