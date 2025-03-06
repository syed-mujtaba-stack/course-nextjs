import { Column, Row } from "@/lib/Layout";
import { Lesson } from "@/lib/Lesson";
import { TableOfContentsLoading } from "@/lib/Loaders/TableOfContentsLoading";
import { Nav } from "@/lib/Nav";
import { TableOfContents } from "@/lib/TableOfContents";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Column>
        <Nav />
        <Row>
          <Suspense fallback={<TableOfContentsLoading />}>
            <TableOfContents />
          </Suspense>
          <Lesson />
        </Row>
      </Column>
    </>
  );
}
