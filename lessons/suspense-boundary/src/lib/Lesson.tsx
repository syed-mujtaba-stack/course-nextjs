/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from "react";
import { Column } from "./Layout";
import { LessonDescription } from "./LessonDescription";
import { LessonVideo } from "./LessonVideo";
import { LessonLoading } from "./Loaders/LessonLoading";
import { LessonVideoLoading } from "./Loaders/LessonVideoLoading";
import { LessonDescriptionLoading } from "./Loaders/LessonDescriptionLoading";

export const Lesson = () => {
  return (
    <Column flex={1}>
      <LessonVideo />
      <LessonDescription />
    </Column>
  );
};
