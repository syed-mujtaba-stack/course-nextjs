import { Suspense } from "react";
import { Column } from "../../lib/Layout";
import { LessonDescription } from "../../lib/LessonDescription";
import { LessonVideo } from "../../lib/LessonVideo";
import { LessonLoading } from "../../lib/Loaders/LessonLoading";

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
