import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";
import { Metadata } from "next";

const content: SimpleContentProps = {
  title: "About",
  icon: "📝",
  description:
    "Learn more about us and our mission to provide the best products! 🌟",
};

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
