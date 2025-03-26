"use client";

import { Course } from "@/lib/types";
import { useCartStore } from "@/lib/CartStoreContext";

export default function Client({ courses }: { courses: Course[] }) {
  const cartStore = useCartStore();
  return (
    <div>
      <h1>Client State Management with Context</h1>
      <p>Checkout the courses</p>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.title} - {course.description}
            <button onClick={() => cartStore.addCourse(course)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
