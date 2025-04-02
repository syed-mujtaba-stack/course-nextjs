import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";
import { Metadata, ResolvingMetadata } from "next";

const content: SimpleContentProps = {
  title: "Subscription Settings",
  icon: "💳",
  description: "Manage your subscription settings and preferences here. 📅",
};

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title } = await parent;
  return {
    title: content.title + " | " + title?.absolute,
  };
}

export default async function Page() {
  return <SimpleContent {...content} />;
}
