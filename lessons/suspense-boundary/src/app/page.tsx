import { Column, Row } from "@/lib/Layout";
import { Lesson } from '@/lib/Lesson';
import { Nav } from "@/lib/Nav";
import { TableOfContents } from "@/lib/TableOfContents";

export default function Home() {
  return (
    <>
      <Column>
        <Nav />
        <Row>
          <TableOfContents />
          <Lesson/>
        </Row>
      </Column>
    </>
  );
}
