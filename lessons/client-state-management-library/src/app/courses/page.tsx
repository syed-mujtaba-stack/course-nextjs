import { getCourses } from "@/lib/courses";
import PageClient from "./page.client";

export default async function Page() {
  const courses = await getCourses();
  return <PageClient courses={courses} />;
}
