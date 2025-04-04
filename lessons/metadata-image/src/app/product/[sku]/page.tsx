import { fetchProduct } from "@/lib/cms";
import styles from "./page.module.css";
import Link from "next/link";
import { BASE_URL } from "@/lib/BASE_URL";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sku: string }>;
}): Promise<Metadata> {
  const { sku } = await params;
  const { title, description } = await fetchProduct(sku);

  const imageDetails = {
    url: `${BASE_URL}/product/${sku}/metadata-image`,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title: title,
    description: description,
    openGraph: {
      title,
      description,
      siteName: "Boolean Art",
      images: [imageDetails],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "Boolean Art",
      images: [imageDetails],
    },
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
