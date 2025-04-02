import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";
import { Metadata } from "next";

const content: SimpleContentProps = {
  title: "Subscription Settings",
  icon: "💳",
  description: "Manage your subscription settings and preferences here. 📅",
};

export const metadata: Metadata = {
  title: content.title + " | Dashboard",
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
