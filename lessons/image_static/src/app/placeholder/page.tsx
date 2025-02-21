import Image from "next/image";
import cat from "../../../public/images/cat.png";
import dog from "../../../public/images/dog.png";
import chicken from "../../../public/images/chicken.png";
import rabbit from "../../../public/images/rabbit.png";
import lizzard from "../../../public/images/lizzard.png";

export default function Page() {
  return (
    <div>
      <Image alt="cat" src={cat} placeholder='blur' />
      <Image alt="dog" src={dog} placeholder='blur' />
      <Image alt="chicken" src={chicken} placeholder='blur' />
      <Image alt="rabbit" src={rabbit} placeholder='blur' />
      <Image alt="lizzard" src={lizzard} placeholder='blur' />
    </div>
  );
}
