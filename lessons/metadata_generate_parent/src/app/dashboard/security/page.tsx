import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";
import { Metadata, ResolvingMetadata } from "next";

const content: SimpleContentProps = {
  title: "Security Settings",
  icon: "🔒",
  description: "Manage your security settings and preferences here. 🔐",
};

export async function generateMetadata(
  _: unknown,
  parentResolving: ResolvingMetadata
): Promise<Metadata> {
  const parentResolved = await parentResolving;
  const title = parentResolved.title?.absolute;
  return {
    title: content.title + " | " + title,
  };
}

export default async function Page() {
  return <SimpleContent {...content} />;
}
