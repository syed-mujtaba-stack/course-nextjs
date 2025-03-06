import { Column } from "./Layout";
import { LessonDescription } from "./LessonDescription";
import { LessonVideo } from "./LessonVideo";

export const Lesson = () => {
  return (
    <Column className="flex-1">
      <LessonVideo />
      <LessonDescription />
    </Column>
  );
};
