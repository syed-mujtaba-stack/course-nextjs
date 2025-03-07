import { PageRoot, Row } from "@/lib/Layout";
import { Nav } from "@/lib/Nav";
import { TableOfContents } from "@/lib/TableOfContents";
import { Lesson } from "./Lesson";

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
