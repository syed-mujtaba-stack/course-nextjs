import { Suspense } from "react";
import { Column } from "./Layout";
import { LessonDescription } from "./LessonDescription";
import { LessonVideo } from "./LessonVideo";

export const Lesson = () => {
  return (
    <Column className="flex-1">
      <Suspense fallback={<div>Loading Lesson Video...</div>}>
        <LessonVideo />
      </Suspense>
      <Suspense fallback={<div>Loading Lesson Description...</div>}>
        <LessonDescription />
      </Suspense>
    </Column>
  );
};
