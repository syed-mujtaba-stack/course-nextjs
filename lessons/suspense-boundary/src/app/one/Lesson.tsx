import { Column } from "../../lib/Layout";
import { LessonDescription } from "../../lib/LessonDescription";
import { LessonVideo } from "../../lib/LessonVideo";

export const Lesson = () => {
  return (
    <Column flex={1}>
      <LessonVideo />
      <LessonDescription />
    </Column>
  );
};
