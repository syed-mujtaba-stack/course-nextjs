import Image from "next/image";
import cat from "../../../public/images/cat.png";
import dog from "../../../public/images/dog.png";
import chicken from "../../../public/images/chicken.png";
import rabbit from "../../../public/images/rabbit.png";
import lizzard from "../../../public/images/lizzard.png";

export default function Page() {
  return (
    <div>
      <Image alt="cat" src={cat} loading="eager" />
      <Image alt="dog" src={dog} loading="eager" />
      <Image alt="chicken" src={chicken} loading="eager" />
      <Image alt="rabbit" src={rabbit} loading="eager" />
      <Image alt="lizzard" src={lizzard} loading="eager" />
    </div>
  );
}
