/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, PageRoot, Row } from "@/lib/Layout";
import { PageLoading } from "@/lib/Loaders/PageLoading";
import { Nav } from "@/lib/Nav";
import { TableOfContents } from "@/lib/Lesson/TableOfContents";
import { Suspense } from "react";
import { LessonVideo } from "@/lib/Lesson/LessonVideo";
import { LessonDescription } from "@/lib/Lesson/LessonDescription";
import { fetchLesson } from "@/lib/api";

export default async function Home() {
  const lesson = await fetchLesson();
  return (
    <PageRoot>
      <Nav />
      <Row flex={1}>
        <TableOfContents lesson={lesson} />
        <Column flex={1}>
          <LessonVideo lesson={lesson} />
          <LessonDescription lesson={lesson} />
        </Column>
      </Row>
    </PageRoot>
  );
}
