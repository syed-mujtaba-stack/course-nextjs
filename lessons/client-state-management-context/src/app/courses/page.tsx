import { getCourses } from "@/lib/courses";
import Client from "./page.client";

export default async function Page() {
  const courses = await getCourses();
  return <Client courses={courses} />;
}
