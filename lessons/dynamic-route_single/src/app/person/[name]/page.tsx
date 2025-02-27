export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <div>Hi {formatName(name)}! 👋</div>;
}

/**
 * - replace `-` with ` `
 * - capitalize each word
 */
function formatName(name: string) {
  return name
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
