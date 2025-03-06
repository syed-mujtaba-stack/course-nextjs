import { fetchTableOfContents } from "./api";
import { Column } from './Layout';

export async function TableOfContents() {
  await fetchTableOfContents();
  return <Column className={`w-96 bg-blue-300 flex flex-1`}>asdf</Column>;
}
