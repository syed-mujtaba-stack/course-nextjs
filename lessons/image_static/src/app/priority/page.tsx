import Image from "next/image";
import dog from "../../../public/images/dog.png";

export default function Page() {
  return (
    <div>
      <div style={{ height: "900vh" }} />
      <Image alt="dog" src={dog} priority />
    </div>
  );
}
