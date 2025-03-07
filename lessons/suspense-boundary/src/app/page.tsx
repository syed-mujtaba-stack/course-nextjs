/* eslint-disable @typescript-eslint/no-unused-vars */
import { PageRoot, Row } from "@/lib/Layout";
import { Lesson } from "@/lib/Lesson";
import { PageLoading } from "@/lib/Loaders/PageLoading";
import { TableOfContentsLoading } from "@/lib/Loaders/TableOfContentsLoading";
import { Nav } from "@/lib/Nav";
import { TableOfContents } from "@/lib/TableOfContents";
import { Suspense } from "react";

export default function Home() {
  return (
    <PageRoot>
      <Nav />
      <Row flex={1}>
        <TableOfContents />
        <Lesson />
      </Row>
    </PageRoot>
  );
}
