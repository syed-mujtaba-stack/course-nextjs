import { Suspense } from "react";
import { Column } from "./Layout";
import { LessonDescription } from "./LessonDescription";
import { LessonVideo } from "./LessonVideo";
import { Loading } from "./Loaders/Loading";
import { LessonVideoLoading } from "./Loaders/LessonVideoLoading";

export const Lesson = () => {
  return (
    <Column flex={1}>
      <Suspense fallback={<LessonVideoLoading />}>
        <LessonVideo />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LessonDescription />
      </Suspense>
    </Column>
  );
};
