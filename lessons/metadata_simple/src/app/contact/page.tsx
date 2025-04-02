import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";

const content: SimpleContentProps = {
  title: "Contact",
  icon: "📞",
  description: "Get in touch with us for any inquiries or support! 📧",
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
