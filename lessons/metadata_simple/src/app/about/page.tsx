import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";

const content: SimpleContentProps = {
  title: "About",
  icon: "📝",
  description:
    "Learn more about us and our mission to provide the best products! 🌟",
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
