import Link from "next/link";

export const Example = ({ url }: { url: string }) => {
  return (
    <li>
      <Link href={url}>{url}</Link>
    </li>
  );
};
