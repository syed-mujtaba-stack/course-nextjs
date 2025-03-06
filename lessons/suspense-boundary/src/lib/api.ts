import thumbnail from "../../public/images/thumbnail.png";

/** For easier development you can set this to false */
const enableDelay = false;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Note: This is a mock API
 */
export async function fetchVideo() {
  if (enableDelay) {
    await delay(4000);
  }
  return {
    thumbnail,
    url: "https://booleanart.com/course/typescript",
  };
}

/**
 * Note: This is a mock API
 */
export async function fetchDescription() {
  if (enableDelay) {
    await delay(6000);
  }
  return {
    description: `Learn TypeScript in this comprehensive course. 
      We'll cover everything from the basics to advanced topics like 
      generics, type guards, and more.`,
  };
}

type TableOfContentsItem = {
  slug: string;
  title: string;
};

/**
 * Note: This is a mock API
 */
export async function fetchTableOfContents(): Promise<TableOfContentsItem[]> {
  if (enableDelay) {
    await delay(2000);
  }
  return [
    {
      title: "Introduction",
      slug: "intro",
    },
    {
      title: "Setup",
      slug: "setup",
    },
    {
      title: "Primitive Types",
      slug: "primitives",
    },
    {
      title: "Instance Types",
      slug: "instances",
    },
    {
      title: "Arrays And Tuples",
      slug: "arrays",
    },
    {
      title: "Objects",
      slug: "objects",
    },
    {
      title: "const declarations",
      slug: "const",
    },
    {
      title: "Function Types",
      slug: "functions",
    },
    {
      title: "Structural Typing",
      slug: "structural",
    },
    {
      title: "Classes in TypeScript",
      slug: "classes",
    },
    {
      title: "Target Compiler Option",
      slug: "target",
    },
    {
      title: "Generics",
      slug: "generics",
    },
    {
      title: "Special Types any And unknown",
      slug: "any-unknown",
    },
    {
      title: "JavaScript to TypeScript",
      slug: "js-to-ts",
    },
    {
      title: "Frontend Projects",
      slug: "frontend",
    },
    {
      title: "Type Assertions",
      slug: "assertion",
    },
    {
      title: "Type Casting",
      slug: "casting",
    },
    {
      title: "Modules",
      slug: "modules",
    },
    {
      title: "Type Declarations",
      slug: "declarations",
    },
    {
      title: "Creating NPM packages",
      slug: "npm",
    },
    {
      title: "Async Await",
      slug: "async-await",
    },
    {
      title: "Running in NodeJS",
      slug: "ts-node",
    },
    {
      title: "Lexical this",
      slug: "this",
    },
    {
      title: "readonly Modifier",
      slug: "readonly",
    },
    {
      title: "Union Types",
      slug: "unions",
    },
    {
      title: "Literal Types",
      slug: "literals",
    },
    {
      title: "Type Narrowing",
      slug: "narrowing",
    },
    {
      title: "Discriminated Unions",
      slug: "discriminated-unions",
    },
    {
      title: "Class Parameter Properties",
      slug: "class-parameters",
    },
    {
      title: "Strict Compiler Option",
      slug: "strict",
    },
    {
      title: "null vs undefined",
      slug: "null-undefined",
    },
    {
      title: "Intersection Types",
      slug: "intersections",
    },
    {
      title: "Optional Modifier",
      slug: "optional",
    },
    {
      title: "Non Null Assertion Operator",
      slug: "non-null",
    },
    {
      title: "Interfaces",
      slug: "interfaces",
    },
    {
      title: "Interface Declaration Merging",
      slug: "interface-merging",
    },
    {
      title: "Types vs Interfaces",
      slug: "types-vs-interfaces",
    },
    {
      title: "never Type",
      slug: "never",
    },
    {
      title: "implements Keyword",
      slug: "implements",
    },
    {
      title: "Definite Assignment Assertion",
      slug: "definite-assignment",
    },
    {
      title: "User Defined Type Guards",
      slug: "user-defined-type-guards",
    },
    {
      title: "Assertion Functions",
      slug: "asserts",
    },
    {
      title: "Function Overloading",
      slug: "function-overloading",
    },
    {
      title: "Call Signatures",
      slug: "call-signatures",
    },
    {
      title: "Abstract Classes",
      slug: "abstract",
    },
    {
      title: "Index Signatures",
      slug: "index-signatures",
    },
    {
      title: "Readonly Arrays and Tuples",
      slug: "readonly-arrays",
    },
    {
      title: "Double Assertions",
      slug: "double-assertion",
    },
    {
      title: "const Assertions",
      slug: "const-assertions",
    },
    {
      title: "this Parameter",
      slug: "this-parameter",
    },
    {
      title: "Generic Constraints",
      slug: "generic-constraints",
    },
    {
      title: "typeof Type Operator",
      slug: "typeof",
    },
    {
      title: "Lookup Types",
      slug: "lookup",
    },
    {
      title: "keyof Type Operator",
      slug: "keyof",
    },
    {
      title: "Conditional Types",
      slug: "conditional",
    },
    {
      title: "Contitional Types with Unions and never",
      slug: "conditional-never",
    },
    {
      title: "infer Keyword and `ReturnType<T>`",
      slug: "infer",
    },
    {
      title: "Mapped Types",
      slug: "mapped",
    },
    {
      title: "Mapped Type Modifiers",
      slug: "mapped-modifiers",
    },
    {
      title: "Template Literal Type",
      slug: "template-literal",
    },
    {
      title: "Partial<T>",
      slug: "partial-type-function",
    },
    {
      title: "Required<T>",
      slug: "required-type-function",
    },
    {
      title: "Readonly<T>",
      slug: "readonly-type-function",
    },
    {
      title: "Record<K, T>",
      slug: "record-type-function",
    },
    {
      title: "Project References",
      slug: "project-references",
    },
    {
      title: "undefined vs. optional",
      slug: "undefined-vs-optional",
    },
    {
      title: "satisfies Operator",
      slug: "satisfies",
    },
    {
      title: "PropertyKey Type",
      slug: "propertykey",
    },
    {
      title: "ThisType<T>",
      slug: "thistype-type-function",
    },
    {
      title: "Awaited<T>",
      slug: "awaited-type-function",
    },
    {
      title: "String Manipulation Types",
      slug: "string-manipulation-types",
    },
    {
      title: "Mapped Types as Clauses",
      slug: "mapped-as-clauses",
    },
    {
      title: "Union vs Intersection Mental Model",
      slug: "union-intersection-mental-model",
    },
    {
      title: "Enums are Bad",
      slug: "enums-considered-harmful",
    },
  ];
}
