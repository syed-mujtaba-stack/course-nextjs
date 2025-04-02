import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";

const content: SimpleContentProps = {
  title: "Subscription Settings",
  icon: "💳",
  description: "Manage your subscription settings and preferences here. 📅",
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
