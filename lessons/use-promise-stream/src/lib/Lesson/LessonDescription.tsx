"use client";

import { Lesson } from "../api";
import { Column } from "../Layout";

export function LessonDescription(props: { lesson: Lesson }) {
  const { description } = props.lesson;
  return (
    <Column className="p-4 text-white" gap={16}>
      <h2 className="text-2xl font-semibold">{description.title}</h2>
      <p className="text-lg">{description.body}</p>
    </Column>
  );
}
