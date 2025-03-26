import { Course } from "./types";

const courses: Course[] = [
  {
    id: "javascript",
    title: "Professional Modern JavaScript",
    description:
      "JavaScript is a language that has evolved significantly in recent years. If you manage to finish this monstrous course you will know enough JavaScript to tackle any challenging codebase 💪🏻",
  },
  {
    id: "typescript",
    title: "TypeScript Masterclass",
    description:
      "Supercharge your JavaScript knowledge. Learn the beauty of TypeScript, and how you can apply it to real-world code without thinking that it's magic ✨",
  },
  {
    id: "react",
    title: "Professional React",
    description:
      "ReactJS is at the center of the modern web development universe. This course presents the core API and concepts so you can start creating React Applications and being productive with this amazing framework ⚛️",
  },
  {
    id: "nextjs",
    title: "Professional NextJS",
    description:
      "NextJS allows you to take React to the next level and build full-stack applications with ease. We should know, we built BooleanArt with NextJS. This course will take you from zero to hero 💫",
  },
];

export async function getCourses() {
  return courses;
}
