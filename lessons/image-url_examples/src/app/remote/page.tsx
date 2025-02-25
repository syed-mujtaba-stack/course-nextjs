import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        alt="dog"
        src="https://booleanart.com/images/examples/dog.png"
        width={960}
        height={960}
      />
      <div>Nice Doggy</div>
    </div>
  );
}
