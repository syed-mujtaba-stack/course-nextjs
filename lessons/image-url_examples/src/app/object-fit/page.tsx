import Image from "next/image";
import { Column } from "./Column";

export default function Page() {
  return (
    <Column>
      <div
        style={{
          background: "lightgray",
          position: "relative",
          width: 480,
          height: 240,
        }}
      >
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="dog"
          src="/images/dog.png"
        />
      </div>
      <div>Nice Doggy</div>
    </Column>
  );
}
