"use client";

import { Course } from "@/lib/types";
import { useCartStore } from "@/lib/CartStoreContext";

export default function PageClient({ courses }: { courses: Course[] }) {
  const cartStore = useCartStore();
  return (
    <div>
      <h1>Checkout the courses</h1>
      <p>
        These courses are designed to accelate your learning 🧠
        <br />
        We value your time because you have better things to do 💪🏻
      </p>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.title} - {course.description}
            {cartStore.isCourseInCart(course) ? (
              <button onClick={() => cartStore.removeCourse(course)}>
                Remove from cart
              </button>
            ) : (
              <button onClick={() => cartStore.addCourse(course)}>
                Add to cart
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
