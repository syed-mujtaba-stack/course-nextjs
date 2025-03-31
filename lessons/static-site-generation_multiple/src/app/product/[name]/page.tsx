import styles from "./page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const content = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/product" + `/${name}`
  );

  const details = await content.json();
  const { title, icon, description } = details;

  return (
    <div className={styles.root}>
      <aside className={styles.icon}>{icon}</aside>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
