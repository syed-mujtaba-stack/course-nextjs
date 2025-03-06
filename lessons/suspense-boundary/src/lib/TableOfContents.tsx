import Link from "next/link";
import { fetchTableOfContents } from "./api";
import { Column } from "./Layout";

export async function TableOfContents() {
  const toc = await fetchTableOfContents();
  return (
    <Column className={`w-[569px] bg-gray-700 text-xl`}>
      {toc.map((item, i) => (
        <Link
          key={item.slug}
          href={`https://booleanart.com/course/typescript/${item.slug}`}
          target="_blank"
          className="block p-2 text-gray-300 hover:text-gray-800 hover:bg-blue-400 transition-all"
        >
          {i + 1}. {item.title}
        </Link>
      ))}
    </Column>
  );
}
