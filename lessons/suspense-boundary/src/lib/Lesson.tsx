import { Suspense } from "react";
import { Column } from "./Layout";
import { LessonDescription } from "./LessonDescription";
import { LessonVideo } from "./LessonVideo";
import { LessonLoading } from "./Loaders/LessonLoading";

export const Lesson = () => {
  return (
    <Suspense fallback={<LessonLoading />}>
      <Column className="flex-1">
        <LessonVideo />
        <LessonDescription />
      </Column>
    </Suspense>
  );
};
