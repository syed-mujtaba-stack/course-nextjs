const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type TableOfContentsItem = {
  slug: string;
  title: string;
};

/**
 * Note: This is a mock API
 */
export async function fetchTableOfContents(): Promise<TableOfContentsItem[]> {
  await delay(2000);
  return [];
}
