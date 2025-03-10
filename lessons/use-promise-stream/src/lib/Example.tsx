import Link from "next/link";

export const Example = ({ url, title }: { url: string; title: string }) => {
  return (
    <li>
      <Link
        href={url}
        className="underline-offset-8 no-underline hover:underline hover:underline-offset-4 transition-all duration-200"
      >
        👉🏻 {title}
      </Link>
    </li>
  );
};
