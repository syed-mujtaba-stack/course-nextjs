import Image from "next/image";
import cat from "../../../public/images/cat.png";
import dog from "../../../public/images/dog.png";
import chicken from "../../../public/images/chicken.png";
import rabbit from "../../../public/images/rabbit.png";
import lizzard from "../../../public/images/lizzard.png";

export default function Page() {
  return (
    <div>
      <Image alt="cat" src={cat} />
      <Image alt="dog" src={dog} />
      <Image alt="chicken" src={chicken} />
      <Image alt="rabbit" src={rabbit} />
      <Image alt="lizzard" src={lizzard} />
    </div>
  );
}
