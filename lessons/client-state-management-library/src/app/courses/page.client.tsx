"use client";

import styles from "./page.client.module.css";
import { Course } from "@/lib/types";
import { useCartStore } from "@/lib/CartStoreContext";

export default function PageClient({ courses }: { courses: Course[] }) {
  const cartStore = useCartStore();
  const cartMap = cartStore.useCoursesInCartMap();
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Professional Courses 📚</h1>
      <h2 className={styles.subheading}>
        These courses are designed to accelate your learning 🧠
        <br />
        We value your time because you have better things to do 💪🏻
      </h2>
      <ul className={styles.list}>
        {courses.map((course) => (
          <li key={course.id} className={styles.course}>
            <img src={`/images/${course.id}.png`} alt={course.title} />
            <div className={styles.courseDetails}>
              {cartMap.has(course.id) ? (
                <button
                  className={styles.secondaryButton}
                  onClick={() => cartStore.actions.removeCourse(course)}
                >
                  Remove from cart -
                </button>
              ) : (
                <button
                  className={styles.primaryButton}
                  onClick={() => cartStore.actions.addCourse(course)}
                >
                  Add to cart +
                </button>
              )}
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
