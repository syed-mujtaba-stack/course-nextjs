/**
 * @module
 * Mock CMS for Product Data
 */
export type Product = {
  title: string;
  icon: string;
  description: string;
  benefits: string;
};

const products: Record<string, Product> = {
  apple: {
    title: "Apple",
    icon: "🍎",
    description: "An apple a day, keeps the doctor away!",
    benefits:
      "Apples are nutritious and delicious fruits packed with health benefits. They are rich in vitamin C, potassium, and fiber while being low in calories, which supports digestion, heart health, and weight management. The antioxidants and polyphenols in apples help reduce the risk of heart disease, type 2 diabetes, and certain cancers, while also boosting immune function and protecting brain cells. Chewing apples stimulates saliva production, promoting oral health, and their nutrients contribute to stronger bones.",
  },
  orange: {
    title: "Orange",
    icon: "🍊",
    description: "An orange a day, keeps the sniffles away!",
    benefits:
      "Oranges are a delicious and nutritious citrus fruit that are rich in vitamin C, fiber, and antioxidants. They support immune function, promote heart health, and aid in digestion. The high water content in oranges helps keep you hydrated, while their natural sugars provide a quick energy boost. Oranges also contain flavonoids that may reduce inflammation and lower the risk of chronic diseases. Enjoying oranges can contribute to healthy skin, improved mood, and overall well-being.",
  },
  banana: {
    title: "Banana",
    icon: "🍌",
    description: "A banana a day, keeps the cramps away!",
    benefits:
      "Bananas are a convenient and nutritious fruit that provide a quick source of energy. They are rich in potassium, which supports heart health and helps regulate blood pressure. Bananas also contain vitamin C, vitamin B6, and dietary fiber, promoting digestive health and aiding in weight management. The natural sugars in bananas provide a healthy energy boost, making them an ideal snack for athletes and active individuals. Additionally, bananas are low in calories and fat, making them a great choice for a healthy diet.",
  },
};

export async function fetchProduct(sku: string): Promise<Product> {
  return products[sku];
}
export async function fetchProductList(): Promise<
  { sku: string; title: string; icon: string }[]
> {
  return Object.entries(products).map(([sku, { title, icon }]) => ({
    sku,
    title,
    icon,
  }));
}
