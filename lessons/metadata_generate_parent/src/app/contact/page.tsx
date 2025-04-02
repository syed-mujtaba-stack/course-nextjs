import { SimpleContentProps, SimpleContent } from "@/lib/SimpleContent";
import { Metadata } from 'next';

const content: SimpleContentProps = {
  title: "Contact",
  icon: "☎️",
  description: "Get in touch with us for any inquiries or support! 📧",
};

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
};

export default async function Page() {
  return <SimpleContent {...content} />;
}
