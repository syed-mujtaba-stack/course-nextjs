import { fetchProduct } from "@/app/api/cms";
import styles from "./page.module.css";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const { title, description } = await fetchProduct(sku);

  return {
    title: title,
    description: description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const { title, icon, description, benefits } = await fetchProduct(sku);

  return (
    <div className={styles.root}>
      <aside className={styles.icon}>{icon}</aside>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.benefits}>{benefits}</p>

      <Link className={styles.link} href="/">
        ⬅️ Back to Products
      </Link>
    </div>
  );
}
