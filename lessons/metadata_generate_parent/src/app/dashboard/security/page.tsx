import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";
import { Metadata } from 'next';

const content: SimpleContentProps = {
  title: "Security Settings",
  icon: "🔒",
  description: "Manage your security settings and preferences here. 🔐",
};

export const metadata: Metadata = {
  title: content.title + " | Dashboard",
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
