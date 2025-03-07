import { Suspense } from "react";
import { Column } from "./Layout";
import { LessonDescription } from "./LessonDescription";
import { LessonVideo } from "./LessonVideo";
import { LessonLoading } from "./Loaders/LessonLoading";

export const Lesson = () => {
  return (
    <Column flex={1}>
      <Suspense fallback={<LessonLoading />}>
        <LessonVideo />
        <LessonDescription />
      </Suspense>
    </Column>
  );
};
