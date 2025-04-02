import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";

const content: SimpleContentProps = {
  title: "Security Settings",
  icon: "🔒",
  description: "Manage your security settings and preferences here. 🔐",
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
