import { PageRoot, Row } from "@/lib/Layout";
import { PageLoading } from "@/lib/Loaders/PageLoading";
import { Nav } from "@/lib/Nav";
import { TableOfContents } from "@/lib/TableOfContents";
import { Suspense } from "react";
import { Lesson } from "./Lesson";

export default function Home() {
  return (
    <PageRoot>
      <Nav />
      <Row flex={1}>
        <Suspense fallback={<PageLoading />}>
          <TableOfContents />
          <Lesson />
        </Suspense>
      </Row>
    </PageRoot>
  );
}
