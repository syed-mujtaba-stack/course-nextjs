/**
 * @module
 * Mock CMS Implementation
 */

type PageContent = {
  title: string;
  icon: string;
  description: string;
};

const mockContent: Record<string, PageContent> = {
  about: {
    title: "About",
    icon: "📝",
    description:
      "Learn more about us and our mission to provide the best products! 🌟",
  },
  contact: {
    title: "Contact",
    icon: "☎️",
    description: "Get in touch with us for any inquiries or support! 📧",
  },
};

export async function fetchPageContent(slug: string): Promise<PageContent> {
  return mockContent[slug];
}

export async function fetchPageIdAndTitles(): Promise<
  { id: string; title: string }[]
> {
  return Object.entries(mockContent).map(([id, content]) => ({
    id,
    title: content.title,
  }));
}
