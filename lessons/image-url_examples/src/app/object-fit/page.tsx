import Image from "next/image";

export default function Page() {
  return (
    <div style={{ position: "relative", width: 480, height: 240 }}>
      <Image
        fill
        style={{ objectFit: "contain" }}
        alt="dog"
        src="/images/dog.png"
      />
      <div>Image of a dog</div>
    </div>
  );
}
