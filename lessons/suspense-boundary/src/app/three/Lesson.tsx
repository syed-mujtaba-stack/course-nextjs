/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from "react";
import { Column } from "../../lib/Layout";
import { LessonDescription } from "../../lib/LessonDescription";
import { LessonVideo } from "../../lib/LessonVideo";
import { LessonLoading } from "../../lib/Loaders/LessonLoading";
import { LessonVideoLoading } from "../../lib/Loaders/LessonVideoLoading";
import { LessonDescriptionLoading } from "../../lib/Loaders/LessonDescriptionLoading";

export const Lesson = () => {
  return (
    <Column flex={1}>
      <Suspense fallback={<LessonVideoLoading />}>
        <LessonVideo />
      </Suspense>
      <Suspense fallback={<LessonDescriptionLoading />}>
        <LessonDescription />
      </Suspense>
    </Column>
  );
};
