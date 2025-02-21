import Image from "next/image";
import dog from "../../public/images/dog.png";

export default function Page() {
  return (
    <div>
      <Image alt="dog" src={dog} />
    </div>
  );
}
