import { fetchProductList } from "./api/cms";
import styles from "./page.module.css";

export default async function Page() {
  const products = await fetchProductList();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Pick a Product 🛍️</h1>
      {products.map((product) => (
        <ExampleLink key={product.sku} href={`/product/${product.sku}`} icon={product.icon}>
          {product.title}
        </ExampleLink>
      ))}
    </div>
  );
}

import Link from "next/link";
const ExampleLink = (props: React.PropsWithChildren<{ href: string, icon: string }>) => {
  return (
    <div>
      {props.icon}{" "}
      <Link className={styles.link} href={props.href}>
        {props.children}
      </Link>
    </div>
  );
};
